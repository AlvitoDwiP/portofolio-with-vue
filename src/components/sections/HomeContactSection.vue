<script setup>
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { siteConfig } from '@/data/site'

const supportingLinks = [
  {
    label: 'LinkedIn',
    value: siteConfig.linkedinUrl.replace('https://', ''),
    href: siteConfig.linkedinUrl,
  },
  {
    label: 'GitHub',
    value: siteConfig.githubUrl.replace('https://', ''),
    href: siteConfig.githubUrl,
  },
]
</script>

<template>
  <section id="kontak" class="scroll-mt-24 pb-24 sm:pb-32">
    <BaseContainer
      v-motion
      :initial="{ opacity: 0, y: 14 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 360 } }"
    >
      <div class="grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div class="max-w-2xl">
          <p class="text-xs font-medium uppercase tracking-[0.18em] text-accent">Kontak</p>
          <h2 class="mt-4 font-display text-3xl leading-tight text-white sm:text-[2.6rem]">
            Jika Anda butuh partner kerja yang bisa membaca masalah lalu mengubahnya menjadi solusi
            yang siap dipakai, saya siap berdiskusi.
          </h2>
          <p class="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Hubungi saya untuk peluang full-time, project freelance, atau kolaborasi yang
            membutuhkan analisis data dan implementasi web yang jelas, rapi, dan relevan dengan
            kebutuhan nyata.
          </p>

          <div class="mt-7 flex flex-wrap items-center gap-3">
            <a
              :href="`mailto:${siteConfig.email}`"
              class="inline-flex items-center justify-center rounded-xl border border-accent bg-accent px-4 py-2.5 text-sm font-medium text-canvas transition-[transform,background-color,border-color,color] duration-200 hover:-translate-y-0.5 hover:bg-brand-400"
            >
              Email saya
            </a>

            <p class="text-sm text-slate-500">
              {{ siteConfig.availability }}
            </p>
          </div>
        </div>

        <div class="border-t border-white/10 pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
          <div>
            <p class="text-xs uppercase tracking-[0.18em] text-slate-500">Kontak Langsung</p>
            <a
              :href="`mailto:${siteConfig.email}`"
              class="mt-3 block text-lg font-medium text-slate-100 transition-colors duration-150 hover:text-white sm:text-xl"
            >
              {{ siteConfig.email }}
            </a>
          </div>

          <div class="mt-8 space-y-4">
            <div
              v-for="item in supportingLinks"
              :key="item.label"
              class="flex items-start justify-between gap-4 border-t border-white/10 pt-4"
            >
              <div>
                <p class="text-xs uppercase tracking-[0.18em] text-slate-500">{{ item.label }}</p>
                <p class="mt-1 text-sm text-slate-400">{{ item.value }}</p>
              </div>

              <a
                :href="item.href"
                target="_blank"
                rel="noreferrer"
                class="text-sm text-slate-300 transition-colors duration-150 hover:text-white"
              >
                Buka
              </a>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
