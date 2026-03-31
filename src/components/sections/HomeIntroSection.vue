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
            <p class="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {{ siteConfig.summary }}
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <RouterLink
              :to="{ name: 'home', hash: '#projects' }"
              class="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[0.99]"
            >
              Explore projects
              <ArrowRight class="h-4 w-4" />
            </RouterLink>
            <a
              :href="`mailto:${siteConfig.email}`"
              class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
            >
              Start a conversation
            </a>
          </div>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 650, delay: 100 } }"
          class="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-glow backdrop-blur"
        >
          <div class="mb-6 flex items-center justify-between">
            <div>
              <p class="font-display text-lg text-white">Foundation scope</p>
              <p class="mt-1 text-sm text-slate-400">What is already prepared in this commit</p>
            </div>
            <div class="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
              v0
            </div>
          </div>

          <div class="space-y-4">
            <div class="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <p class="text-xs uppercase tracking-[0.24em] text-slate-500">Ready now</p>
              <p class="mt-2 text-sm leading-7 text-slate-300">
                Home route, project detail route, reusable layout shell, and static project data
                structure.
              </p>
            </div>

            <div class="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
              <p class="text-xs uppercase tracking-[0.24em] text-slate-500">Direction</p>
              <p class="mt-2 text-sm leading-7 text-slate-300">
                Dark-first styling with premium spacing, subtle grid texture, and room for final
                sections later.
              </p>
            </div>

            <div class="flex flex-wrap gap-2 pt-2">
              <span
                v-for="item in siteConfig.stack"
                :key="item"
                class="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300"
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
