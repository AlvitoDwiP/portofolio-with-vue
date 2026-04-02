<script setup>
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'

const aboutHighlights = [
  {
    title: 'Analisis yang berujung implementasi',
    description:
      'Saya tidak berhenti di insight; hasil analisis saya lanjutkan menjadi dashboard atau aplikasi yang benar-benar dipakai.',
  },
  {
    title: 'Insight yang mudah dipahami',
    description:
      'Saya menyederhanakan data dan alur teknis agar keputusan bisa diambil lebih cepat oleh tim non-teknis maupun stakeholder.',
  },
  {
    title: 'Solusi yang bisa langsung digunakan',
    description:
      'Saya menjaga output tetap relevan dengan kebutuhan kerja nyata, bukan sekadar terlihat bagus saat dipresentasikan.',
  },
]
</script>

<template>
  <section id="tentang-saya" class="scroll-mt-24 pb-24 sm:pb-28">
    <BaseContainer
      v-motion
      :initial="{ opacity: 0, y: 14 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 360 } }"
    >
      <SectionHeader
        eyebrow="Tentang Saya"
        title="Saya bekerja dengan pendekatan berbasis masalah, bukan sekadar tools."
        description="Pendekatan saya menggabungkan analisis data dan pengembangan aplikasi untuk menghasilkan solusi yang benar-benar digunakan."
        class="max-w-3xl"
      />

      <div class="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div class="space-y-5">
          <p class="text-sm leading-8 text-slate-300 sm:text-base">
            Saya memulai dari memahami masalah, konteks bisnis, dan alur kerja yang sedang berjalan.
            Dari sana saya melihat apa yang perlu dirapikan, data apa yang perlu dibaca, dan bagian
            mana yang paling layak diperbaiki lebih dulu.
          </p>

          <p class="text-sm leading-8 text-slate-300 sm:text-base">
            Setelah itu saya mengolah data atau sistem yang ada, mencari insight yang relevan, lalu
            menerjemahkannya menjadi dashboard atau aplikasi web yang bisa langsung digunakan.
            Itulah cara saya menyatukan peran Data Analyst dan Fullstack Developer dalam satu alur
            kerja yang utuh.
          </p>
        </div>

        <div class="grid gap-4">
          <BaseCard
            v-for="item in aboutHighlights"
            :key="item.title"
            class="rounded-[1.75rem] border-white/10 bg-white/[0.03] p-6"
          >
            <p class="text-xs uppercase tracking-[0.18em] text-accent">{{ item.title }}</p>
            <p class="mt-3 text-sm leading-7 text-slate-300">
              {{ item.description }}
            </p>
          </BaseCard>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
