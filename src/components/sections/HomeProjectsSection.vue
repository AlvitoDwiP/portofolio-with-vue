<script setup>
import { computed, ref } from 'vue'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import ProjectFilter from '@/components/projects/ProjectFilter.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'

const props = defineProps({
  projects: {
    type: Array,
    required: true,
  },
})

const categories = ['Semua', 'Data Analytics', 'Fullstack']
const maxVisibleProjects = 6
const activeFilter = ref('Semua')

const filteredProjects = computed(() =>
  activeFilter.value === 'Semua'
    ? props.projects
    : props.projects.filter((project) => project.category === activeFilter.value)
)

const visibleProjects = computed(() => filteredProjects.value.slice(0, maxVisibleProjects))
</script>

<template>
  <section id="proyek" class="section-theme section-theme-projects section-spacing scroll-mt-24">
    <BaseContainer
      v-motion
      :initial="{ opacity: 0, y: 14 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 360 } }"
    >
      <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-3xl space-y-4">
          <p class="section-eyebrow text-xs uppercase tracking-[0.28em]">Proyek Pilihan</p>
          <h2 class="font-display text-3xl text-white sm:text-4xl">
            Hasil kerja yang menunjukkan bagaimana saya membaca masalah lalu membangun solusi yang
            bisa dipakai.
          </h2>
          <p class="section-muted max-w-2xl text-sm leading-7">
            Setiap proyek dipilih untuk memperlihatkan alur kerja saya, dari memahami konteks,
            mengolah data, sampai merancang output yang relevan untuk kebutuhan nyata.
          </p>
        </div>

        <ProjectFilter
          :categories="categories"
          :active-category="activeFilter"
          @change="activeFilter = $event"
        />
      </div>

      <div
        v-if="visibleProjects.length"
        class="section-content-gap section-grid-gap grid sm:auto-rows-fr sm:grid-cols-2 xl:grid-cols-3"
      >
        <ProjectCard v-for="project in visibleProjects" :key="project.slug" :project="project" />
      </div>

      <div
        v-else
        class="glass glass-panel section-content-gap rounded-lg border-dashed p-6 text-sm leading-8 text-textSecondary"
      >
        Belum ada proyek pada kategori ini.
      </div>
    </BaseContainer>
  </section>
</template>
