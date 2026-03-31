<script setup>
import { MoonStar } from 'lucide-vue-next'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { siteConfig } from '@/data/site'
</script>

<template>
  <header class="sticky top-0 z-30 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
    <BaseContainer class="flex h-20 items-center justify-between gap-4">
      <RouterLink to="/" class="flex items-center gap-3">
        <span
          class="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-400/30 bg-brand-400/10 font-display text-sm font-semibold text-brand-200 shadow-glow"
        >
          YN
        </span>
        <div class="space-y-1">
          <p class="font-display text-sm uppercase tracking-[0.32em] text-slate-300">
            {{ siteConfig.name }}
          </p>
          <p class="text-xs text-slate-500">{{ siteConfig.role }}</p>
        </div>
      </RouterLink>

      <nav class="hidden items-center gap-6 text-sm text-slate-300 md:flex">
        <RouterLink :to="{ name: 'home', hash: '#projects' }" class="transition hover:text-white">
          Projects
        </RouterLink>
        <a :href="`mailto:${siteConfig.email}`" class="transition hover:text-white">Contact</a>
      </nav>

      <div
        class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.24em] text-slate-300"
      >
        <MoonStar class="h-4 w-4 text-brand-300" />
        <span>Dark</span>
      </div>
    </BaseContainer>
  </header>
</template>
