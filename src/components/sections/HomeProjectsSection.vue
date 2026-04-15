<script setup>
import { computed, ref } from 'vue'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import ProjectPreviewModal from '@/components/projects/ProjectPreviewModal.vue'
import ProjectFilter from '@/components/projects/ProjectFilter.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'

const props = defineProps({
  projects: {
    type: Array,
    required: true,
  },
})

const activeFilter = ref('Semua')
const selectedProject = ref(null)

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

const openPreview = (project) => {
  selectedProject.value = project
}

const closePreview = () => {
  selectedProject.value = null
}
</script>

<template>
  <section
    id="proyek"
    class="section-theme section-theme-projects section-spacing scroll-mt-24 bg-[#EFE4D3]"
  >
    <BaseContainer
      v-motion
      class="[--container-width:80rem]"
      :initial="{ opacity: 0, y: 14 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 360 } }"
    >
      <div class="flex flex-col items-center gap-8">
        <div class="mx-auto max-w-3xl space-y-4 text-center">
          <p class="section-eyebrow text-xs uppercase tracking-[0.28em]">Proyek Saya</p>
          <h2 class="font-display text-3xl text-textPrimary sm:text-4xl">Karya Unggulan</h2>
          <p class="section-muted mx-auto max-w-2xl text-sm leading-7">
            Kumpulan proyek yang menunjukkan bagaimana saya menganalisis data, membangun sistem,
            dan menghasilkan solusi yang dapat digunakan.
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
        <ProjectCard
          v-for="project in visibleProjects"
          :key="project.slug"
          :project="project"
          @preview="openPreview"
        />
      </div>

      <div
        v-else
        class="glass glass-panel section-content-gap rounded-lg border-dashed p-6 text-center text-sm leading-8 text-textSecondary"
      >
        Belum ada proyek pada kategori ini.
      </div>
    </BaseContainer>

    <ProjectPreviewModal :project="selectedProject" @close="closePreview" />
  </section>
</template>
