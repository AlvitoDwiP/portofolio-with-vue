<script setup>
import { ArrowLeft } from 'lucide-vue-next'

defineProps({
  backTo: {
    type: Object,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  tools: {
    type: Array,
    default: () => [],
  },
  links: {
    type: Array,
    default: () => [],
  },
  uiPreviewTarget: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['view-ui'])
</script>

<template>
  <section class="relative isolate overflow-hidden rounded-[2rem] p-3 sm:p-4 lg:p-5">
    <div class="pointer-events-none absolute inset-0">
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(220,233,226,0.22),transparent_30%),radial-gradient(circle_at_82%_24%,rgba(239,228,211,0.22),transparent_28%),linear-gradient(135deg,rgba(251,246,238,0.98),rgba(239,228,211,0.96)_52%,rgba(244,235,221,0.98))]"
      />
      <div class="absolute inset-0 bg-[rgba(244,235,221,0.24)]" />
      <div class="absolute -left-12 top-8 h-40 w-40 rounded-full bg-[rgba(220,233,226,0.14)] blur-3xl" />
      <div class="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-[rgba(31,92,76,0.08)] blur-3xl" />
    </div>

    <div
      class="relative overflow-hidden rounded-[1.65rem] border border-[rgba(216,203,184,0.88)] bg-[rgba(251,246,238,0.88)] shadow-[0_24px_72px_rgba(46,42,38,0.1)] ring-1 ring-inset ring-[rgba(255,255,255,0.18)] backdrop-blur-[3px]"
    >
      <div
        class="pointer-events-none absolute inset-y-0 right-0 hidden w-[36%] lg:block"
        aria-hidden="true"
      >
        <div
          class="absolute right-8 top-8 h-40 w-40 rounded-[2rem] border border-[rgba(216,203,184,0.86)] bg-[rgba(251,246,238,0.22)] shadow-[0_18px_40px_rgba(46,42,38,0.08)]"
        />
        <div
          class="absolute bottom-10 right-20 h-28 w-52 rounded-[1.75rem] border border-[rgba(216,203,184,0.86)] bg-gradient-to-br from-[rgba(220,233,226,0.16)] via-transparent to-[rgba(239,228,211,0.16)]"
        />
        <div
          class="absolute right-10 top-24 h-px w-40 bg-gradient-to-r from-transparent via-[rgba(31,92,76,0.24)] to-transparent"
        />
        <div
          class="absolute bottom-20 right-8 h-px w-28 bg-gradient-to-r from-[rgba(31,92,76,0.05)] via-[rgba(31,92,76,0.16)] to-transparent"
        />
      </div>

      <div class="relative z-10 px-6 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-12">
        <RouterLink
          :to="backTo"
          class="glass-chip glass-hover inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
        >
          <ArrowLeft class="h-4 w-4" />
          Kembali ke proyek
        </RouterLink>

        <div class="mt-10 max-w-3xl space-y-5 sm:space-y-6 lg:max-w-[72%]">
          <span
            class="section-chip-accent inline-flex items-center rounded-full px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.22em]"
          >
            {{ category }}
          </span>

          <h1 class="font-display text-4xl leading-[1.02] text-textPrimary sm:text-5xl lg:text-6xl">
            {{ title }}
          </h1>

          <p class="case-study-copy max-w-2xl text-base leading-8 text-textSecondary sm:text-lg">
            {{ summary }}
          </p>

          <div v-if="tools.length" class="flex flex-wrap gap-2.5 pt-1">
            <span
              v-for="tool in tools"
              :key="tool"
              class="glass-chip inline-flex items-center rounded-full px-3.5 py-2 text-[0.72rem] font-medium text-textSecondary"
            >
              {{ tool }}
            </span>
          </div>
        </div>

        <div
          v-if="uiPreviewTarget || links.length"
          class="mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row sm:flex-wrap"
        >
          <button
            v-if="uiPreviewTarget"
            type="button"
            class="section-button-secondary inline-flex min-h-11 items-center justify-center rounded-xl border px-5 py-3 text-sm font-medium transition-[transform,background-color,border-color,color,box-shadow] duration-200 hover:-translate-y-0.5 sm:min-w-[11.5rem]"
            @click="emit('view-ui')"
          >
            <span>View UI</span>
          </button>

          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex min-h-11 items-center justify-center rounded-xl border px-5 py-3 text-sm font-medium transition-[transform,background-color,border-color,color,box-shadow] duration-200 hover:-translate-y-0.5 sm:min-w-[11.5rem]"
            :class="
              link.variant === 'primary' ? 'section-button-primary' : 'section-button-secondary'
            "
          >
            <span>{{ link.label }}</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
