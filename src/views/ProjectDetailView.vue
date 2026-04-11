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
const projectCategoryLabel = computed(() => project.value?.displayCategory ?? project.value?.category)

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
    <section class="section-theme section-theme-detail-project">
      <BaseContainer class="py-16 sm:py-24">
        <div v-if="project" class="space-y-10">
          <RouterLink
            :to="{ name: 'home', hash: '#proyek' }"
            class="glass-chip glass-hover inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
          >
            <ArrowLeft class="h-4 w-4" />
            Kembali ke proyek
          </RouterLink>

          <section class="max-w-4xl space-y-5">
            <span
              class="section-chip-accent inline-flex items-center rounded-full px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.22em]"
            >
              {{ projectCategoryLabel }}
            </span>
            <h1 class="font-display text-4xl text-textPrimary sm:text-5xl">{{ project.title }}</h1>
            <p class="max-w-3xl text-base leading-8 text-textSecondary sm:text-lg">
              {{ project.shortDescription }}
            </p>
          </section>

          <div
            class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] xl:grid-cols-[minmax(0,1fr)_22rem]"
          >
            <div class="glass glass-panel-solid rounded-lg p-7 sm:p-8">
              <section class="space-y-4">
                <p class="section-eyebrow text-xs uppercase tracking-[0.22em]">Overview</p>
                <p class="text-sm leading-8 text-textSecondary sm:text-base">
                  {{ project.overview }}
                </p>
              </section>

              <section
                v-if="project.problem?.length"
                class="mt-8 border-t border-[color:var(--glass-border)] pt-8"
              >
                <p class="section-eyebrow text-xs uppercase tracking-[0.22em]">Problem</p>
                <ul class="mt-5 space-y-3">
                  <li
                    v-for="item in project.problem"
                    :key="item"
                    class="glass-chip-strong rounded-card px-4 py-3 text-sm leading-7 text-textPrimary"
                  >
                    {{ item }}
                  </li>
                </ul>
              </section>

              <section
                v-if="project.approach?.length"
                class="mt-8 border-t border-[color:var(--glass-border)] pt-8"
              >
                <p class="section-eyebrow text-xs uppercase tracking-[0.22em]">Approach</p>
                <ul class="mt-5 space-y-3">
                  <li
                    v-for="item in project.approach"
                    :key="item"
                    class="glass-chip-strong rounded-card px-4 py-3 text-sm leading-7 text-textPrimary"
                  >
                    {{ item }}
                  </li>
                </ul>
              </section>
            </div>

            <aside
              v-if="
                project.tools?.length ||
                project.output ||
                project.insights ||
                project.links?.github ||
                project.links?.demo ||
                project.links?.notebook
              "
              class="glass glass-panel-solid rounded-lg p-6"
            >
              <section v-if="project.tools?.length" class="space-y-5">
                <p class="section-eyebrow text-xs uppercase tracking-[0.22em]">Tools</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="item in project.tools"
                    :key="item"
                    class="glass-chip rounded-full px-3 py-2 text-xs"
                  >
                    {{ item }}
                  </span>
                </div>
              </section>

              <section
                v-if="project.output"
                class="mt-6 border-t border-[color:var(--glass-border)] pt-6"
              >
                <p class="section-eyebrow text-xs uppercase tracking-[0.22em]">Output</p>
                <p class="mt-4 text-sm leading-8 text-textSecondary">
                  {{ project.output }}
                </p>
              </section>

              <section
                v-if="project.insights"
                class="mt-6 border-t border-[color:var(--glass-border)] pt-6"
              >
                <p class="section-eyebrow text-xs uppercase tracking-[0.22em]">Insights</p>
                <p class="mt-4 text-sm leading-8 text-textSecondary">
                  {{ project.insights }}
                </p>
              </section>

              <section
                v-if="project.links?.github || project.links?.demo || project.links?.notebook"
                class="mt-6 border-t border-[color:var(--glass-border)] pt-6"
              >
                <p class="section-eyebrow text-xs uppercase tracking-[0.22em]">Tautan</p>
                <div class="mt-5 flex flex-col gap-3">
                  <a
                    v-if="project.links?.github"
                    :href="project.links.github"
                    target="_blank"
                    rel="noreferrer"
                    class="glass-chip-strong glass-hover inline-flex items-center justify-between rounded-card px-4 py-3 text-sm text-textPrimary"
                  >
                    <span>GitHub</span>
                    <Github class="h-4 w-4" />
                  </a>
                  <a
                    v-if="project.links?.demo"
                    :href="project.links.demo"
                    target="_blank"
                    rel="noreferrer"
                    class="glass-chip-strong glass-hover inline-flex items-center justify-between rounded-card px-4 py-3 text-sm text-textPrimary"
                  >
                    <span>{{ project.links.demoLabel ?? 'Demo' }}</span>
                    <ArrowUpRight class="h-4 w-4" />
                  </a>
                  <a
                    v-if="project.links?.notebook"
                    :href="project.links.notebook"
                    target="_blank"
                    rel="noreferrer"
                    class="glass-chip-strong glass-hover inline-flex items-center justify-between rounded-card px-4 py-3 text-sm text-textPrimary"
                  >
                    <span>{{ project.links.notebookLabel ?? 'Notebook' }}</span>
                    <ArrowUpRight class="h-4 w-4" />
                  </a>
                </div>
              </section>
            </aside>
          </div>
        </div>

        <div
          v-else
          class="glass glass-panel-solid rounded-lg border-dashed p-8 text-center sm:p-10"
        >
          <h1 class="font-display text-3xl text-textPrimary">Proyek tidak ditemukan</h1>
          <p class="mx-auto mt-4 max-w-xl text-sm leading-7 text-textSecondary">
            Slug yang Anda buka tidak ada di data project lokal. Silakan kembali ke daftar proyek
            untuk membuka detail yang tersedia.
          </p>
          <RouterLink
            :to="{ name: 'home', hash: '#proyek' }"
            class="glass-chip-strong glass-hover mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
          >
            <ArrowLeft class="h-4 w-4" />
            Kembali ke beranda
          </RouterLink>
        </div>
      </BaseContainer>
    </section>
  </AppShell>
</template>
