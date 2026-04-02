<script setup>
import { computed, ref } from 'vue'
import { ArrowRight, Download } from 'lucide-vue-next'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { siteConfig } from '@/data/site'

const hasPortraitError = ref(false)

const portraitAlt = computed(
  () => siteConfig.portrait?.alt ?? `Foto profesional ${siteConfig.name}`
)

const fallbackInitials = computed(() =>
  siteConfig.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
)

function navigateToHash(hash) {
  window.location.hash = hash.startsWith('#') ? hash : `#${hash}`
}
</script>

<template>
  <section id="home" class="relative overflow-hidden scroll-mt-24">
    <div
      class="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(200,155,96,0.18),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_24%)]"
    />

    <BaseContainer class="flex min-h-[calc(100vh-4.75rem)] items-center py-14 sm:py-20 lg:py-24">
      <div
        class="grid w-full gap-y-8 lg:grid-cols-[minmax(0,45%)_minmax(0,55%)] lg:grid-rows-[auto_auto] lg:items-center lg:gap-x-14"
      >
        <div
          v-motion
          :initial="{ opacity: 0, y: 18 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 450 } }"
          class="order-1 max-w-xl space-y-6 lg:row-start-1"
        >
          <p class="text-xs font-medium uppercase tracking-[0.24em] text-accent">
            {{ siteConfig.eyebrow }}
          </p>

          <div class="space-y-4">
            <h1 class="font-display text-[2.5rem] leading-[1.05] text-text sm:text-5xl lg:text-6xl">
              {{ siteConfig.headline }}
            </h1>

            <p class="text-lg font-medium text-text sm:text-xl">
              {{ siteConfig.role }}
            </p>

            <p class="max-w-lg text-[0.98rem] leading-8 text-text-muted sm:text-lg">
              {{ siteConfig.summary }}
            </p>
          </div>

          <div class="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
            <BaseButton
              variant="primary"
              class="w-full sm:w-auto"
              @click="navigateToHash('#proyek')"
            >
              <span>Lihat Proyek</span>
              <ArrowRight class="ml-2 h-4 w-4" />
            </BaseButton>

            <a
              :href="siteConfig.resumeUrl"
              download
              class="inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-text transition-[transform,background-color,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] sm:w-auto"
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
            class="relative mx-auto flex h-full min-h-[20rem] w-full max-w-[42rem] items-stretch rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.32)] sm:min-h-[24rem]"
          >
            <div class="absolute inset-x-10 bottom-0 h-24 rounded-full bg-accent/10 blur-3xl" />

            <div class="relative flex-1 overflow-hidden rounded-[1.5rem] bg-[#0d0f13]">
              <img
                v-if="!hasPortraitError"
                :src="siteConfig.portrait.src"
                :alt="portraitAlt"
                class="h-full w-full object-cover object-center"
                @error="hasPortraitError = true"
              />

              <div
                v-else
                class="flex h-full flex-col items-center justify-center bg-[radial-gradient(circle_at_top,rgba(200,155,96,0.12),transparent_44%)] px-6 text-center"
              >
                <div
                  class="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-2xl font-semibold tracking-[0.24em] text-text"
                >
                  {{ fallbackInitials }}
                </div>
                <p class="mt-5 text-base font-medium text-text">Tambahkan foto profesional Anda</p>
                <p class="mt-2 max-w-xs text-sm leading-7 text-text-muted">
                  Simpan file foto di `public/profile-photo.jpg` agar area hero langsung terisi.
                </p>
              </div>

              <div
                class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,12,16,0.06),rgba(10,12,16,0.22)_60%,rgba(10,12,16,0.58))]"
              />

              <div
                class="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(10,12,16,0.72))]"
              />

              <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div
                  class="max-w-sm rounded-2xl border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-sm"
                >
                  <p class="text-xs uppercase tracking-[0.2em] text-accent">Fokus kerja</p>
                  <p class="mt-2 text-sm leading-7 text-slate-200">
                    Dari insight analitis sampai aplikasi web yang siap dipakai tim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, y: 18 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 450, delay: 120 } }"
          class="order-3 max-w-xl lg:row-start-2"
        >
          <p class="text-xs uppercase tracking-[0.2em] text-text-muted">Stack inti</p>
          <div class="mt-4 flex flex-wrap gap-2.5">
            <BaseBadge
              v-for="item in siteConfig.stack"
              :key="item"
              variant="accent"
              class="px-3.5 py-1.5 text-[0.72rem] uppercase tracking-[0.14em]"
            >
              {{ item }}
            </BaseBadge>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
