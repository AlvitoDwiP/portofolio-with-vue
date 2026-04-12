<script setup>
import { ArrowRight, Sparkles } from 'lucide-vue-next'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import { siteConfig } from '@/data/site'
</script>

<template>
  <section class="relative overflow-hidden pb-16 pt-24 sm:pb-24 sm:pt-32">
    <BaseContainer>
      <div class="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 550 } }"
          class="space-y-8"
        >
          <div
            class="inline-flex items-center gap-2 rounded-full border border-brand-400/20 bg-brand-400/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-brand-200"
          >
            <Sparkles class="h-4 w-4" />
            <span>{{ siteConfig.eyebrow }}</span>
          </div>

          <div class="space-y-5">
            <h1
              class="max-w-4xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              {{ siteConfig.headline }}
            </h1>
            <p class="max-w-2xl text-base leading-8 text-textSecondary sm:text-lg">
              {{ siteConfig.summary }}
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <RouterLink
              :to="{ name: 'home', hash: '#proyek' }"
              class="section-button-primary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-[transform,background-color,border-color,color,box-shadow] duration-200 hover:-translate-y-0.5"
            >
              Explore projects
              <ArrowRight class="h-4 w-4" />
            </RouterLink>
            <a
              :href="`mailto:${siteConfig.email}`"
              class="section-button-secondary inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-[transform,background-color,border-color,color,box-shadow] duration-200 hover:-translate-y-0.5"
            >
              Start a conversation
            </a>
          </div>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 650, delay: 100 } }"
          class="glass glass-panel rounded-lg p-6"
        >
          <div class="mb-6 flex items-center justify-between">
            <div>
              <p class="font-display text-lg text-textPrimary">Ringkasan Fokus</p>
              <p class="mt-1 text-sm text-textSecondary">Area kerja yang paling relevan saat ini</p>
            </div>
            <div class="glass-chip rounded-full px-3 py-1 text-xs">v0</div>
          </div>

          <div class="space-y-4">
            <div class="glass-chip-strong rounded-card p-4">
              <p class="text-xs uppercase tracking-[0.24em] text-textMuted">Fokus Saat Ini</p>
              <p class="mt-2 text-sm leading-7 text-textSecondary">
                Analisis data, visualisasi insight, dan pengembangan aplikasi yang siap digunakan.
              </p>
            </div>

            <div class="glass-chip-strong rounded-card p-4">
              <p class="text-xs uppercase tracking-[0.24em] text-textMuted">Pendekatan</p>
              <p class="mt-2 text-sm leading-7 text-textSecondary">
                Sistem visual yang tenang, ritme yang rapi, dan alur konten yang mudah dipindai.
              </p>
            </div>

            <div class="flex flex-wrap gap-2 pt-2">
              <span
                v-for="item in siteConfig.stack"
                :key="item"
                class="glass-chip rounded-full px-3 py-2 text-xs"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
