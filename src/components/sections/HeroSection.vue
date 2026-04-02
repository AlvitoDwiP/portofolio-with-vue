<script setup>
import { computed, ref } from 'vue'
import { ArrowRight, Download } from 'lucide-vue-next'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useSectionNavigation } from '@/composables/useSectionNavigation'
import { siteConfig } from '@/data/site'

const hasPortraitError = ref(false)

const portraitAlt = computed(
  () => siteConfig.portrait?.alt ?? `Foto profesional ${siteConfig.name}`
)

const fallbackInitials = computed(() =>
  siteConfig.name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
)

const { navigateToSection } = useSectionNavigation(['#proyek'])
</script>

<template>
  <section id="home" class="section-theme section-theme-hero scroll-mt-24">
    <BaseContainer
      class="flex min-h-[calc(100vh-4.75rem)] items-center pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28"
    >
      <div
        class="grid w-full gap-y-8 lg:grid-cols-[minmax(0,45%)_minmax(0,55%)] lg:grid-rows-[auto_auto] lg:items-center lg:gap-x-14"
      >
        <div
          v-motion
          :initial="{ opacity: 0, y: 18 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 450 } }"
          class="order-1 max-w-xl space-y-6 lg:row-span-2"
        >
          <p class="section-eyebrow text-xs font-medium uppercase tracking-[0.24em]">
            {{ siteConfig.eyebrow }}
          </p>

          <div class="space-y-5">
            <h1 class="font-display text-[2.5rem] leading-[1.05] text-text sm:text-5xl lg:text-6xl">
              {{ siteConfig.name }}
            </h1>

            <p class="text-lg font-medium text-text sm:text-xl">
              {{ siteConfig.role }}
            </p>

            <p class="section-muted max-w-lg text-[0.98rem] leading-8 sm:text-lg">
              Saya menggabungkan analisis data, visualisasi, dan pengembangan aplikasi untuk
              membangun solusi yang relevan dan siap digunakan.
            </p>
          </div>

          <div class="flex flex-col gap-3 pt-3 sm:flex-row sm:flex-wrap sm:items-center">
            <BaseButton
              variant="primary"
              class="w-full sm:w-auto"
              @click="navigateToSection('#proyek')"
            >
              <span>Lihat Proyek</span>
              <ArrowRight class="ml-2 h-4 w-4" />
            </BaseButton>

            <a
              :href="siteConfig.resumeUrl"
              download
              class="section-button-secondary inline-flex w-full items-center justify-center rounded-xl border px-4 py-2.5 text-sm font-medium transition-[transform,background-color,border-color,color] duration-200 hover:-translate-y-0.5 sm:w-auto"
            >
              <span>Unduh CV</span>
              <Download class="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, y: 22 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 80 } }"
          class="order-2 lg:col-start-2 lg:row-span-2 lg:self-stretch"
        >
          <div
            class="section-panel mx-auto flex h-full min-h-[20rem] w-full max-w-[42rem] items-stretch rounded-[2rem] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.32)] sm:min-h-[24rem]"
          >
            <div
              class="absolute inset-x-10 bottom-0 h-24 rounded-full bg-[rgb(var(--section-accent-rgb)/0.12)] blur-3xl"
            />

            <div class="relative flex-1 overflow-hidden rounded-[1.5rem] bg-[#0d0f13]">
              <img
                v-if="!hasPortraitError"
                :src="siteConfig.portrait.src"
                :alt="portraitAlt"
                class="h-full w-full object-contain object-top"
                @error="hasPortraitError = true"
              />

              <div
                v-else
                class="flex h-full flex-col items-center justify-center bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.14),transparent_44%)] px-6 text-center"
              >
                <div
                  class="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-2xl font-semibold tracking-[0.24em] text-text"
                >
                  {{ fallbackInitials }}
                </div>
                <p class="mt-5 text-base font-medium text-text">
                  Tambahkan foto profesional Alvito
                </p>
                <p class="section-muted mt-2 max-w-xs text-sm leading-7">
                  Simpan file foto di `public/profile-photo-hero.png` agar area hero langsung
                  terisi.
                </p>
              </div>

              <div
                class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,16,0.06),rgba(10,12,16,0.22)_60%,rgba(10,12,16,0.58))]"
              />

              <div
                class="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(10,12,16,0.72))]"
              />

              <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div class="section-panel max-w-sm rounded-2xl bg-slate-950/35 px-4 py-3">
                  <p class="section-eyebrow text-xs uppercase tracking-[0.2em]">Fokus kerja</p>
                  <p class="mt-2 text-sm leading-7 text-slate-200">
                    Dari insight analitis sampai aplikasi web yang siap dipakai tim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
