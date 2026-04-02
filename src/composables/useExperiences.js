import { computed } from 'vue'
import { experiences } from '@/data/experiences'

export function useExperiences() {
  const allExperiences = computed(() => experiences)
  const findExperienceBySlug = (slug) =>
    experiences.find((experience) => experience.slug === slug) ?? null

  return {
    allExperiences,
    findExperienceBySlug,
  }
}
