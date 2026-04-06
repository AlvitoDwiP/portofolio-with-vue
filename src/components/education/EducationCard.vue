<script setup>
import unejLogo from '@/assets/images/education/unej-logo.png'
</script>

<template>
  <article
    class="section-panel section-card-hover group relative overflow-hidden rounded-lg px-5 py-5 sm:px-6 sm:py-6"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0b1120]/60"
    />

    <img
      :src="unejLogo"
      alt="Universitas Jember"
      class="pointer-events-none absolute right-2 top-1/2 w-24 -translate-y-1/2 select-none object-contain opacity-[0.50] transition-opacity duration-200 group-hover:opacity-[0.90] sm:right-4 sm:w-40 lg:w-44"
      loading="lazy"
      decoding="async"
    />

    <div class="relative z-10 pr-16 sm:pr-24 lg:pr-32">
      <p class="section-muted text-xs font-medium uppercase tracking-[0.2em]">2021 — 2026</p>

      <h2 class="mt-3 font-display text-2xl leading-tight text-white sm:text-[1.9rem]">
        Sarjana Komputer (S.Kom)
      </h2>

      <p class="section-muted mt-2 max-w-xl text-sm leading-7 sm:text-base">
      Prodi Teknologi Informasi Fakultas Ilmu Komputer 
      </p>

      <p class="section-muted mt-2 max-w-xl text-sm leading-7 sm:text-base">
        UNIVERSITAS JEMBER
      </p>

      <div
        class="section-chip-accent mt-5 inline-flex items-center rounded-full px-4 py-2 text-sm font-medium"
      >
        IPK 3.76 / 4.00
      </div>
    </div>
  </article>
</template>
