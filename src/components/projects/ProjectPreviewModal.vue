<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-vue-next'
import { resolveProjectCardVariant } from '@/components/projects/projectCardVariants'
import { useHorizontalSwipe } from '@/composables/useHorizontalSwipe'
import { createProjectThumbnail } from '@/utils/createProjectThumbnail'
import { normalizeProjectScreenshots } from '@/utils/normalizeProjectScreenshots'

const props = defineProps({
  project: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits(['close'])

const activeIndex = ref(0)

const cardVariant = computed(() => resolveProjectCardVariant(props.project))
const primaryScreenshotMeta = computed(() => {
  if (!props.project?.caseStudy?.appPreview?.imageSrc) {
    return null
  }

  return (
    props.project.caseStudy.appPreview.images?.find(
      (item) =>
        item?.src === props.project.caseStudy.appPreview.imageSrc ||
        item?.image === props.project.caseStudy.appPreview.imageSrc
    ) ?? null
  )
})

const basePreviewImage = computed(() => {
  if (!props.project) {
    return null
  }

  return {
    src:
      props.project.caseStudy?.appPreview?.imageSrc ||
      props.project.cover ||
      createProjectThumbnail(props.project),
    alt:
      props.project.caseStudy?.appPreview?.imageAlt ||
      `Preview project ${props.project.title}`,
    title: primaryScreenshotMeta.value?.title || primaryScreenshotMeta.value?.label || 'Preview Utama',
    description:
      primaryScreenshotMeta.value?.description ||
      primaryScreenshotMeta.value?.caption ||
      props.project.caseStudy?.appPreview?.description ||
      '',
  }
})

const previewImages = computed(() => {
  if (!props.project) {
    return []
  }

  return normalizeProjectScreenshots(
    [basePreviewImage.value, ...(props.project.caseStudy?.appPreview?.images ?? [])],
    basePreviewImage.value
  )
})

const activeImage = computed(() => previewImages.value[activeIndex.value] ?? basePreviewImage.value)
const projectDescription = computed(
  () => props.project?.shortDescription || props.project?.overview || ''
)
const activeImageTitle = computed(() => activeImage.value?.title || 'Preview Utama')
const activeImageDescription = computed(
  () => activeImage.value?.description || props.project?.caseStudy?.appPreview?.description || ''
)

const closeModal = () => {
  emit('close')
}

const setActiveIndex = (index) => {
  if (!previewImages.value.length) {
    activeIndex.value = 0
    return
  }

  const total = previewImages.value.length
  activeIndex.value = ((index % total) + total) % total
}

const showPrevious = () => {
  setActiveIndex(activeIndex.value - 1)
}

const showNext = () => {
  setActiveIndex(activeIndex.value + 1)
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeModal()
    return
  }

  if (event.key === 'ArrowLeft') {
    showPrevious()
  }

  if (event.key === 'ArrowRight') {
    showNext()
  }
}

const {
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
  handleTouchCancel,
} = useHorizontalSwipe({
  onNext: showNext,
  onPrevious: showPrevious,
})

watch(
  () => props.project,
  (project) => {
    activeIndex.value = 0

    if (typeof document === 'undefined') {
      return
    }

    document.body.style.overflow = project ? 'hidden' : ''

    if (typeof window === 'undefined') {
      return
    }

    if (project) {
      window.addEventListener('keydown', handleKeydown)
      return
    }

    window.removeEventListener('keydown', handleKeydown)
  },
  { immediate: true }
)

onBeforeUnmount(() => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }

  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKeydown)
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="project-preview">
      <div
        v-if="project"
        class="project-preview fixed inset-0 z-[95] flex items-center justify-center bg-[rgba(2,6,23,0.78)] px-4 py-6 backdrop-blur-md sm:px-6"
        @click.self="closeModal"
      >
        <div
          class="project-preview__panel section-panel relative w-full max-w-6xl overflow-hidden rounded-[1.9rem] border border-white/10 p-4 shadow-[0_28px_80px_rgba(2,6,23,0.48)] sm:p-5 lg:p-6"
          role="dialog"
          aria-modal="true"
          :aria-label="project.title"
        >
          <button
            type="button"
            class="glass-chip-strong absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full text-textSecondary transition-colors duration-200 hover:text-textPrimary"
            aria-label="Tutup project preview"
            @click="closeModal"
          >
            <X class="h-4 w-4" />
          </button>

          <div class="grid gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:gap-8">
            <div class="space-y-4">
              <div
                class="swipe-surface relative overflow-hidden rounded-[1.5rem] border border-white/8 bg-[linear-gradient(180deg,rgba(15,23,42,0.58),rgba(2,6,23,0.42))]"
                tabindex="0"
                @keydown.left.prevent="showPrevious"
                @keydown.right.prevent="showNext"
                @touchstart="handleTouchStart"
                @touchmove="handleTouchMove"
                @touchend="handleTouchEnd"
                @touchcancel="handleTouchCancel"
              >
                <Transition name="preview-image" mode="out-in">
                  <div
                    :key="activeImage?.src || project.slug"
                    class="flex aspect-[16/10] items-center justify-center p-4 sm:p-5 lg:p-6"
                  >
                    <img
                      :src="activeImage?.src"
                      :alt="activeImage?.alt || project.title"
                      class="max-h-full w-full object-contain"
                    />
                  </div>
                </Transition>

                <button
                  v-if="previewImages.length > 1"
                  type="button"
                  class="preview-nav-button absolute left-4 top-1/2 z-[1] -translate-y-1/2"
                  aria-label="Gambar sebelumnya"
                  @click="showPrevious"
                >
                  <ChevronLeft class="h-4 w-4" />
                </button>

                <button
                  v-if="previewImages.length > 1"
                  type="button"
                  class="preview-nav-button absolute right-4 top-1/2 z-[1] -translate-y-1/2"
                  aria-label="Gambar berikutnya"
                  @click="showNext"
                >
                  <ChevronRight class="h-4 w-4" />
                </button>

                <div
                  v-if="previewImages.length > 1"
                  class="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center"
                >
                  <span
                    class="inline-flex items-center rounded-full border border-white/12 bg-slate-950/66 px-3 py-1.5 text-[0.68rem] font-medium text-white/82 backdrop-blur-md"
                  >
                    {{ String(activeIndex + 1).padStart(2, '0') }}/{{ String(previewImages.length).padStart(2, '0') }}
                  </span>
                </div>

                <div
                  class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.04),rgba(2,6,23,0.36))]"
                />
              </div>

              <div
                v-if="previewImages.length > 1"
                class="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-5"
              >
                <button
                  v-for="(item, index) in previewImages"
                  :key="`${item.src}-${index}`"
                  type="button"
                  class="overflow-hidden rounded-[1rem] border transition-[transform,border-color,box-shadow] duration-200 hover:scale-[1.02]"
                  :class="
                    index === activeIndex
                      ? 'border-white/24 bg-white/[0.05] shadow-[0_14px_34px_rgba(2,6,23,0.24)]'
                      : 'border-white/8 bg-white/[0.02]'
                  "
                  @click="setActiveIndex(index)"
                >
                  <div class="flex aspect-[4/3] items-center justify-center bg-[linear-gradient(180deg,rgba(15,23,42,0.54),rgba(2,6,23,0.42))] p-2.5">
                    <img
                      :src="item.src"
                      :alt="item.alt || project.title"
                      class="max-h-full w-full object-contain"
                    />
                  </div>
                  <div class="px-3 pb-3 pt-2.5 text-left">
                    <p class="project-preview__thumb-title text-sm text-textPrimary">
                      {{ item.title || `Screen ${index + 1}` }}
                    </p>
                    <p class="project-preview__thumb-copy mt-1 text-xs leading-5 text-textSecondary">
                      {{ item.description || 'Preview tampilan project.' }}
                    </p>
                  </div>
                </button>
              </div>
            </div>

            <div class="flex flex-col justify-center">
              <div class="space-y-6">
                <span
                  :class="[
                    'inline-flex w-fit items-center rounded-full border px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em]',
                    cardVariant.badgeClass,
                  ]"
                >
                  {{ cardVariant.label }}
                </span>

                <div class="space-y-3">
                  <h3 class="font-display text-2xl leading-tight text-textPrimary sm:text-[2rem]">
                    {{ project.title }}
                  </h3>
                  <p
                    v-if="projectDescription"
                    class="project-preview__project-copy text-sm leading-7 text-textSecondary sm:text-base"
                  >
                    {{ projectDescription }}
                  </p>
                </div>

                <div class="space-y-2.5 border-t border-white/8 pt-4">
                  <p
                    v-if="activeImageTitle"
                    class="text-[0.82rem] font-semibold tracking-[-0.01em] text-textPrimary/88 sm:text-[0.9rem]"
                  >
                    {{ activeImageTitle }}
                  </p>
                  <p
                    v-if="activeImageDescription"
                    class="project-preview__active-copy text-sm leading-7 text-textSecondary/88"
                  >
                    {{ activeImageDescription }}
                  </p>
                </div>

                <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <RouterLink
                    :to="{ name: 'project-detail', params: { slug: project.slug } }"
                    class="inline-flex items-center justify-center rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm font-medium text-textPrimary transition-[transform,border-color,background-color,color] duration-200 hover:-translate-y-0.5 hover:border-white/18 hover:bg-white/[0.07]"
                    @click="closeModal"
                  >
                    <span>Lihat Selengkapnya</span>
                    <ArrowRight class="ml-2 h-4 w-4" />
                  </RouterLink>

                  <button
                    type="button"
                    class="inline-flex items-center justify-center rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-textSecondary transition-[transform,border-color,color,background-color] duration-200 hover:-translate-y-0.5 hover:border-white/16 hover:bg-white/[0.03] hover:text-textPrimary"
                    @click="closeModal"
                  >
                    Tutup Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.project-preview-enter-active,
.project-preview-leave-active {
  transition: opacity 220ms ease;
}

.project-preview-enter-active .project-preview__panel,
.project-preview-leave-active .project-preview__panel {
  transition:
    transform 260ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 220ms ease;
}

.project-preview-enter-from,
.project-preview-leave-to {
  opacity: 0;
}

.project-preview-enter-from .project-preview__panel,
.project-preview-leave-to .project-preview__panel {
  opacity: 0;
  transform: translateY(12px) scale(0.97);
}

.project-preview__project-copy {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}

.project-preview__active-copy {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}

.project-preview__thumb-title {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 0.78rem;
  font-weight: 600;
  line-height: 1.35;
}

.project-preview__thumb-copy {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 0.7rem;
  line-height: 1.45;
}

.preview-nav-button {
  display: inline-flex;
  height: 2.75rem;
  width: 2.75rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 1px solid rgb(255 255 255 / 0.12);
  background: rgb(2 6 23 / 0.48);
  color: rgb(248 250 252 / 0.9);
  backdrop-filter: blur(12px);
  transition:
    transform 180ms ease,
    background-color 180ms ease,
    border-color 180ms ease;
}

.preview-nav-button:hover {
  transform: translateY(-50%) scale(1.04);
  background: rgb(15 23 42 / 0.7);
  border-color: rgb(255 255 255 / 0.18);
}

.preview-image-enter-active,
.preview-image-leave-active {
  transition:
    opacity 220ms ease,
    transform 220ms ease;
}

.preview-image-enter-from,
.preview-image-leave-to {
  opacity: 0;
  transform: scale(0.985);
}

.swipe-surface {
  touch-action: pan-y;
}
</style>
