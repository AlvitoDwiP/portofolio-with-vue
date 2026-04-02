<script setup>
import BaseContainer from '@/components/ui/BaseContainer.vue'
</script>

<template>
  <section id="quick-proof" class="section-theme section-theme-proof section-spacing scroll-mt-24">
    <BaseContainer>
      <div
        v-motion
        :initial="{ opacity: 0, y: 14 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 380, delay: 140 } }"
        class="max-w-3xl space-y-10 sm:space-y-12"
      >
        <div>
          <p class="section-eyebrow text-xs font-medium uppercase tracking-[0.22em]">Edukasi</p>
        </div>

        <article
          class="section-panel section-card-hover rounded-[1.75rem] px-5 py-5 sm:px-6 sm:py-6"
        >
          <p class="section-muted text-xs font-medium uppercase tracking-[0.2em]">2021 — 2026</p>

          <h2 class="mt-3 font-display text-2xl leading-tight text-white sm:text-[1.9rem]">
            Sarjana Komputer (S.Kom)
          </h2>

          <p class="section-muted mt-2 text-sm leading-7 sm:text-base">
            Universitas Jember Fakultas Ilmu Komputer
          </p>

          <div
            class="section-chip-accent mt-5 inline-flex items-center rounded-full px-4 py-2 text-sm font-medium"
          >
            IPK 3.76 / 4.00
          </div>
        </article>
      </div>
    </BaseContainer>
  </section>
</template>
