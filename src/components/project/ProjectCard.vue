<script setup>
import { ArrowUpRight } from 'lucide-vue-next'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article
    class="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
  >
    <div class="mb-5 flex items-start justify-between gap-4">
      <div class="space-y-3">
        <p class="text-xs uppercase tracking-[0.24em] text-brand-200">{{ project.status }}</p>
        <div>
          <RouterLink
            :to="{ name: 'project-detail', params: { slug: project.slug } }"
            class="font-display text-2xl text-white transition group-hover:text-brand-100"
          >
            {{ project.title }}
          </RouterLink>
          <p class="mt-2 text-sm leading-7 text-slate-400">{{ project.summary }}</p>
        </div>
      </div>

      <div
        class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 text-slate-300 transition group-hover:text-white"
      >
        <ArrowUpRight class="h-4 w-4" />
      </div>
    </div>

    <div class="mb-6 flex flex-wrap gap-2">
      <span
        v-for="item in project.stack"
        :key="item"
        class="rounded-full border border-white/10 bg-slate-950/60 px-3 py-2 text-xs text-slate-300"
      >
        {{ item }}
      </span>
    </div>

    <div class="flex items-center justify-between text-sm text-slate-500">
      <span>{{ project.role }}</span>
      <span>{{ project.year }}</span>
    </div>
  </article>
</template>
