<script setup>
import { ref } from 'vue'
import { ArrowLeft, ArrowUpRight } from 'lucide-vue-next'

defineProps({
  backTo: {
    type: Object,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  links: {
    type: Array,
    default: () => [],
  },
  coverImage: {
    type: String,
    default: '',
  },
  coverAlt: {
    type: String,
    default: '',
  },
})

const hasCoverError = ref(false)
</script>

<template>
  <section class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1120]">
    <img
      v-if="coverImage && !hasCoverError"
      :src="coverImage"
      :alt="coverAlt || title"
      class="absolute inset-0 h-full w-full object-cover"
      @error="hasCoverError = true"
    />

    <div
      v-else
      class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(15,23,42,0.86)_48%,rgba(2,6,23,0.96))]"
    />

    <div
      class="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92),rgba(2,6,23,0.78)_48%,rgba(2,6,23,0.56))]"
    />
    <div
      class="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.48),rgba(2,6,23,0.84))]"
    />

    <div class="relative z-10 px-6 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-12">
      <RouterLink
        :to="backTo"
        class="glass-chip glass-hover inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
      >
        <ArrowLeft class="h-4 w-4" />
        Kembali ke proyek
      </RouterLink>

      <div class="mt-10 max-w-3xl space-y-5 sm:space-y-6">
        <span
          class="section-chip-accent inline-flex items-center rounded-full px-4 py-2 text-[0.68rem] font-medium uppercase tracking-[0.22em]"
        >
          {{ category }}
        </span>

        <h1 class="font-display text-4xl leading-[1.02] text-textPrimary sm:text-5xl lg:text-6xl">
          {{ title }}
        </h1>

        <p class="max-w-2xl text-base leading-8 text-textSecondary sm:text-lg">
          {{ summary }}
        </p>
      </div>

      <div v-if="links.length" class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex min-h-11 items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold transition-[transform,background-color,border-color,color,box-shadow] duration-200 hover:-translate-y-0.5"
          :class="
            link.variant === 'primary' ? 'section-button-primary' : 'section-button-secondary'
          "
        >
          <span>{{ link.label }}</span>
          <ArrowUpRight class="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
</template>
