<script setup>
import { useHead } from '@vueuse/head'
import { Github, Linkedin, Mail } from 'lucide-vue-next'
import AppShell from '@/components/layout/AppShell.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import HomeQuickProofSection from '@/components/sections/HomeQuickProofSection.vue'
import HomeProjectsSection from '@/components/sections/HomeProjectsSection.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { useProjects } from '@/composables/useProjects'
import { siteConfig } from '@/data/site'
import { createPageTitle } from '@/utils/createPageTitle'

const { featuredProjects } = useProjects()

const aboutHighlights = [
  {
    title: 'Analisis yang berujung implementasi',
    description:
      'Saya memulai dari problem bisnis, merapikan data, mencari insight, lalu menerjemahkannya menjadi dashboard atau aplikasi web yang benar-benar dipakai.',
  },
  {
    title: 'Komunikasi yang mudah dipahami',
    description:
      'Saya menjaga hasil kerja tetap jelas untuk recruiter, client, maupun tim non-teknis, sehingga keputusan bisa diambil lebih cepat.',
  },
]

const contactLinks = [
  {
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: siteConfig.githubUrl.replace('https://', ''),
    href: siteConfig.githubUrl,
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: siteConfig.linkedinUrl.replace('https://', ''),
    href: siteConfig.linkedinUrl,
    icon: Linkedin,
  },
]

useHead({
  title: createPageTitle('Portofolio'),
  meta: [
    {
      name: 'description',
      content: siteConfig.description,
    },
  ],
})
</script>

<template>
  <AppShell>
    <HeroSection />

    <HomeQuickProofSection />

    <HomeProjectsSection :projects="featuredProjects" />

    <section id="tentang-saya" class="scroll-mt-24 pb-24 sm:pb-28">
      <BaseContainer>
        <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <SectionHeader
            eyebrow="Tentang Saya"
            title="Data Analyst dan Fullstack Developer saya jalankan sebagai satu cara kerja."
            description="Nilai utama yang saya tawarkan adalah kemampuan membaca data dengan tajam lalu mengubahnya menjadi solusi digital yang rapi, terukur, dan siap digunakan."
          />

          <div class="grid gap-4 sm:grid-cols-2">
            <BaseCard
              v-for="item in aboutHighlights"
              :key="item.title"
              class="rounded-[1.75rem] border-white/10 bg-white/[0.03] p-6"
            >
              <p class="text-xs uppercase tracking-[0.18em] text-accent">{{ item.title }}</p>
              <p class="mt-4 text-sm leading-7 text-slate-300">
                {{ item.description }}
              </p>
            </BaseCard>
          </div>
        </div>
      </BaseContainer>
    </section>

    <section id="sertifikasi" class="scroll-mt-24 pb-24 sm:pb-28">
      <BaseContainer>
        <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <SectionHeader
            eyebrow="Sertifikasi"
            title="Dokumen pendukung saya letakkan dekat dengan konteks profesional."
            description="Bagian ini sengaja ringkas agar recruiter dan client bisa langsung berpindah ke CV atau LinkedIn untuk melihat versi terbaru dari sertifikasi dan riwayat belajar."
          />

          <BaseCard class="rounded-[1.75rem] border-white/10 bg-white/[0.03] p-7">
            <p class="text-sm leading-8 text-slate-300">
              Untuk versi terbaru sertifikasi, pengalaman belajar, dan detail profil profesional,
              silakan lihat CV atau LinkedIn saya.
            </p>

            <div class="mt-6 flex flex-wrap gap-3">
              <a
                :href="siteConfig.resumeUrl"
                download
                class="inline-flex items-center justify-center rounded-xl border border-accent bg-accent px-4 py-2.5 text-sm font-medium text-canvas transition duration-200 hover:bg-brand-400"
              >
                Unduh CV
              </a>
              <a
                :href="siteConfig.linkedinUrl"
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-text transition duration-200 hover:border-white/20 hover:bg-white/[0.06]"
              >
                Lihat LinkedIn
              </a>
            </div>
          </BaseCard>
        </div>
      </BaseContainer>
    </section>

    <section id="kontak" class="scroll-mt-24 pb-24 sm:pb-32">
      <BaseContainer>
        <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <SectionHeader
            eyebrow="Kontak"
            title="Jika ada peran, proyek, atau kolaborasi yang relevan, saya siap berdiskusi."
            description="Kontak di bawah ini dibuat sesederhana mungkin agar langkah berikutnya terasa jelas dan profesional."
          />

          <div class="grid gap-4">
            <BaseCard
              v-for="item in contactLinks"
              :key="item.label"
              as="a"
              :href="item.href"
              :target="item.label === 'Email' ? undefined : '_blank'"
              :rel="item.label === 'Email' ? undefined : 'noreferrer'"
              class="flex items-center justify-between gap-4 rounded-[1.75rem] border-white/10 bg-white/[0.03] p-5 transition duration-200 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div>
                <p class="text-xs uppercase tracking-[0.18em] text-accent">{{ item.label }}</p>
                <p class="mt-2 text-sm text-slate-300">{{ item.value }}</p>
              </div>

              <div
                class="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 text-slate-200"
              >
                <component :is="item.icon" class="h-4 w-4" />
              </div>
            </BaseCard>
          </div>
        </div>
      </BaseContainer>
    </section>
  </AppShell>
</template>
