<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { ChevronLeft, ChevronRight, Search, X } from 'lucide-vue-next'

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
  if (props.images.length) {
    return props.images.filter((item) => item?.src)
  }

  if (!props.imageSrc) {
    return []
  }

  return [
    {
      src: props.imageSrc,
      alt: props.imageAlt || 'Preview fitur utama aplikasi',
      caption: props.description,
    },
  ]
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
        class="relative overflow-hidden rounded-[1.35rem] border border-white/8 bg-[linear-gradient(180deg,rgba(15,23,42,0.5),rgba(15,23,42,0.34))] p-3 sm:p-4"
      >
        <div
          class="pointer-events-none absolute inset-x-8 top-0 h-24 rounded-full bg-sky-400/8 blur-3xl"
        />

        <button
          type="button"
          class="group relative block w-full overflow-hidden rounded-[1rem] focus:outline-none"
          aria-label="Perbesar tampilan aplikasi"
          @click="openZoom()"
        >
          <img
            :src="activeImage?.src"
            :alt="previewAlt"
            class="relative mx-auto w-full max-w-4xl rounded-[1rem] object-contain transition-transform duration-500 ease-out group-hover:scale-[1.01]"
          />

          <span
            class="pointer-events-none absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-3 py-2 text-xs font-medium text-white/88 opacity-0 shadow-[0_16px_40px_rgba(2,6,23,0.32)] backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
          >
            <Search class="h-3.5 w-3.5" />
            Zoom
          </span>
        </button>
      </div>

      <div class="mt-5 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div class="max-w-3xl space-y-2">
          <p
            v-if="activeImage?.label"
            class="case-study-kicker text-[0.7rem] uppercase tracking-[0.24em] text-accent"
          >
            {{ activeImage.label }}
          </p>
          <p
            v-if="activeImage?.caption || description"
            class="case-study-copy text-sm leading-7 text-textSecondary"
          >
            {{ activeImage?.caption || description }}
          </p>
        </div>

        <p class="text-xs uppercase tracking-[0.24em] text-textSecondary/70">
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
          class="group overflow-hidden rounded-[1.15rem] border p-2 text-left transition-[transform,border-color,background-color] duration-200 hover:-translate-y-0.5"
          :class="
            index === activeIndex
              ? 'border-emerald-400/60 bg-emerald-400/[0.08]'
              : 'border-white/8 bg-white/[0.02] hover:border-white/15'
          "
          @click="setActiveIndex(index)"
        >
          <img
            :src="item.src"
            :alt="item.alt || previewAlt"
            class="h-24 w-full rounded-[0.8rem] object-cover object-top"
          />
          <div class="px-1 pb-1 pt-3">
            <p class="text-sm font-medium text-textPrimary">
              {{ item.label || `Screen ${index + 1}` }}
            </p>
            <p class="mt-1 min-h-[2.5rem] text-xs leading-5 text-textSecondary">
              {{ item.caption || 'Lihat detail tampilan pada layar ini.' }}
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
        class="fixed inset-0 z-[90] flex items-center justify-center bg-[rgba(2,6,23,0.82)] px-4 py-6 backdrop-blur-md sm:px-6"
        role="dialog"
        aria-modal="true"
        :aria-label="previewAlt"
        @click.self="closeZoom"
      >
        <button
          type="button"
          class="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-white/88 transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5 hover:bg-slate-900/80 sm:right-6 sm:top-6"
          aria-label="Tutup zoom"
          @click="closeZoom"
        >
          <X class="h-5 w-5" />
        </button>

        <button
          v-if="previewImages.length > 1"
          type="button"
          class="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-white/88 transition-[transform,background-color,border-color] duration-200 hover:-translate-y-[52%] hover:bg-slate-900/80 sm:left-6"
          aria-label="Layar sebelumnya"
          @click="showPrevious"
        >
          <ChevronLeft class="h-5 w-5" />
        </button>

        <button
          v-if="previewImages.length > 1"
          type="button"
          class="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-950/70 text-white/88 transition-[transform,background-color,border-color] duration-200 hover:-translate-y-[52%] hover:bg-slate-900/80 sm:right-6"
          aria-label="Layar berikutnya"
          @click="showNext"
        >
          <ChevronRight class="h-5 w-5" />
        </button>

        <div
          class="w-full max-w-6xl overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.86),rgba(2,6,23,0.92))] p-3 shadow-[0_30px_80px_rgba(2,6,23,0.5)] sm:p-4"
        >
          <img
            :src="activeImage?.src"
            :alt="previewAlt"
            class="max-h-[82vh] w-full rounded-[1.1rem] object-contain"
          />

          <div
            v-if="activeImage?.label || activeImage?.caption"
            class="flex flex-col gap-2 border-t border-white/8 px-2 pb-1 pt-4 sm:px-3"
          >
            <p v-if="activeImage?.label" class="text-xs uppercase tracking-[0.24em] text-white/60">
              {{ activeImage.label }}
            </p>
            <p v-if="activeImage?.caption" class="text-sm leading-7 text-white/82">
              {{ activeImage.caption }}
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
