<script setup>
import BaseContainer from '@/components/ui/BaseContainer.vue'
</script>

<template>
  <section id="quick-proof" class="scroll-mt-24 pb-20 sm:pb-24">
    <BaseContainer>
      <div
        v-motion
        :initial="{ opacity: 0, y: 14 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 380, delay: 140 } }"
        class="max-w-3xl"
      >
        <div class="mb-5 sm:mb-6">
          <p class="text-xs font-medium uppercase tracking-[0.22em] text-text-muted">Edukasi</p>
        </div>

        <article
          class="rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-5 py-5 sm:px-6 sm:py-6"
        >
          <p class="text-xs font-medium uppercase tracking-[0.2em] text-text-muted">
            2021 — 2026
          </p>

          <h2 class="mt-3 font-display text-2xl leading-tight text-white sm:text-[1.9rem]">
            Sarjana Komputer (S.Kom) 
          </h2>

          <p class="mt-2 text-sm leading-7 text-slate-400 sm:text-base">Universitas Jember Fakultas Ilmu Komputer</p>

          <div
            class="mt-5 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent"
          >
            IPK 3.76 / 4.00
          </div>
        </article>
      </div>
    </BaseContainer>
  </section>
</template>
