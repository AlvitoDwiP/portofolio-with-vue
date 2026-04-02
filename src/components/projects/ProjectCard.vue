<script setup>
import { computed } from 'vue'
import { ArrowRight, Github } from 'lucide-vue-next'
import { resolveProjectCardVariant } from '@/components/projects/projectCardVariants'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const cardVariant = computed(() => resolveProjectCardVariant(props.project))
const visibleTools = computed(() => props.project.tools.slice(0, 4))
</script>

<template>
  <article
    class="section-card-hover group flex h-full min-h-[22.5rem] transform-gpu flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70 shadow-[0_16px_36px_rgba(2,6,23,0.28)] transition-[transform,border-color,box-shadow,background-color] duration-300 hover:bg-slate-950/80 sm:min-h-[24rem]"
  >
    <div
      :class="[
        'relative h-40 overflow-hidden border-b border-white/10 sm:h-44',
        cardVariant.coverGradient,
      ]"
    >
      <div
        class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.06),rgba(15,23,42,0.08)_45%,rgba(2,6,23,0.58))]"
      />
      <div
        :class="[
          'absolute -left-10 top-4 h-28 w-28 rounded-full blur-3xl',
          cardVariant.glowPrimary,
        ]"
      />
      <div
        :class="[
          'absolute bottom-0 right-0 h-28 w-28 rounded-full blur-3xl',
          cardVariant.glowSecondary,
        ]"
      />
      <div
        class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      <span
        :class="[
          'absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.24em] backdrop-blur-md',
          cardVariant.badgeClass,
        ]"
      >
        {{ cardVariant.label }}
      </span>

      <div class="absolute inset-0 flex items-center justify-center px-6">
        <div
          :class="[
            'flex h-20 w-20 items-center justify-center rounded-[1.6rem] border backdrop-blur-md transition duration-300 group-hover:scale-[1.03]',
            cardVariant.iconShell,
          ]"
        >
          <component :is="cardVariant.icon" class="h-10 w-10" />
        </div>
      </div>

      <div
        class="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5 text-[0.68rem] font-medium text-slate-100 backdrop-blur-md"
      >
        <span :class="['h-2 w-2 rounded-full', cardVariant.dotClass]" />
        <span>{{ cardVariant.coverLabel }}</span>
      </div>
    </div>

    <div class="flex flex-1 flex-col p-5 sm:p-6">
      <div class="min-w-0 space-y-4">
        <p :class="['text-[0.68rem] uppercase tracking-[0.26em]', cardVariant.metaClass]">
          {{ cardVariant.summaryLabel }}
        </p>
        <RouterLink
          :to="{ name: 'project-detail', params: { slug: project.slug } }"
          class="block font-display text-[1.65rem] leading-tight text-white transition-colors duration-150 group-hover:text-white/90"
        >
          {{ project.title }}
        </RouterLink>
      </div>

      <div class="mt-5 flex flex-wrap gap-2">
        <span
          v-for="item in visibleTools"
          :key="item"
          :class="[
            'rounded-full border px-3 py-1.5 text-[0.72rem] font-medium backdrop-blur-sm',
            cardVariant.techClass,
          ]"
        >
          {{ item }}
        </span>
      </div>

      <div class="mt-auto flex flex-wrap items-center gap-2.5 pt-6">
        <RouterLink
          :to="{ name: 'project-detail', params: { slug: project.slug } }"
          :class="[
            'inline-flex items-center rounded-xl border px-3.5 py-2.5 text-sm font-medium transition-[transform,border-color,color,background-color] duration-150 hover:-translate-y-0.5',
            cardVariant.linkPrimaryClass,
          ]"
        >
          <span>Lihat Detail</span>
          <ArrowRight class="ml-2 h-4 w-4" />
        </RouterLink>

        <a
          v-if="project.links?.github"
          :href="project.links.github"
          target="_blank"
          rel="noreferrer"
          class="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-[transform,border-color,color,background-color] duration-150 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
          aria-label="Buka GitHub project"
        >
          <Github class="h-4 w-4" />
        </a>
      </div>
    </div>
  </article>
</template>
