<script setup>
import { computed } from 'vue'
import { useHead } from '@vueuse/head'
import { ArrowLeft, MapPin } from 'lucide-vue-next'
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
    <section class="section-theme section-theme-detail-experience">
      <BaseContainer class="py-16 sm:py-24">
        <div v-if="experience" class="space-y-10">
          <RouterLink
            :to="{ name: 'home', hash: '#pengalaman' }"
            class="glass-chip glass-hover inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
          >
            <ArrowLeft class="h-4 w-4" />
            Kembali ke pengalaman
          </RouterLink>

          <section class="max-w-4xl space-y-5">
            <span
              class="section-chip-accent inline-flex items-center rounded-full px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.22em]"
            >
              {{ experience.category }}
            </span>
            <h1 class="font-display text-4xl text-textPrimary sm:text-5xl">
              {{ experience.role }}
            </h1>
            <p class="text-lg font-medium text-textPrimary">
              {{ experience.company }}
            </p>
            <p v-if="experienceMeta" class="text-sm leading-7 text-textSecondary sm:text-base">
              {{ experienceMeta }}
            </p>
            <p class="max-w-3xl text-base leading-8 text-textSecondary sm:text-lg">
              {{ experience.shortDescription }}
            </p>
          </section>

          <div
            class="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] xl:grid-cols-[minmax(0,1fr)_22rem]"
          >
            <div class="glass glass-panel-solid rounded-lg p-7 sm:p-8">
              <section class="space-y-4">
                <p class="section-eyebrow text-xs uppercase tracking-[0.22em]">Overview</p>
                <p class="text-sm leading-8 text-textSecondary sm:text-base">
                  {{ experience.detail.overview }}
                </p>
              </section>

              <section
                v-if="experience.detail.responsibilities?.length"
                class="mt-8 border-t border-[color:var(--glass-border)] pt-8"
              >
                <p class="section-eyebrow text-xs uppercase tracking-[0.22em]">Tanggung Jawab</p>
                <ul class="mt-5 space-y-3">
                  <li
                    v-for="item in experience.detail.responsibilities"
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
                experience.detail.impact?.length ||
                experience.tools?.length ||
                experience.certificate?.url ||
                experience.location
              "
              class="glass glass-panel-solid rounded-lg p-6"
            >
              <section v-if="experience.detail.impact?.length" class="space-y-5">
                <p class="section-eyebrow text-xs uppercase tracking-[0.22em]">Dampak</p>
                <ul class="space-y-3">
                  <li
                    v-for="item in experience.detail.impact"
                    :key="item"
                    class="glass-chip-strong rounded-card px-4 py-3 text-sm leading-7 text-textPrimary"
                  >
                    {{ item }}
                  </li>
                </ul>
              </section>

              <section
                v-if="experience.tools?.length"
                class="mt-6 border-t border-[color:var(--glass-border)] pt-6"
              >
                <p class="section-eyebrow text-xs uppercase tracking-[0.22em]">Tools</p>
                <div class="mt-5 flex flex-wrap gap-2">
                  <span
                    v-for="item in experience.tools"
                    :key="item"
                    class="glass-chip rounded-full px-3 py-2 text-xs"
                  >
                    {{ item }}
                  </span>
                </div>
              </section>

              <section
                v-if="experience.certificate?.url"
                class="mt-6 border-t border-[color:var(--glass-border)] pt-6"
              >
                <p class="section-eyebrow text-xs uppercase tracking-[0.22em]">Sertifikat</p>
                <a
                  :href="experience.certificate.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Lihat sertifikat untuk pengalaman ini"
                  class="glass-chip-strong glass-hover mt-5 inline-flex w-full cursor-pointer items-center justify-between rounded-card px-4 py-3 text-sm font-medium text-textPrimary"
                >
                  <span>{{ experience.certificate.label || 'Lihat Sertifikat' }}</span>
                </a>
              </section>

              <section
                v-if="experience.location"
                class="mt-6 border-t border-[color:var(--glass-border)] pt-6"
              >
                <p class="section-eyebrow text-xs uppercase tracking-[0.22em]">Lokasi</p>
                <p class="mt-5 inline-flex items-center gap-2 text-sm text-textSecondary">
                  <MapPin class="h-4 w-4 text-accent" />
                  <span>{{ experience.location }}</span>
                </p>
              </section>
            </aside>
          </div>
        </div>

        <div
          v-else
          class="glass glass-panel-solid rounded-lg border-dashed p-8 text-center sm:p-10"
        >
          <h1 class="font-display text-3xl text-textPrimary">Pengalaman tidak ditemukan</h1>
          <p class="mx-auto mt-4 max-w-xl text-sm leading-7 text-textSecondary">
            Slug yang Anda buka tidak ada di data pengalaman lokal. Silakan kembali ke daftar
            pengalaman untuk membuka detail yang tersedia.
          </p>
          <RouterLink
            :to="{ name: 'home', hash: '#pengalaman' }"
            class="glass-chip-strong glass-hover mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium"
          >
            <ArrowLeft class="h-4 w-4" />
            Kembali ke beranda
          </RouterLink>
        </div>
      </BaseContainer>
    </section>
  </AppShell>
</template>
