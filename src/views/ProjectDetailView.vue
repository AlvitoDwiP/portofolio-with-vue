<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { useHead } from '@vueuse/head'
import { ArrowLeft } from 'lucide-vue-next'
import { useRoute } from 'vue-router'
import AppShell from '@/components/layout/AppShell.vue'
import ProjectCaseStudyApproach from '@/components/projects/case-study/ProjectCaseStudyApproach.vue'
import ProjectCaseStudyAppPreview from '@/components/projects/case-study/ProjectCaseStudyAppPreview.vue'
import ProjectCaseStudyContext from '@/components/projects/case-study/ProjectCaseStudyContext.vue'
import ProjectCaseStudyHero from '@/components/projects/case-study/ProjectCaseStudyHero.vue'
import ProjectCaseStudyImpact from '@/components/projects/case-study/ProjectCaseStudyImpact.vue'
import ProjectCaseStudyInsights from '@/components/projects/case-study/ProjectCaseStudyInsights.vue'
import ProjectCaseStudyMeta from '@/components/projects/case-study/ProjectCaseStudyMeta.vue'
import ProjectCaseStudyProblem from '@/components/projects/case-study/ProjectCaseStudyProblem.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { useProjects } from '@/composables/useProjects'
import { createPageTitle } from '@/utils/createPageTitle'

const route = useRoute()
const { findProjectBySlug } = useProjects()
const APP_PREVIEW_HASH = '#tampilan-aplikasi'
const HEADER_SELECTOR = '[data-site-header]'
const HEADER_GAP = 16
const UI_HIDE_SCROLL_THRESHOLD = 320
const UI_HIDE_DELAY = 150
const UI_ENTER_DURATION = 620
const UI_LEAVE_DURATION = 420
const UI_HEIGHT_DURATION = 460
const UI_EASING = 'cubic-bezier(0.22, 1, 0.36, 1)'
const UI_HIDE_EASING = 'cubic-bezier(0.4, 0, 0.2, 1)'
const UI_SCROLL_TOLERANCE = 20
const UI_SCROLL_SETTLE_THRESHOLD = 48
const UI_SCROLL_SETTLE_TIMEOUT = 1800

const project = computed(() => findProjectBySlug(route.params.slug))

const projectCategoryLabel = computed(
  () => project.value?.displayCategory ?? project.value?.category
)

const isDataAnalyticsProject = computed(() => project.value?.category === 'Data Analytics')
const isMobileAppProject = computed(
  () => project.value?.cardVariant === 'mobile' || project.value?.displayCategory === 'MOBILE APPS'
)

const splitIntoSentences = (text = '') =>
  text
    .split(/(?<=\.)\s+/)
    .map((item) => item.trim())
    .filter(Boolean)

const buildFallbackProblemHighlights = (items = []) =>
  items.map((item, index) => ({
    title: `Problem ${String(index + 1).padStart(2, '0')}`,
    description: item,
  }))

const buildFallbackApproachGroups = (items = []) =>
  items.map((item, index) => ({
    title: `Step ${String(index + 1).padStart(2, '0')}`,
    description: item,
  }))

const buildFallbackImpact = (currentProject) =>
  [currentProject.output, ...splitIntoSentences(currentProject.insights).slice(0, 2)].filter(
    Boolean
  )

const buildHeroLinks = (currentProject) => {
  if (!currentProject?.links) {
    return []
  }

  const primaryLink = currentProject.links.demo
    ? {
        label: 'View Dashboard',
        href: currentProject.links.demo,
        variant: 'primary',
      }
    : currentProject.links.notebook
      ? {
          label: `View ${currentProject.links.notebookLabel ?? 'Notebook'}`,
          href: currentProject.links.notebook,
          variant: 'primary',
        }
      : null

  const secondaryLinks = [
    currentProject.links.ppt
      ? {
          label: 'View PPT',
          href: currentProject.links.ppt,
          variant: 'secondary',
        }
      : null,
    currentProject.links.github
      ? {
          label: 'GitHub Repository',
          href: currentProject.links.github,
          variant: 'secondary',
        }
      : null,
    currentProject.links.demo && currentProject.links.notebook
      ? {
          label: `View ${currentProject.links.notebookLabel ?? 'Notebook'}`,
          href: currentProject.links.notebook,
          variant: 'secondary',
        }
      : null,
  ].filter(Boolean)

  return [primaryLink, ...secondaryLinks].filter(Boolean).slice(0, 3)
}

const heroLinks = computed(() => buildHeroLinks(project.value))
const canShowUiPreview = computed(
  () => isMobileAppProject.value && Boolean(caseStudy.value?.appPreview?.imageSrc)
)

const contextParagraph = computed(() => {
  const paragraphs = caseStudy.value?.context ?? []
  return paragraphs.join(' ').trim()
})

const buildMobileAppPreview = (currentProject, study) => {
  if (
    currentProject?.cardVariant !== 'mobile' &&
    currentProject?.displayCategory !== 'MOBILE APPS'
  ) {
    return null
  }

  if (study?.appPreview?.imageSrc) {
    return study.appPreview
  }

  if (!currentProject?.cover) {
    return null
  }

  return {
    imageSrc: currentProject.cover,
    imageAlt: `Preview fitur utama ${currentProject.title}`,
    description:
      'Preview ini memperlihatkan bagaimana pencarian mitra, informasi produk, dan eksplorasi lokasi dirangkum dalam satu alur mobile yang ringkas dan mudah dipakai.',
  }
}

const caseStudy = computed(() => {
  if (!project.value) {
    return null
  }

  const currentProject = project.value
  const study = currentProject.caseStudy ?? {}

  return {
    heroSummary: study.heroSummary ?? currentProject.shortDescription,
    context: study.context?.length ? study.context : [currentProject.overview],
    problemHighlights: study.problemHighlights?.length
      ? study.problemHighlights
      : buildFallbackProblemHighlights(currentProject.problem),
    approachGroups: study.approachGroups?.length
      ? study.approachGroups
      : buildFallbackApproachGroups(currentProject.approach),
    insightHighlights: study.insightHighlights ?? [],
    insightSummary: currentProject.insights,
    appPreview: buildMobileAppPreview(currentProject, study),
    impact: study.impact?.length ? study.impact : buildFallbackImpact(currentProject),
  }
})

const isUiMounted = ref(false)
const isUiVisible = ref(false)
const isUiIntersecting = ref(false)
const appPreviewAnchorRef = ref(null)
const appPreviewShellRef = ref(null)

let appPreviewObserver = null
let uiScrollFrameId = 0
let uiTransitionTimerId = null
let uiHideDelayId = null
let uiRevealRequestId = 0

const getHeaderOffset = () => {
  if (typeof document === 'undefined') {
    return HEADER_GAP
  }

  const headerHeight = document.querySelector(HEADER_SELECTOR)?.getBoundingClientRect().height ?? 0

  return Math.ceil(headerHeight + HEADER_GAP)
}

const getAppPreviewAnchorElement = () => appPreviewAnchorRef.value ?? null
const getAppPreviewElement = () => appPreviewShellRef.value ?? null

const replacePreviewHash = (hash = '') => {
  if (typeof window === 'undefined') {
    return
  }

  const url = new URL(window.location.href)
  url.hash = hash.startsWith('#') ? hash.slice(1) : ''
  window.history.replaceState(window.history.state, '', url)
}

const disconnectAppPreviewObserver = () => {
  appPreviewObserver?.disconnect()
  appPreviewObserver = null
}

const clearUiTransitionTimer = () => {
  if (!uiTransitionTimerId) {
    return
  }

  window.clearTimeout(uiTransitionTimerId)
  uiTransitionTimerId = null
}

const clearUiHideDelay = () => {
  if (!uiHideDelayId) {
    return
  }

  window.clearTimeout(uiHideDelayId)
  uiHideDelayId = null
}

const runOnNextFrame = (callback) => {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(callback)
  })
}

const getUiContentElement = (element) => element.firstElementChild

const cleanupUiTransition = (element) => {
  const content = getUiContentElement(element)

  element.style.removeProperty('height')
  element.style.removeProperty('overflow')
  element.style.removeProperty('transition')
  element.style.removeProperty('will-change')

  if (!content) {
    return
  }

  content.style.removeProperty('opacity')
  content.style.removeProperty('transform')
  content.style.removeProperty('transition')
  content.style.removeProperty('will-change')
}

const finishUiTransition = (element, done, duration, resetToAuto = false) => {
  clearUiTransitionTimer()

  uiTransitionTimerId = window.setTimeout(() => {
    if (resetToAuto) {
      cleanupUiTransition(element)
    } else {
      const content = getUiContentElement(element)
      element.style.removeProperty('will-change')
      element.style.removeProperty('overflow')
      element.style.removeProperty('transition')
      if (content) {
        content.style.removeProperty('will-change')
        content.style.removeProperty('transition')
      }
    }

    done()
    uiTransitionTimerId = null
  }, duration)
}

const onUiBeforeEnter = (element) => {
  clearUiTransitionTimer()
  const content = getUiContentElement(element)

  element.style.height = '0px'
  element.style.overflow = 'hidden'
  element.style.willChange = 'height'

  if (!content) {
    return
  }

  content.style.opacity = '0'
  content.style.transform = 'translateY(24px) scale(0.99)'
  content.style.willChange = 'opacity, transform'
}

const onUiEnter = (element, done) => {
  const content = getUiContentElement(element)
  const targetHeight = `${element.scrollHeight}px`

  runOnNextFrame(() => {
    element.style.transition = `height ${UI_HEIGHT_DURATION}ms ${UI_EASING}`
    element.style.height = targetHeight

    if (!content) {
      return
    }

    content.style.transition = [
      `opacity ${UI_ENTER_DURATION}ms ${UI_EASING}`,
      `transform ${UI_ENTER_DURATION}ms ${UI_EASING}`,
    ].join(', ')
    content.style.opacity = '1'
    content.style.transform = 'translateY(0) scale(1)'
  })

  finishUiTransition(element, done, UI_ENTER_DURATION, true)
}

const onUiBeforeLeave = (element) => {
  clearUiTransitionTimer()
  const content = getUiContentElement(element)

  element.style.height = `${element.scrollHeight}px`
  element.style.overflow = 'hidden'
  element.style.willChange = 'height'

  if (!content) {
    return
  }

  content.style.opacity = '1'
  content.style.transform = 'translateY(0) scale(1)'
  content.style.willChange = 'opacity, transform'
}

const onUiLeave = (element, done) => {
  void element.offsetHeight
  const content = getUiContentElement(element)

  runOnNextFrame(() => {
    element.style.transition = `height ${UI_HEIGHT_DURATION}ms ${UI_HIDE_EASING}`
    element.style.height = '0px'

    if (!content) {
      return
    }

    content.style.transition = [
      `opacity ${UI_LEAVE_DURATION}ms ease-in-out`,
      `transform ${UI_LEAVE_DURATION}ms ${UI_HIDE_EASING}`,
    ].join(', ')
    content.style.opacity = '0'
    content.style.transform = 'translateY(-8px) scale(0.995)'
  })

  finishUiTransition(element, done, UI_LEAVE_DURATION)
}

const hideUiPreview = () => {
  clearUiHideDelay()

  if (!isUiVisible.value && !isUiMounted.value) {
    return
  }

  isUiVisible.value = false
  isUiIntersecting.value = false
  isUiMounted.value = false
  uiRevealRequestId += 1

  if (typeof window !== 'undefined' && window.location.hash === APP_PREVIEW_HASH) {
    replacePreviewHash()
  }
}

const shouldHideUiPreview = () => {
  if (!isUiVisible.value || isUiIntersecting.value || typeof window === 'undefined') {
    return false
  }

  const section = getAppPreviewElement()

  if (!section) {
    return false
  }

  const rect = section.getBoundingClientRect()

  return rect.top < getHeaderOffset() && rect.bottom < getHeaderOffset() - UI_HIDE_SCROLL_THRESHOLD
}

const scheduleHideUiPreview = () => {
  if (!isUiMounted.value || !isUiVisible.value || uiHideDelayId) {
    return
  }

  uiHideDelayId = window.setTimeout(() => {
    uiHideDelayId = null

    if (shouldHideUiPreview()) {
      hideUiPreview()
    }
  }, UI_HIDE_DELAY)
}

const handleUiScroll = () => {
  if (uiScrollFrameId || typeof window === 'undefined') {
    return
  }

  uiScrollFrameId = window.requestAnimationFrame(() => {
    uiScrollFrameId = 0

    if (shouldHideUiPreview()) {
      scheduleHideUiPreview()
      return
    }

    clearUiHideDelay()
  })
}

const setupAppPreviewObserver = () => {
  disconnectAppPreviewObserver()

  if (typeof window === 'undefined') {
    return
  }

  const section = getAppPreviewElement()

  if (!section) {
    return
  }

  appPreviewObserver = new IntersectionObserver(
    ([entry]) => {
      isUiIntersecting.value = entry?.isIntersecting ?? false

      if (isUiIntersecting.value) {
        clearUiHideDelay()
        return
      }

      if (shouldHideUiPreview()) {
        scheduleHideUiPreview()
      }
    },
    {
      threshold: [0, 0.18, 0.4, 0.62],
      rootMargin: `-${getHeaderOffset()}px 0px -12% 0px`,
    }
  )

  appPreviewObserver.observe(section)
}

const waitForScrollToSettle = (targetTop) =>
  new Promise((resolve) => {
    const startedAt = window.performance.now()
    let previousY = window.scrollY
    let settledFrames = 0

    const check = () => {
      const currentY = window.scrollY
      const distance = Math.abs(currentY - targetTop)
      const delta = Math.abs(currentY - previousY)
      const isNearTarget = distance <= UI_SCROLL_TOLERANCE
      const isNearlySettled = distance <= UI_SCROLL_SETTLE_THRESHOLD && delta <= 0.6
      const hasTimedOut = window.performance.now() - startedAt >= UI_SCROLL_SETTLE_TIMEOUT

      if (isNearTarget || isNearlySettled) {
        settledFrames += 1
      } else {
        settledFrames = 0
      }

      if (settledFrames >= 4 || hasTimedOut) {
        resolve()
        return
      }

      previousY = currentY
      window.requestAnimationFrame(check)
    }

    window.requestAnimationFrame(check)
  })

const scrollToUiPreview = async () => {
  if (!canShowUiPreview.value || typeof window === 'undefined') {
    return
  }

  clearUiHideDelay()
  const revealRequestId = ++uiRevealRequestId
  const anchor = getAppPreviewAnchorElement()

  if (!anchor) {
    return
  }

  const top = window.scrollY + anchor.getBoundingClientRect().top - getHeaderOffset()

  window.scrollTo({
    top: Math.max(top, 0),
    behavior: 'smooth',
  })
  replacePreviewHash(APP_PREVIEW_HASH)

  await waitForScrollToSettle(Math.max(top, 0))

  if (revealRequestId !== uiRevealRequestId) {
    return
  }

  if (isUiMounted.value && isUiVisible.value) {
    return
  }

  isUiVisible.value = true
  isUiMounted.value = true
  await nextTick()
}

watch(
  isUiMounted,
  async (visible) => {
    if (typeof window === 'undefined') {
      return
    }

    if (visible) {
      await nextTick()
      setupAppPreviewObserver()
      window.addEventListener('scroll', handleUiScroll, { passive: true })
      handleUiScroll()
      return
    }

    disconnectAppPreviewObserver()
    window.removeEventListener('scroll', handleUiScroll)
    clearUiHideDelay()

    if (uiScrollFrameId) {
      window.cancelAnimationFrame(uiScrollFrameId)
      uiScrollFrameId = 0
    }
  },
  { flush: 'post' }
)

watch(
  () => route.params.slug,
  () => {
    isUiMounted.value = false
    isUiVisible.value = false
    isUiIntersecting.value = false
    clearUiHideDelay()
    uiRevealRequestId += 1
  }
)

watch(canShowUiPreview, (enabled) => {
  if (!enabled) {
    isUiMounted.value = false
    isUiVisible.value = false
    isUiIntersecting.value = false
    clearUiHideDelay()
    uiRevealRequestId += 1
  }
})

onBeforeUnmount(() => {
  disconnectAppPreviewObserver()
  clearUiTransitionTimer()
  clearUiHideDelay()
  uiRevealRequestId += 1

  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleUiScroll)

    if (uiScrollFrameId) {
      window.cancelAnimationFrame(uiScrollFrameId)
      uiScrollFrameId = 0
    }
  }
})

useHead(() => ({
  title: createPageTitle(project.value?.title ?? 'Proyek'),
  meta: [
    {
      name: 'description',
      content:
        project.value?.shortDescription ??
        'Halaman detail proyek untuk portofolio personal berbasis Vue 3.',
    },
  ],
}))
</script>

<template>
  <AppShell>
    <section class="section-theme section-theme-detail-project">
      <BaseContainer class="[--container-width:78rem] py-14 sm:py-16 lg:py-20">
        <div v-if="project && caseStudy" class="space-y-12 sm:space-y-14">
          <ProjectCaseStudyHero
            :back-to="{ name: 'home', hash: '#proyek' }"
            :category="projectCategoryLabel"
            :title="project.title"
            :summary="caseStudy.heroSummary"
            :tools="project.tools"
            :links="heroLinks"
            :ui-preview-target="canShowUiPreview ? APP_PREVIEW_HASH : ''"
            @view-ui="scrollToUiPreview"
          />

          <div :id="APP_PREVIEW_HASH.slice(1)" ref="appPreviewAnchorRef" class="scroll-mt-24">
            <Transition
              @before-enter="onUiBeforeEnter"
              @enter="onUiEnter"
              @before-leave="onUiBeforeLeave"
              @leave="onUiLeave"
            >
              <div
                v-if="canShowUiPreview && isUiMounted"
                ref="appPreviewShellRef"
                aria-live="polite"
              >
                <ProjectCaseStudyAppPreview
                  :section-id="''"
                  :image-src="caseStudy.appPreview.imageSrc"
                  :image-alt="caseStudy.appPreview.imageAlt"
                  :description="caseStudy.appPreview.description"
                />
              </div>
            </Transition>
          </div>

          <div class="grid gap-12 xl:grid-cols-[minmax(0,1fr)_16.5rem] xl:gap-10">
            <div class="space-y-14 sm:space-y-16">
              <ProjectCaseStudyContext
                :paragraph="contextParagraph"
                :variant="isDataAnalyticsProject ? 'wide' : 'compact'"
              />

              <ProjectCaseStudyProblem :items="caseStudy.problemHighlights" />

              <ProjectCaseStudyApproach :items="caseStudy.approachGroups" />

              <ProjectCaseStudyInsights
                :items="caseStudy.insightHighlights"
                :summary="caseStudy.insightSummary"
              />

              <ProjectCaseStudyImpact :items="caseStudy.impact" />
            </div>

            <ProjectCaseStudyMeta :tools="project.tools" :output="project.output" />
          </div>
        </div>

        <div
          v-else
          class="glass glass-panel-solid rounded-lg border-dashed p-8 text-center sm:p-10"
        >
          <h1 class="font-display text-3xl text-textPrimary">Proyek tidak ditemukan</h1>
          <p class="mx-auto mt-4 max-w-xl text-sm leading-7 text-textSecondary">
            Slug yang Anda buka tidak ada di data project lokal. Silakan kembali ke daftar proyek
            untuk membuka detail yang tersedia.
          </p>
          <RouterLink
            :to="{ name: 'home', hash: '#proyek' }"
            class="glass-chip-strong glass-hover mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium"
          >
            <ArrowLeft class="h-4 w-4" />
            Kembali ke beranda
          </RouterLink>
        </div>
      </BaseContainer>
    </section>
  </AppShell>
</template>
