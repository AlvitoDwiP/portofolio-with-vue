<script setup>
import BaseBadge from '@/components/ui/BaseBadge.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'

const skillCategories = [
  {
    title: 'Bahasa Pemrograman',
    items: ['JavaScript', 'TypeScript', 'PHP', 'Python', 'Dart'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Vue.js', 'Vite', 'Flutter', 'Tailwind CSS', 'Laravel Blade'],
  },
  {
    title: 'Backend',
    items: ['Laravel', 'Node.js', 'Express.js'],
  },
  {
    title: 'Data',
    items: ['NumPy', 'Pandas', 'Scikit-learn', 'Airflow', 'Anaconda', 'Google Colab'],
  },
  {
    title: 'Visualisasi',
    items: ['Looker', 'Tableau', 'Power BI'],
  },
  {
    title: 'Database dan Tools',
    items: ['MySQL', 'PostgreSQL', 'Microsoft Office'],
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
      <div class="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div class="max-w-2xl space-y-5">
          <SectionHeader
            eyebrow="Tentang Saya"
            title="Saya bekerja dengan pendekatan berbasis masalah, bukan sekadar tools."
            description="Pendekatan saya menggabungkan analisis data dan pengembangan aplikasi untuk menghasilkan solusi yang benar-benar digunakan."
            class="max-w-3xl"
          />

          <p class="text-sm leading-8 text-slate-300 sm:text-base">
            Saya adalah lulusan Teknologi Informasi Universitas Jember dengan fokus pada Machine
            Learning, data analytics, dan analisis sistem. Saya terbiasa bekerja dengan data dan
            mengubahnya menjadi insight yang bisa digunakan dalam pengambilan keputusan.
          </p>

          <p class="text-sm leading-8 text-slate-300 sm:text-base">
            Selama kuliah, saya menjadi Teaching Assistant di Laboratorium GIS dan asisten di
            Laboratorium Smart Agriculture. Saya membantu praktikum, membimbing mahasiswa, dan
            menerjemahkan konsep teknis menjadi solusi yang lebih aplikatif.
          </p>

          <p class="text-sm leading-8 text-slate-300 sm:text-base">
            Saya berfokus pada Data Analytics, Data Science, dan pengembangan sistem yang
            mendukung kebutuhan bisnis. Saya terus mengasah kemampuan melalui proyek nyata dan
            eksplorasi tools industri.
          </p>

          <p class="text-sm leading-8 text-slate-300 sm:text-base">
            Saya siap berkontribusi dalam tim yang membutuhkan pendekatan berbasis data untuk
            memecahkan masalah dan meningkatkan proses kerja.
          </p>
        </div>

        <div class="grid auto-rows-fr content-start gap-4 self-start sm:grid-cols-2">
          <BaseCard
            v-for="item in skillCategories"
            :key="item.title"
            class="flex flex-col rounded-[1.75rem] border-white/10 bg-white/[0.03] p-5 sm:p-6"
          >
            <p class="text-xs uppercase tracking-[0.18em] text-accent">{{ item.title }}</p>

            <div class="mt-4 flex flex-wrap gap-2">
              <BaseBadge
                v-for="skill in item.items"
                :key="skill"
                variant="default"
                class="rounded-full border border-white/10 bg-slate-950/70 px-2.5 py-1 text-[0.7rem] font-medium text-slate-300 sm:text-xs"
              >
                {{ skill }}
              </BaseBadge>
            </div>
          </BaseCard>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
