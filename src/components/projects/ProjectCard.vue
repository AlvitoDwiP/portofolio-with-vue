<script setup>
import { ArrowRight, ArrowUpRight, Github } from 'lucide-vue-next'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article
    class="group flex h-full transform-gpu flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] transition-[transform,border-color,background-color] duration-200 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.05]"
  >
    <div class="relative aspect-[16/10] overflow-hidden border-b border-white/10">
      <img
        v-if="project.cover"
        :src="project.cover"
        :alt="`Cover ${project.title}`"
        class="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        loading="lazy"
      />

      <div
        v-else
        class="flex h-full items-end bg-[radial-gradient(circle_at_top,rgba(200,155,96,0.14),transparent_38%),linear-gradient(180deg,#12161d,#0d0f13)] p-5"
      >
        <p class="text-sm uppercase tracking-[0.22em] text-slate-300">Preview Proyek</p>
      </div>

      <div
        class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,15,20,0.08),rgba(12,15,20,0.12)_48%,rgba(12,15,20,0.72))]"
      />
    </div>

    <div class="flex flex-1 flex-col p-5 sm:p-6">
      <div class="min-w-0">
        <p class="text-xs uppercase tracking-[0.24em] text-brand-200">{{ project.category }}</p>
        <RouterLink
          :to="{ name: 'project-detail', params: { slug: project.slug } }"
          class="mt-3 block font-display text-2xl leading-tight text-white transition-colors duration-150 group-hover:text-brand-100"
        >
          {{ project.title }}
        </RouterLink>
        <p class="mt-3 text-sm leading-7 text-slate-400">{{ project.shortDescription }}</p>
      </div>

      <div class="mt-6 flex flex-wrap gap-2">
        <span
          v-for="item in project.tools.slice(0, 4)"
          :key="item"
          class="rounded-full border border-white/10 bg-slate-950/60 px-3 py-2 text-xs text-slate-300"
        >
          {{ item }}
        </span>
      </div>

      <div class="mt-6 flex flex-wrap items-center gap-2.5">
        <RouterLink
          :to="{ name: 'project-detail', params: { slug: project.slug } }"
          class="inline-flex items-center rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm font-medium text-slate-100 transition-[transform,border-color,color,background-color] duration-150 hover:-translate-y-0.5 hover:border-white/20 hover:text-white"
        >
          <span>Lihat Detail</span>
          <ArrowRight class="ml-2 h-4 w-4" />
        </RouterLink>

        <a
          v-if="project.links?.github"
          :href="project.links.github"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center rounded-xl border border-white/10 bg-transparent px-3.5 py-2.5 text-sm text-slate-300 transition-[transform,border-color,color] duration-150 hover:-translate-y-0.5 hover:border-white/20 hover:text-white"
        >
          <Github class="mr-2 h-4 w-4" />
          <span>GitHub</span>
        </a>

        <a
          v-if="project.links?.demo"
          :href="project.links.demo"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center rounded-xl border border-white/10 bg-transparent px-3.5 py-2.5 text-sm text-slate-300 transition-[transform,border-color,color] duration-150 hover:-translate-y-0.5 hover:border-white/20 hover:text-white"
        >
          <span>Lihat Demo</span>
          <ArrowUpRight class="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  </article>
</template>
