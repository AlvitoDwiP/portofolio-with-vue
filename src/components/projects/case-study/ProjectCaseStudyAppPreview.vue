<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { ChevronLeft, ChevronRight, Search, X } from 'lucide-vue-next'
import { useHorizontalSwipe } from '@/composables/useHorizontalSwipe'
import { normalizeProjectScreenshots } from '@/utils/normalizeProjectScreenshots'

const props = defineProps({
  sectionId: {
    type: String,
    default: 'tampilan-aplikasi',
  },
  imageSrc: {
    type: String,
    default: '',
  },
  imageAlt: {
    type: String,
    default: '',
  },
  images: {
    type: Array,
    default: () => [],
  },
  description: {
    type: String,
    default: '',
  },
})

const isZoomed = ref(false)
const activeIndex = ref(0)

const previewImages = computed(() => {
  const fallbackImage = {
    src: props.imageSrc,
    image: props.imageSrc,
    alt: props.imageAlt || 'Preview fitur utama aplikasi',
    title: 'Preview Utama',
    description: props.description,
  }

  return normalizeProjectScreenshots([fallbackImage, ...props.images], fallbackImage)
})

const activeImage = computed(() => previewImages.value[activeIndex.value] ?? null)
const previewAlt = computed(
  () => activeImage.value?.alt || props.imageAlt || 'Preview fitur utama aplikasi'
)

const clampActiveIndex = (index) => {
  if (!previewImages.value.length) {
    return 0
  }

  if (index < 0) {
    return previewImages.value.length - 1
  }

  if (index >= previewImages.value.length) {
    return 0
  }

  return index
}

const closeZoom = () => {
  isZoomed.value = false
}

const setActiveIndex = (index) => {
  activeIndex.value = clampActiveIndex(index)
}

const showPrevious = () => {
  setActiveIndex(activeIndex.value - 1)
}

const showNext = () => {
  setActiveIndex(activeIndex.value + 1)
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

const openZoom = (index = activeIndex.value) => {
  if (!previewImages.value.length) {
    return
  }

  setActiveIndex(index)
  isZoomed.value = true
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeZoom()
    return
  }

  if (!isZoomed.value) {
    return
  }

  if (event.key === 'ArrowLeft') {
    showPrevious()
  }

  if (event.key === 'ArrowRight') {
    showNext()
  }
}

watch(
  previewImages,
  (items) => {
    if (!items.length) {
      activeIndex.value = 0
      isZoomed.value = false
      return
    }

    activeIndex.value = clampActiveIndex(activeIndex.value)
  },
  { immediate: true }
)

watch(isZoomed, (active) => {
  if (typeof document === 'undefined') {
    return
  }

  document.body.style.overflow = active ? 'hidden' : ''

  if (active) {
    window.addEventListener('keydown', handleKeydown)
    return
  }

  window.removeEventListener('keydown', handleKeydown)
})

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
  <section v-if="previewImages.length" :id="sectionId || undefined" class="space-y-7 sm:space-y-8">
    <div class="max-w-3xl space-y-3">
      <h2 class="case-study-heading">Tampilan Aplikasi</h2>
      <p class="section-muted text-sm leading-7 sm:text-base">
        Preview antarmuka utama dan alur peran di dalam aplikasi
      </p>
    </div>

    <div class="section-panel overflow-hidden rounded-[1.75rem] p-4 sm:p-5 lg:p-6">
      <div
        class="swipe-surface relative overflow-hidden rounded-[1.35rem] border border-[rgba(221,227,240,0.88)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(239,243,251,0.94))] p-3 sm:p-4"
        tabindex="0"
        @keydown.left.prevent="showPrevious"
        @keydown.right.prevent="showNext"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @touchcancel="handleTouchCancel"
      >
        <div
          class="pointer-events-none absolute inset-x-8 top-0 h-24 rounded-full bg-[rgba(216,243,220,0.16)] blur-3xl"
        />

        <div class="group relative">
          <button
            type="button"
            class="relative block w-full overflow-hidden rounded-[1rem] focus:outline-none"
            aria-label="Perbesar tampilan aplikasi"
            @click="openZoom()"
          >
            <Transition name="preview-image" mode="out-in">
              <div
                :key="activeImage?.src || sectionId"
                class="flex aspect-[16/10] items-center justify-center rounded-[1rem] p-3 sm:p-4"
              >
                <img
                  :src="activeImage?.src"
                  :alt="previewAlt"
                  class="relative mx-auto max-h-full w-full max-w-4xl object-contain transition-transform duration-500 ease-out group-hover:scale-[1.01]"
                />
              </div>
            </Transition>

            <span
              class="pointer-events-none absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-[rgba(221,227,240,0.86)] bg-[rgba(255,255,255,0.96)] px-3 py-2 text-xs font-medium text-textPrimary opacity-0 shadow-[0_16px_40px_rgba(26,26,46,0.1)] backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
            >
              <Search class="h-3.5 w-3.5" />
              Zoom
            </span>
          </button>

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
              class="inline-flex items-center rounded-full border border-[rgba(221,227,240,0.86)] bg-[rgba(255,255,255,0.96)] px-3 py-1.5 text-[0.68rem] font-medium text-textSecondary backdrop-blur-md"
            >
              {{ String(activeIndex + 1).padStart(2, '0') }}/{{ String(previewImages.length).padStart(2, '0') }}
            </span>
          </div>
        </div>
      </div>

      <div class="mt-5 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div class="max-w-3xl space-y-2">
          <p
            v-if="activeImage?.title"
            class="case-study-copy text-base font-semibold tracking-[-0.015em] text-textPrimary sm:text-[1.05rem]"
          >
            {{ activeImage.title }}
          </p>
          <p
            v-if="activeImage?.description || description"
            class="case-study-copy text-sm leading-7 text-textSecondary"
          >
            {{ activeImage?.description || description }}
          </p>
        </div>

        <p class="text-xs uppercase tracking-[0.24em] text-textMuted">
          {{ String(activeIndex + 1).padStart(2, '0') }}/{{
            String(previewImages.length).padStart(2, '0')
          }}
        </p>
      </div>

      <div v-if="previewImages.length > 1" class="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        <button
          v-for="(item, index) in previewImages"
          :key="`${item.src}-${index}`"
          type="button"
          class="group overflow-hidden rounded-[1.15rem] border p-2 text-left transition-[transform,border-color,background-color,box-shadow] duration-200 hover:-translate-y-0.5"
          :class="
            index === activeIndex
              ? 'border-[rgba(108,99,255,0.24)] bg-[rgba(216,243,220,0.72)] shadow-[0_14px_32px_rgba(26,26,46,0.1)]'
              : 'border-[rgba(221,227,240,0.86)] bg-[rgba(255,255,255,0.82)] hover:border-[rgba(108,99,255,0.2)]'
          "
          @click="setActiveIndex(index)"
        >
          <div
            class="flex h-28 items-center justify-center rounded-[0.8rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(239,243,251,0.94))] p-2.5"
          >
            <img
              :src="item.src"
              :alt="item.alt || previewAlt"
              class="max-h-full w-full object-contain"
            />
          </div>
          <div class="px-1 pb-1 pt-3">
            <p class="app-preview__thumb-title text-sm text-textPrimary">
              {{ item.title || `Screen ${index + 1}` }}
            </p>
            <p class="app-preview__thumb-copy mt-1 min-h-[2.75rem] text-xs leading-5 text-textSecondary">
              {{ item.description || 'Lihat detail tampilan pada layar ini.' }}
            </p>
          </div>
        </button>
      </div>
    </div>
  </section>

  <Teleport to="body">
    <Transition
      enter-active-class="transition-[opacity,transform] duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-[opacity,transform] duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isZoomed"
        class="fixed inset-0 z-[90] flex items-center justify-center bg-[rgba(244,246,251,0.84)] px-4 py-6 backdrop-blur-md sm:px-6"
        role="dialog"
        aria-modal="true"
        :aria-label="previewAlt"
        @click.self="closeZoom"
      >
        <button
          type="button"
          class="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(221,227,240,0.86)] bg-[rgba(255,255,255,0.96)] text-textPrimary transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5 hover:bg-[rgba(239,243,251,0.98)] sm:right-6 sm:top-6"
          aria-label="Tutup zoom"
          @click="closeZoom"
        >
          <X class="h-5 w-5" />
        </button>

        <button
          v-if="previewImages.length > 1"
          type="button"
          class="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(221,227,240,0.86)] bg-[rgba(255,255,255,0.96)] text-textPrimary transition-[transform,background-color,border-color] duration-200 hover:-translate-y-[52%] hover:bg-[rgba(239,243,251,0.98)] sm:left-6"
          aria-label="Layar sebelumnya"
          @click="showPrevious"
        >
          <ChevronLeft class="h-5 w-5" />
        </button>

        <button
          v-if="previewImages.length > 1"
          type="button"
          class="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(221,227,240,0.86)] bg-[rgba(255,255,255,0.96)] text-textPrimary transition-[transform,background-color,border-color] duration-200 hover:-translate-y-[52%] hover:bg-[rgba(239,243,251,0.98)] sm:right-6"
          aria-label="Layar berikutnya"
          @click="showNext"
        >
          <ChevronRight class="h-5 w-5" />
        </button>

        <div
          class="w-full max-w-6xl overflow-hidden rounded-[1.6rem] border border-[rgba(221,227,240,0.88)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(239,243,251,0.96))] p-3 shadow-[0_30px_80px_rgba(26,26,46,0.12)] sm:p-4"
        >
          <div class="flex min-h-[52vh] items-center justify-center rounded-[1.1rem] p-3 sm:p-4">
            <img
              :src="activeImage?.src"
              :alt="previewAlt"
              class="max-h-[82vh] w-full object-contain"
            />
          </div>

          <div
            v-if="activeImage?.title || activeImage?.description"
            class="flex flex-col gap-2 border-t border-[rgba(221,227,240,0.82)] px-2 pb-1 pt-4 sm:px-3"
          >
            <p v-if="activeImage?.title" class="text-sm font-semibold tracking-[-0.01em] text-textPrimary">
              {{ activeImage.title }}
            </p>
            <p v-if="activeImage?.description" class="text-sm leading-7 text-textSecondary">
              {{ activeImage.description }}
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.app-preview__thumb-title {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-weight: 600;
}

.app-preview__thumb-copy {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.preview-nav-button {
  display: inline-flex;
  height: 2.75rem;
  width: 2.75rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: 1px solid rgba(221, 227, 240, 0.18);
  background: rgba(239, 243, 251, 0.96);
  color: #3e342b;
  backdrop-filter: blur(12px);
  transition:
    transform 180ms ease,
    background-color 180ms ease,
    border-color 180ms ease;
}

.preview-nav-button:hover {
  transform: translateY(-50%) scale(1.04);
  background: rgba(244, 246, 251, 0.98);
  border-color: rgba(221, 227, 240, 0.24);
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
