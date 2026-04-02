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
  <section
    id="kontak"
    class="section-theme section-theme-contact section-spacing-compact scroll-mt-24"
  >
    <BaseContainer
      v-motion
      :initial="{ opacity: 0, y: 14 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 360 } }"
    >
      <div class="section-panel rounded-[2rem] px-6 py-10 text-center sm:px-8 sm:py-12">
        <div class="mx-auto max-w-3xl">
          <p class="section-eyebrow text-xs font-medium uppercase tracking-[0.18em]">Kontak</p>
          <h2 class="mt-4 font-display text-3xl leading-tight text-white sm:text-[2.6rem]">
            Jika Anda butuh partner kerja yang bisa membaca masalah lalu mengubahnya menjadi solusi,
            saya siap berdiskusi.
          </h2>
          <p class="section-muted mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base">
            Hubungi Alvito Dwinova Permana untuk peluang full-time, project freelance, atau
            kolaborasi yang membutuhkan analisis data dan implementasi web yang jelas, rapi, dan
            relevan dengan kebutuhan nyata.
          </p>
        </div>

        <div class="section-content-gap flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a
            v-for="item in contactLinks"
            :key="item.label"
            :href="item.href"
            :title="item.label"
            :aria-label="item.ariaLabel"
            :target="item.href.startsWith('mailto:') ? undefined : '_blank'"
            :rel="item.href.startsWith('mailto:') ? undefined : 'noreferrer'"
            class="section-button-secondary inline-flex h-16 w-16 items-center justify-center rounded-2xl text-slate-300 transition duration-200 hover:-translate-y-0.5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/40 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas sm:h-20 sm:w-20"
          >
            <component :is="item.icon" class="h-9 w-9 sm:h-10 sm:w-10" />
            <span class="sr-only">{{ item.label }}</span>
          </a>
        </div>

        <p class="section-muted mt-6 text-sm">
          {{ siteConfig.availability }}
        </p>
      </div>
    </BaseContainer>
  </section>
</template>
