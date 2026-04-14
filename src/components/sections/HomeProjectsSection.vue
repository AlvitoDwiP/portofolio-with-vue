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

const activeFilter = ref('Semua')

const categories = computed(() => [
  'Semua',
  ...new Set(props.projects.map((project) => project.category)),
])

const maxVisibleProjects = computed(() => Math.max(6, props.projects.length))

const filteredProjects = computed(() =>
  activeFilter.value === 'Semua'
    ? props.projects
    : props.projects.filter((project) => project.category === activeFilter.value)
)

const visibleProjects = computed(() => filteredProjects.value.slice(0, maxVisibleProjects.value))
</script>

<template>
  <section id="proyek" class="section-theme section-theme-projects section-spacing scroll-mt-24">
    <BaseContainer
      v-motion
      class="[--container-width:80rem]"
      :initial="{ opacity: 0, y: 14 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 360 } }"
    >
      <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-3xl space-y-4">
          <p class="section-eyebrow text-xs uppercase tracking-[0.28em]">Proyek Pilihan</p>
          <h2 class="font-display text-3xl text-white sm:text-4xl">
            Beberapa proyek ini menunjukkan cara saya memahami kebutuhan lalu menerjemahkannya
            menjadi hasil kerja yang jelas.
          </h2>
          <p class="section-muted max-w-2xl text-sm leading-7">
            Setiap proyek memperlihatkan konteks masalah, cara kerja yang dipilih, dan output yang
            dipakai untuk menjawab kebutuhan yang berbeda.
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
        class="section-content-gap grid gap-5 sm:auto-rows-fr sm:grid-cols-2 lg:grid-cols-4 xl:gap-6"
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
