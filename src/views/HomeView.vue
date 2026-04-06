<script setup>
import { useHead } from '@vueuse/head'
import AppShell from '@/components/layout/AppShell.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import HomeAboutSection from '@/components/sections/HomeAboutSection.vue'
import CertificationSection from '@/components/sections/CertificationSection.vue'
import HomeContactSection from '@/components/sections/HomeContactSection.vue'
import HomeExperienceSection from '@/components/sections/HomeExperienceSection.vue'
import HomeQuickProofSection from '@/components/sections/HomeQuickProofSection.vue'
import HomeProjectsSection from '@/components/sections/HomeProjectsSection.vue'
import { useExperiences } from '@/composables/useExperiences'
import { useProjects } from '@/composables/useProjects'
import { siteConfig } from '@/data/site'
import { createPageTitle } from '@/utils/createPageTitle'

const { allProjects } = useProjects()
const { allExperiences } = useExperiences()

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

    <HomeProjectsSection :projects="allProjects" />

    <HomeExperienceSection :experiences="allExperiences" />

    <HomeAboutSection />

    <CertificationSection />

    <HomeContactSection />
  </AppShell>
</template>
