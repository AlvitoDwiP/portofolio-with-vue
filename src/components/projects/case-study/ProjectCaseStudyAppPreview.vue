<script setup>
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { Search, X } from 'lucide-vue-next'

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
  description: {
    type: String,
    default: '',
  },
})

const isZoomed = ref(false)

const previewAlt = computed(() => props.imageAlt || 'Preview fitur utama aplikasi')

const closeZoom = () => {
  isZoomed.value = false
}

const openZoom = () => {
  if (!props.imageSrc) {
    return
  }

  isZoomed.value = true
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeZoom()
  }
}

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
  <section v-if="imageSrc" :id="sectionId || undefined" class="space-y-7 sm:space-y-8">
    <div class="max-w-3xl space-y-3">
      <h2 class="case-study-heading">Tampilan Aplikasi</h2>
      <p class="section-muted text-sm leading-7 sm:text-base">
        Preview antarmuka utama dalam aplikasi
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
          @click="openZoom"
        >
          <img
            :src="imageSrc"
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

      <p v-if="description" class="case-study-copy mt-5 text-sm leading-7 text-textSecondary">
        {{ description }}
      </p>
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

        <div
          class="w-full max-w-6xl overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.86),rgba(2,6,23,0.92))] p-3 shadow-[0_30px_80px_rgba(2,6,23,0.5)] sm:p-4"
        >
          <img
            :src="imageSrc"
            :alt="previewAlt"
            class="max-h-[82vh] w-full rounded-[1.1rem] object-contain"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
