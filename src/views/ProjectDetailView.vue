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
  title: createPageTitle(project.value?.title ?? 'Proyek'),
  meta: [
    {
      name: 'description',
      content:
        project.value?.shortDescription ??
        'Halaman detail proyek untuk portofolio personal berbasis Vue 3.',
    },
  ],
}))
</script>

<template>
  <AppShell>
    <BaseContainer class="py-16 sm:py-24">
      <div v-if="project" class="space-y-10">
        <RouterLink
          :to="{ name: 'home', hash: '#proyek' }"
          class="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
        >
          <ArrowLeft class="h-4 w-4" />
          Kembali ke proyek
        </RouterLink>

        <section class="max-w-4xl">
          <p class="text-xs uppercase tracking-[0.28em] text-brand-200">{{ project.category }}</p>
          <h1 class="mt-4 font-display text-4xl text-white sm:text-5xl">{{ project.title }}</h1>
          <p class="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            {{ project.shortDescription }}
          </p>
        </section>

        <div
          class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] xl:grid-cols-[minmax(0,1fr)_22rem]"
        >
          <div class="space-y-8">
            <section class="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 sm:p-8">
              <p class="text-xs uppercase tracking-[0.22em] text-slate-500">Overview</p>
              <p class="mt-4 text-sm leading-8 text-slate-300 sm:text-base">
                {{ project.overview }}
              </p>
            </section>

            <section class="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 sm:p-8">
              <p class="text-xs uppercase tracking-[0.22em] text-slate-500">Problem</p>
              <ul class="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                <li
                  v-for="item in project.problem"
                  :key="item"
                  class="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3"
                >
                  {{ item }}
                </li>
              </ul>
            </section>

            <section class="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 sm:p-8">
              <p class="text-xs uppercase tracking-[0.22em] text-slate-500">Approach</p>
              <ul class="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                <li
                  v-for="item in project.approach"
                  :key="item"
                  class="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3"
                >
                  {{ item }}
                </li>
              </ul>
            </section>
          </div>

          <aside class="space-y-6">
            <section class="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <p class="text-xs uppercase tracking-[0.22em] text-slate-500">Tools</p>
              <div class="mt-5 flex flex-wrap gap-2">
                <span
                  v-for="item in project.tools"
                  :key="item"
                  class="rounded-full border border-white/10 bg-slate-950/60 px-3 py-2 text-xs text-slate-300"
                >
                  {{ item }}
                </span>
              </div>
            </section>

            <section class="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <p class="text-xs uppercase tracking-[0.22em] text-slate-500">Output</p>
              <p class="mt-5 text-sm leading-8 text-slate-300">
                {{ project.output }}
              </p>
            </section>

            <section class="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <p class="text-xs uppercase tracking-[0.22em] text-slate-500">Insight</p>
              <p class="mt-5 text-sm leading-8 text-slate-300">
                {{ project.insights }}
              </p>
            </section>

            <section class="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <p class="text-xs uppercase tracking-[0.22em] text-slate-500">Tautan</p>
              <div class="mt-5 flex flex-col gap-3">
                <a
                  v-if="project.links?.github"
                  :href="project.links.github"
                  target="_blank"
                  rel="noreferrer"
                  class="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 transition hover:border-white/20"
                >
                  <span>GitHub</span>
                  <Github class="h-4 w-4" />
                </a>
                <a
                  v-if="project.links?.demo"
                  :href="project.links.demo"
                  target="_blank"
                  rel="noreferrer"
                  class="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-200 transition hover:border-white/20"
                >
                  <span>Demo</span>
                  <ArrowUpRight class="h-4 w-4" />
                </a>
              </div>
            </section>
          </aside>
        </div>
      </div>

      <div
        v-else
        class="rounded-[2rem] border border-dashed border-white/15 bg-white/[0.03] p-8 text-center sm:p-10"
      >
        <h1 class="font-display text-3xl text-white">Proyek tidak ditemukan</h1>
        <p class="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
          Slug yang Anda buka tidak ada di data project lokal. Silakan kembali ke daftar proyek
          untuk membuka detail yang tersedia.
        </p>
        <RouterLink
          :to="{ name: 'home', hash: '#proyek' }"
          class="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950"
        >
          <ArrowLeft class="h-4 w-4" />
          Kembali ke beranda
        </RouterLink>
      </div>
    </BaseContainer>
  </AppShell>
</template>
