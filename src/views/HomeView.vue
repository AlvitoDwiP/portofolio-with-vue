<script setup>
import { useHead } from '@vueuse/head'
import AppShell from '@/components/layout/AppShell.vue'
import HomeIntroSection from '@/components/sections/HomeIntroSection.vue'
import HomeProjectsSection from '@/components/sections/HomeProjectsSection.vue'
import { useProjects } from '@/composables/useProjects'
import { siteConfig } from '@/data/site'
import { createPageTitle } from '@/utils/createPageTitle'

const { featuredProjects } = useProjects()

useHead({
  title: createPageTitle('Portfolio'),
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
    <HomeIntroSection />
    <HomeProjectsSection :projects="featuredProjects" />
  </AppShell>
</template>
