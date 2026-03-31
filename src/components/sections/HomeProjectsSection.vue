<script setup>
import ProjectCard from '@/components/project/ProjectCard.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'

defineProps({
  projects: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section id="projects" class="pb-24 sm:pb-32">
    <BaseContainer>
      <div class="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div class="max-w-2xl space-y-3">
          <p class="text-xs uppercase tracking-[0.28em] text-brand-200">Selected work</p>
          <h2 class="font-display text-3xl text-white sm:text-4xl">
            Project cards are ready before the final case studies are.
          </h2>
        </div>
        <p class="max-w-md text-sm leading-7 text-slate-400">
          Semua data project masih berasal dari frontend agar fondasi commit pertama tetap ringan
          dan mudah diubah.
        </p>
      </div>

      <div class="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
      </div>
    </BaseContainer>
  </section>
</template>
