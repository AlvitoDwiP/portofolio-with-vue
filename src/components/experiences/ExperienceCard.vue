<script setup>
import { ArrowRight, MapPin } from 'lucide-vue-next'
import BaseBadge from '@/components/ui/BaseBadge.vue'

defineProps({
  experience: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <RouterLink
    :to="{ name: 'experience-detail', params: { slug: experience.slug } }"
    class="group flex h-full min-h-[17rem] transform-gpu flex-col rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 transition-[transform,border-color,background-color] duration-200 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.05] sm:p-6"
  >
    <div
      class="flex flex-1 flex-col rounded-[1.4rem] bg-[radial-gradient(circle_at_top,rgba(200,155,96,0.12),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-4 sm:p-5"
    >
      <div class="flex items-start justify-between gap-4">
        <BaseBadge
          variant="accent"
          class="px-3 py-1 text-[0.68rem] uppercase tracking-[0.16em]"
        >
          {{ experience.category }}
        </BaseBadge>

        <p
          v-if="experience.period"
          class="max-w-[9rem] text-right text-[0.68rem] uppercase tracking-[0.16em] text-slate-400"
        >
          {{ experience.period }}
        </p>
      </div>

      <h3
        class="mt-5 font-display text-[1.35rem] leading-tight text-white transition-colors duration-150 group-hover:text-brand-100 sm:text-[1.5rem]"
      >
        {{ experience.role }}
      </h3>

      <p class="mt-3 text-sm font-medium text-slate-200 sm:text-[0.95rem]">
        {{ experience.company }}
      </p>

      <p
        v-if="experience.location"
        class="mt-2 inline-flex items-center gap-2 text-sm text-slate-400"
      >
        <MapPin class="h-4 w-4" />
        <span>{{ experience.location }}</span>
      </p>

      <div class="mt-auto pt-6 inline-flex items-center text-sm font-medium text-slate-100">
        <span>Lihat Detail</span>
        <ArrowRight
          class="ml-2 h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5"
        />
      </div>
    </div>
  </RouterLink>
</template>
