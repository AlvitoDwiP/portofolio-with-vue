<script setup>
import { Github, Linkedin, Mail } from 'lucide-vue-next'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { siteConfig } from '@/data/site'

const contactLinks = [
  {
    label: 'Email',
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    ariaLabel: `Kirim email ke ${siteConfig.name}`,
  },
  {
    label: 'LinkedIn',
    href: siteConfig.linkedinUrl,
    icon: Linkedin,
    ariaLabel: `Buka profil LinkedIn ${siteConfig.name}`,
  },
  {
    label: 'GitHub',
    href: siteConfig.githubUrl,
    icon: Github,
    ariaLabel: `Buka profil GitHub ${siteConfig.name}`,
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
      <div class="border-t border-white/10 pt-10 text-center">
        <div class="mx-auto max-w-3xl">
          <p class="text-xs font-medium uppercase tracking-[0.18em] text-accent">Kontak</p>
          <h2 class="mt-4 font-display text-3xl leading-tight text-white sm:text-[2.6rem]">
            Jika Anda butuh partner kerja yang bisa membaca masalah lalu mengubahnya menjadi solusi,
            saya siap berdiskusi.
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Hubungi Alvito Dwinova Permana untuk peluang full-time, project freelance, atau
            kolaborasi yang membutuhkan analisis data dan implementasi web yang jelas, rapi, dan
            relevan dengan kebutuhan nyata.
          </p>
        </div>

        <div class="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            v-for="item in contactLinks"
            :key="item.label"
            :href="item.href"
            :title="item.label"
            :aria-label="item.ariaLabel"
            :target="item.href.startsWith('mailto:') ? undefined : '_blank'"
            :rel="item.href.startsWith('mailto:') ? undefined : 'noreferrer'"
            class="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-slate-300 transition duration-200 hover:scale-110 hover:border-accent/40 hover:bg-white/[0.06] hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:h-20 sm:w-20"
          >
            <component :is="item.icon" class="h-9 w-9 sm:h-10 sm:w-10" />
            <span class="sr-only">{{ item.label }}</span>
          </a>
        </div>

        <p class="mt-6 text-sm text-slate-500">
          {{ siteConfig.availability }}
        </p>
      </div>
    </BaseContainer>
  </section>
</template>
