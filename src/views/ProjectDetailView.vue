<script setup>
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import { ArrowLeft, ArrowUpRight, Github } from 'lucide-vue-next'
import { useRoute } from 'vue-router'
import AppShell from '@/components/layout/AppShell.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { useProjects } from '@/composables/useProjects'
import { createPageTitle } from '@/utils/createPageTitle'

const route = useRoute()
const { findProjectBySlug } = useProjects()

const project = computed(() => findProjectBySlug(route.params.slug))

useHead(() => ({
  title: createPageTitle(project.value?.title ?? 'Project'),
  meta: [
    {
      name: 'description',
      content:
        project.value?.summary ??
        'Project detail page for the personal portfolio foundation built with Vue 3.',
    },
  ],
}))
</script>

<template>
  <AppShell>
    <BaseContainer class="py-16 sm:py-24">
      <div v-if="project" class="space-y-10">
        <RouterLink
          :to="{ name: 'home', hash: '#projects' }"
          class="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
        >
          <ArrowLeft class="h-4 w-4" />
          Back to projects
        </RouterLink>

        <div class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <section class="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-glow">
            <p class="text-xs uppercase tracking-[0.28em] text-brand-200">{{ project.status }}</p>
            <h1 class="mt-4 font-display text-4xl text-white sm:text-5xl">{{ project.title }}</h1>
            <p class="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {{ project.summary }}
            </p>

            <div class="mt-8 grid gap-4 sm:grid-cols-3">
              <div class="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <p class="text-xs uppercase tracking-[0.24em] text-slate-500">Role</p>
                <p class="mt-2 text-sm text-slate-200">{{ project.role }}</p>
              </div>
              <div class="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <p class="text-xs uppercase tracking-[0.24em] text-slate-500">Year</p>
                <p class="mt-2 text-sm text-slate-200">{{ project.year }}</p>
              </div>
              <div class="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                <p class="text-xs uppercase tracking-[0.24em] text-slate-500">Slug</p>
                <p class="mt-2 text-sm text-slate-200">{{ project.slug }}</p>
              </div>
            </div>

            <div class="mt-10 space-y-4">
              <h2 class="font-display text-2xl text-white">Overview</h2>
              <p class="max-w-3xl text-sm leading-8 text-slate-300">
                {{ project.overview }}
              </p>
            </div>
          </section>

          <aside class="space-y-6">
            <section class="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <h2 class="font-display text-2xl text-white">Highlights</h2>
              <ul class="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                <li
                  v-for="highlight in project.highlights"
                  :key="highlight"
                  class="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3"
                >
                  {{ highlight }}
                </li>
              </ul>
            </section>

            <section class="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <h2 class="font-display text-2xl text-white">Stack</h2>
              <div class="mt-5 flex flex-wrap gap-2">
                <span
                  v-for="item in project.stack"
                  :key="item"
                  class="rounded-full border border-white/10 bg-slate-950/60 px-3 py-2 text-xs text-slate-300"
                >
                  {{ item }}
                </span>
              </div>
            </section>

            <section class="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <h2 class="font-display text-2xl text-white">Links</h2>
              <div class="mt-5 flex flex-col gap-3">
                <a
                  :href="project.links.live"
                  target="_blank"
                  rel="noreferrer"
                  class="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 transition hover:border-white/20"
                >
                  <span>Live preview</span>
                  <ArrowUpRight class="h-4 w-4" />
                </a>
                <a
                  :href="project.links.repo"
                  target="_blank"
                  rel="noreferrer"
                  class="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 transition hover:border-white/20"
                >
                  <span>Repository</span>
                  <Github class="h-4 w-4" />
                </a>
              </div>
            </section>
          </aside>
        </div>
      </div>

      <div
        v-else
        class="rounded-[2rem] border border-dashed border-white/15 bg-white/[0.03] p-10 text-center"
      >
        <h1 class="font-display text-3xl text-white">Project not found</h1>
        <p class="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
          Slug project ini belum ada di `src/data/projects.js`. Anda bisa menambahkannya kapan saja
          tanpa perlu backend.
        </p>
        <RouterLink
          :to="{ name: 'home', hash: '#projects' }"
          class="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950"
        >
          <ArrowLeft class="h-4 w-4" />
          Return home
        </RouterLink>
      </div>
    </BaseContainer>
  </AppShell>
</template>
