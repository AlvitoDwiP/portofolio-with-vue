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
  <section
    id="tentang-saya"
    class="section-theme section-theme-about scroll-mt-24 pb-20 pt-20 sm:pb-24 sm:pt-24 lg:pb-28 lg:pt-28"
  >
    <div
      class="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,rgba(15,17,21,0.98),rgba(15,17,21,0.92)_48%,rgba(15,17,21,0))] sm:h-40"
    />
    <div
      class="pointer-events-none absolute inset-x-0 top-12 h-40 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.08),transparent_68%)] sm:top-16 sm:h-48"
    />

    <BaseContainer
      class="pt-4 sm:pt-6"
      v-motion
      :initial="{ opacity: 0, y: 14 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 360 } }"
    >
      <div class="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div class="max-w-2xl space-y-6">
          <SectionHeader
            eyebrow="Tentang Saya"
            title="Saya bekerja dengan pendekatan berbasis masalah, bukan sekadar tools."
            description="Pendekatan saya menggabungkan analisis data dan pengembangan aplikasi untuk menghasilkan solusi yang benar-benar digunakan."
            class="max-w-3xl"
          />

          <p class="section-muted text-sm leading-8 sm:text-base">
            Saya adalah lulusan Teknologi Informasi Universitas Jember yang berfokus pada data
            analytics dan pengembangan sistem. Saya terbiasa mengolah data dan mengubahnya menjadi
            insight yang dapat digunakan dalam pengambilan keputusan.
          </p>

          <p class="section-muted text-sm leading-8 sm:text-base">
            Saya memiliki pengalaman melalui internship dan proyek nyata, serta terbiasa bekerja
            secara sistematis, berpikir kritis, dan menghubungkan data dengan kebutuhan bisnis agar
            solusi yang dihasilkan benar-benar relevan dan dapat digunakan.
          </p>
        </div>

        <div class="section-grid-gap grid auto-rows-fr content-start self-start sm:grid-cols-2">
          <BaseCard
            v-for="item in skillCategories"
            :key="item.title"
            class="glass-hover flex flex-col p-5 sm:p-6"
          >
            <p class="section-eyebrow text-xs uppercase tracking-[0.18em]">{{ item.title }}</p>

            <div class="mt-4 flex flex-wrap gap-2">
              <BaseBadge
                v-for="skill in item.items"
                :key="skill"
                variant="neutral"
                class="px-2.5 py-1 text-[0.7rem] sm:text-xs"
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
