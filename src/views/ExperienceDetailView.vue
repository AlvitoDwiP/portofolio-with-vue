<script setup>
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import { ArrowLeft, ArrowUpRight, MapPin } from 'lucide-vue-next'
import { useRoute } from 'vue-router'
import AppShell from '@/components/layout/AppShell.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { useExperiences } from '@/composables/useExperiences'
import { createPageTitle } from '@/utils/createPageTitle'

const route = useRoute()
const { findExperienceBySlug } = useExperiences()

const experience = computed(() => findExperienceBySlug(route.params.slug))

const experienceMeta = computed(() => {
  if (!experience.value) {
    return ''
  }

  return [experience.value.company, experience.value.period, experience.value.location]
    .filter(Boolean)
    .join(' · ')
})

useHead(() => ({
  title: createPageTitle(experience.value?.role ?? 'Pengalaman'),
  meta: [
    {
      name: 'description',
      content:
        experience.value?.shortDescription ??
        'Halaman detail pengalaman untuk portofolio personal berbasis Vue 3.',
    },
  ],
}))
</script>

<template>
  <AppShell>
    <BaseContainer class="py-16 sm:py-24">
      <div v-if="experience" class="space-y-10">
        <RouterLink
          :to="{ name: 'home', hash: '#pengalaman' }"
          class="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
        >
          <ArrowLeft class="h-4 w-4" />
          Kembali ke pengalaman
        </RouterLink>

        <section class="max-w-4xl">
          <p class="text-xs uppercase tracking-[0.28em] text-brand-200">
            {{ experience.category }}
          </p>
          <h1 class="mt-4 font-display text-4xl text-white sm:text-5xl">
            {{ experience.role }}
          </h1>
          <p class="mt-4 text-lg font-medium text-slate-200">
            {{ experience.company }}
          </p>
          <p v-if="experienceMeta" class="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
            {{ experienceMeta }}
          </p>
          <p class="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            {{ experience.shortDescription }}
          </p>
        </section>

        <div
          class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] xl:grid-cols-[minmax(0,1fr)_22rem]"
        >
          <div class="space-y-8">
            <section class="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 sm:p-8">
              <p class="text-xs uppercase tracking-[0.22em] text-slate-500">Overview</p>
              <p class="mt-4 text-sm leading-8 text-slate-300 sm:text-base">
                {{ experience.detail.overview }}
              </p>
            </section>

            <section class="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 sm:p-8">
              <p class="text-xs uppercase tracking-[0.22em] text-slate-500">Tanggung Jawab</p>
              <ul class="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                <li
                  v-for="item in experience.detail.responsibilities"
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
              <p class="text-xs uppercase tracking-[0.22em] text-slate-500">Dampak</p>
              <ul class="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                <li
                  v-for="item in experience.detail.impact"
                  :key="item"
                  class="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3"
                >
                  {{ item }}
                </li>
              </ul>
            </section>

            <section
              v-if="experience.tools?.length"
              class="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <p class="text-xs uppercase tracking-[0.22em] text-slate-500">Tools</p>
              <div class="mt-5 flex flex-wrap gap-2">
                <span
                  v-for="item in experience.tools"
                  :key="item"
                  class="rounded-full border border-white/10 bg-slate-950/60 px-3 py-2 text-xs text-slate-300"
                >
                  {{ item }}
                </span>
              </div>
            </section>

            <section
              v-if="experience.certificate?.url"
              class="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <p class="text-xs uppercase tracking-[0.22em] text-slate-500">Sertifikat</p>
              <a
                :href="experience.certificate.url"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lihat sertifikat untuk pengalaman ini"
                class="mt-5 inline-flex w-full cursor-pointer items-center justify-between rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm font-medium text-slate-100 transition-[transform,border-color,background-color,color] duration-150 hover:-translate-y-0.5 hover:border-white/20 hover:bg-slate-950/80 hover:text-white"
              >
                <span>{{ experience.certificate.label || 'Lihat Sertifikat' }}</span>
                <ArrowUpRight class="h-4 w-4" />
              </a>
            </section>

            <section
              v-if="experience.location"
              class="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <p class="text-xs uppercase tracking-[0.22em] text-slate-500">Lokasi</p>
              <p class="mt-5 inline-flex items-center gap-2 text-sm text-slate-300">
                <MapPin class="h-4 w-4 text-accent" />
                <span>{{ experience.location }}</span>
              </p>
            </section>
          </aside>
        </div>
      </div>

      <div
        v-else
        class="rounded-[2rem] border border-dashed border-white/15 bg-white/[0.03] p-8 text-center sm:p-10"
      >
        <h1 class="font-display text-3xl text-white">Pengalaman tidak ditemukan</h1>
        <p class="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
          Slug yang Anda buka tidak ada di data pengalaman lokal. Silakan kembali ke daftar
          pengalaman untuk membuka detail yang tersedia.
        </p>
        <RouterLink
          :to="{ name: 'home', hash: '#pengalaman' }"
          class="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950"
        >
          <ArrowLeft class="h-4 w-4" />
          Kembali ke beranda
        </RouterLink>
      </div>
    </BaseContainer>
  </AppShell>
</template>
