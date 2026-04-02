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
    class="section-panel section-card-hover group flex h-full min-h-[17rem] transform-gpu flex-col rounded-[1.75rem] p-5 sm:p-6"
  >
    <div
      class="flex flex-1 flex-col rounded-[1.4rem] bg-[linear-gradient(135deg,rgba(251,191,36,0.08),rgba(251,146,60,0.04)_40%,rgba(168,85,247,0.1))] p-4 sm:p-5"
    >
      <div class="flex items-start justify-between gap-4">
        <BaseBadge variant="accent" class="px-3 py-1 text-[0.68rem] uppercase tracking-[0.16em]">
          {{ experience.category }}
        </BaseBadge>

        <p
          v-if="experience.period"
          class="section-muted max-w-[9rem] text-right text-[0.68rem] uppercase tracking-[0.16em]"
        >
          {{ experience.period }}
        </p>
      </div>

      <h3
        class="mt-5 font-display text-[1.35rem] leading-tight text-white transition-colors duration-150 group-hover:text-white/90 sm:text-[1.5rem]"
      >
        {{ experience.role }}
      </h3>

      <p class="mt-3 text-sm font-medium text-slate-200 sm:text-[0.95rem]">
        {{ experience.company }}
      </p>

      <p
        v-if="experience.location"
        class="section-muted mt-2 inline-flex items-center gap-2 text-sm"
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
