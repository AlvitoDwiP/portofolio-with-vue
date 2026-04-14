<script setup>
import { FileText, LayoutDashboard, MonitorPlay } from 'lucide-vue-next'

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})

const previewThemes = {
  dashboard: {
    shell:
      'bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(15,23,42,0.84)_48%,rgba(2,6,23,0.96))]',
    line: 'bg-sky-300/60',
    Icon: LayoutDashboard,
    label: 'Dashboard View',
  },
  presentation: {
    shell:
      'bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.16),transparent_34%),linear-gradient(135deg,rgba(30,41,59,0.94),rgba(15,23,42,0.88)_50%,rgba(2,6,23,0.96))]',
    line: 'bg-amber-200/60',
    Icon: MonitorPlay,
    label: 'Presentation Deck',
  },
  document: {
    shell:
      'bg-[radial-gradient(circle_at_top_left,rgba(165,180,252,0.16),transparent_34%),linear-gradient(135deg,rgba(30,41,59,0.94),rgba(15,23,42,0.88)_50%,rgba(2,6,23,0.96))]',
    line: 'bg-indigo-200/60',
    Icon: FileText,
    label: 'Working Document',
  },
}

const getPreviewTheme = (previewType) => previewThemes[previewType] ?? previewThemes.document
</script>

<template>
  <section v-if="items.length" class="space-y-7 sm:space-y-8">
    <div class="max-w-3xl space-y-3">
      <p class="case-study-kicker">Proof Of Work</p>
      <h2 class="case-study-heading">Output</h2>
    </div>

    <div class="grid gap-6 lg:grid-cols-2">
      <article
        v-for="(item, index) in items"
        :key="`${item.title}-${index}`"
        class="section-panel flex h-full flex-col overflow-hidden rounded-[1.75rem]"
      >
        <div class="relative min-h-[15rem] border-b border-white/8 bg-[#0d1320]">
          <div class="absolute inset-0" :class="getPreviewTheme(item.previewType).shell" />
          <div
            class="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.1),rgba(2,6,23,0.74))]"
          />
          <div
            class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
          />
          <div
            class="absolute left-6 top-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-sm"
          >
            <component :is="getPreviewTheme(item.previewType).Icon" class="h-5 w-5 text-white/85" />
            <span class="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-white/70">
              {{ getPreviewTheme(item.previewType).label }}
            </span>
          </div>
          <div
            class="absolute right-6 top-6 h-20 w-20 rounded-[1.5rem] border border-white/10 bg-white/[0.05]"
          />
          <div class="absolute bottom-16 left-6 right-6 space-y-3">
            <div class="h-3 rounded-full" :class="getPreviewTheme(item.previewType).line" />
            <div class="h-3 w-4/5 rounded-full bg-white/15" />
            <div class="h-3 w-3/5 rounded-full bg-white/10" />
          </div>

          <div class="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <p class="case-study-kicker">
              {{ item.label }}
            </p>
            <h3 class="case-study-subheading mt-3">
              {{ item.title }}
            </h3>
          </div>
        </div>

        <div class="flex flex-1 flex-col p-6 sm:p-7">
          <p class="case-study-copy text-sm leading-7 text-textSecondary">
            {{ item.description }}
          </p>

          <div class="mt-auto pt-6">
            <a
              :href="item.href"
              target="_blank"
              rel="noopener noreferrer"
              class="section-button-secondary inline-flex items-center rounded-xl border px-4 py-2.5 text-sm font-medium transition-[transform,background-color,border-color,color,box-shadow] duration-200 hover:-translate-y-0.5"
            >
              <span>{{ item.ctaLabel || 'View Output' }}</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
