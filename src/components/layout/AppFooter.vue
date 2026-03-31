<script setup>
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { siteConfig } from '@/data/site'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="relative z-10 border-t border-white/10">
    <BaseContainer
      class="flex flex-col gap-3 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between"
    >
      <p>{{ currentYear }} {{ siteConfig.name }}. Built for an intentional first commit.</p>
      <p class="text-xs uppercase tracking-[0.24em] text-slate-500">Vue 3 · Vite · Tailwind CSS</p>
    </BaseContainer>
  </footer>
</template>
