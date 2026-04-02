<script setup>
import { useHead } from '@vueuse/head'
import AppShell from '@/components/layout/AppShell.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import HomeAboutSection from '@/components/sections/HomeAboutSection.vue'
import HomeCertificationSection from '@/components/sections/HomeCertificationSection.vue'
import HomeContactSection from '@/components/sections/HomeContactSection.vue'
import HomeQuickProofSection from '@/components/sections/HomeQuickProofSection.vue'
import HomeProjectsSection from '@/components/sections/HomeProjectsSection.vue'
import { useProjects } from '@/composables/useProjects'
import { siteConfig } from '@/data/site'
import { createPageTitle } from '@/utils/createPageTitle'

const { allProjects } = useProjects()

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

    <HomeAboutSection />

    <HomeCertificationSection />

    <HomeContactSection />
  </AppShell>
</template>
