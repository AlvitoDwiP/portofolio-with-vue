<script setup>
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import { ArrowLeft } from 'lucide-vue-next'
import { useRoute } from 'vue-router'
import AppShell from '@/components/layout/AppShell.vue'
import ProjectCaseStudyApproach from '@/components/projects/case-study/ProjectCaseStudyApproach.vue'
import ProjectCaseStudyContext from '@/components/projects/case-study/ProjectCaseStudyContext.vue'
import ProjectCaseStudyHero from '@/components/projects/case-study/ProjectCaseStudyHero.vue'
import ProjectCaseStudyImpact from '@/components/projects/case-study/ProjectCaseStudyImpact.vue'
import ProjectCaseStudyInsights from '@/components/projects/case-study/ProjectCaseStudyInsights.vue'
import ProjectCaseStudyMeta from '@/components/projects/case-study/ProjectCaseStudyMeta.vue'
import ProjectCaseStudyProblem from '@/components/projects/case-study/ProjectCaseStudyProblem.vue'
import ProjectCaseStudyVisualOutput from '@/components/projects/case-study/ProjectCaseStudyVisualOutput.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { useProjects } from '@/composables/useProjects'
import { createPageTitle } from '@/utils/createPageTitle'

const route = useRoute()
const { findProjectBySlug } = useProjects()

const project = computed(() => findProjectBySlug(route.params.slug))

const projectCategoryLabel = computed(
  () => project.value?.displayCategory ?? project.value?.category
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
    implication:
      'Tanpa pembacaan yang lebih terstruktur, implikasi masalah ini mudah tertutup oleh deskripsi umum proyek.',
  }))

const buildFallbackApproachGroups = (items = []) =>
  items.map((item, index) => ({
    title: `Step ${String(index + 1).padStart(2, '0')}`,
    description: item,
  }))

const buildFallbackVisualOutputs = (currentProject) => {
  if (!currentProject?.links) {
    return []
  }

  const outputs = []

  if (currentProject.links.demo) {
    outputs.push({
      label: 'Interactive Output',
      title: currentProject.links.demoLabel ?? 'Live Demo',
      description:
        'Output utama proyek ini tersedia untuk ditinjau langsung agar reviewer dapat melihat hasil kerja secara lebih konkret.',
      href: currentProject.links.demo,
      ctaLabel: `View ${currentProject.links.demoLabel ?? 'Demo'}`,
      previewType: 'dashboard',
      image: currentProject.cover,
      imageAlt: currentProject.coverAlt ?? currentProject.title,
    })
  }

  if (currentProject.links.notebook) {
    outputs.push({
      label: 'Working File',
      title: currentProject.links.notebookLabel ?? 'Notebook',
      description:
        'Dokumen kerja ini menunjukkan proses analisis atau eksperimen yang mendukung hasil akhir proyek.',
      href: currentProject.links.notebook,
      ctaLabel: `View ${currentProject.links.notebookLabel ?? 'Notebook'}`,
      previewType: 'image',
      image: currentProject.cover,
      imageAlt: currentProject.coverAlt ?? currentProject.title,
    })
  }

  if (currentProject.links.ppt) {
    outputs.push({
      label: 'Presentation Deck',
      title: currentProject.links.pptLabel ?? 'Presentation',
      description:
        'Presentasi ringkas ini merangkum konteks, proses, dan insight utama proyek dalam format yang cepat dipahami.',
      href: currentProject.links.ppt,
      ctaLabel: `View ${currentProject.links.pptLabel ?? 'Presentation'}`,
      previewType: 'image',
      image: currentProject.cover,
      imageAlt: currentProject.coverAlt ?? currentProject.title,
    })
  }

  return outputs
}

const buildFallbackImpact = (currentProject) =>
  [currentProject.output, ...splitIntoSentences(currentProject.insights).slice(0, 2)].filter(
    Boolean
  )

const buildSupportLinks = (currentProject) => {
  if (!currentProject?.links) {
    return []
  }

  return [
    currentProject.links.github
      ? {
          label: 'GitHub Repository',
          href: currentProject.links.github,
          kind: 'github',
        }
      : null,
    currentProject.links.demo
      ? {
          label: currentProject.links.demoLabel ?? 'Demo',
          href: currentProject.links.demo,
          kind: 'external',
        }
      : null,
    currentProject.links.ppt
      ? {
          label: currentProject.links.pptLabel ?? 'Presentation',
          href: currentProject.links.ppt,
          kind: 'external',
        }
      : null,
    currentProject.links.notebook
      ? {
          label: currentProject.links.notebookLabel ?? 'Notebook',
          href: currentProject.links.notebook,
          kind: 'external',
        }
      : null,
  ].filter(Boolean)
}

const heroLinks = computed(() => {
  if (!project.value?.links) {
    return []
  }

  const preferredLinks = [
    project.value.links.demo
      ? {
          label: `View ${project.value.links.demoLabel ?? 'Demo'}`,
          href: project.value.links.demo,
          variant: 'primary',
        }
      : null,
    project.value.links.ppt
      ? {
          label: `View ${project.value.links.pptLabel ?? 'Presentation'}`,
          href: project.value.links.ppt,
          variant: 'secondary',
        }
      : null,
    project.value.links.notebook
      ? {
          label: `View ${project.value.links.notebookLabel ?? 'Notebook'}`,
          href: project.value.links.notebook,
          variant: 'secondary',
        }
      : null,
  ].filter(Boolean)

  return preferredLinks.slice(0, 2)
})

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
    visualOutputs: study.visualOutputs?.length
      ? study.visualOutputs
      : buildFallbackVisualOutputs(currentProject),
    impact: study.impact?.length ? study.impact : buildFallbackImpact(currentProject),
    supportLinks: buildSupportLinks(currentProject),
    coverImage: currentProject.cover,
    coverAlt: currentProject.coverAlt ?? currentProject.title,
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
            :links="heroLinks"
            :cover-image="caseStudy.coverImage"
            :cover-alt="caseStudy.coverAlt"
          />

          <div class="grid gap-12 xl:grid-cols-[minmax(0,1fr)_18rem] xl:gap-10">
            <div class="space-y-14 sm:space-y-16">
              <ProjectCaseStudyContext :paragraphs="caseStudy.context" />

              <ProjectCaseStudyProblem :items="caseStudy.problemHighlights" />

              <ProjectCaseStudyApproach :items="caseStudy.approachGroups" />

              <ProjectCaseStudyInsights
                :items="caseStudy.insightHighlights"
                :summary="caseStudy.insightSummary"
              />

              <ProjectCaseStudyVisualOutput :items="caseStudy.visualOutputs" />

              <ProjectCaseStudyImpact :items="caseStudy.impact" />
            </div>

            <ProjectCaseStudyMeta
              :tools="project.tools"
              :output="project.output"
              :links="caseStudy.supportLinks"
            />
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
            class="glass-chip-strong glass-hover mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
          >
            <ArrowLeft class="h-4 w-4" />
            Kembali ke beranda
          </RouterLink>
        </div>
      </BaseContainer>
    </section>
  </AppShell>
</template>
