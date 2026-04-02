import { computed } from 'vue'
import { projects } from '@/data/projects'

export function useProjects() {
  const allProjects = computed(() => projects)
  const findProjectBySlug = (slug) => projects.find((project) => project.slug === slug) ?? null

  return {
    allProjects,
    findProjectBySlug,
  }
}
