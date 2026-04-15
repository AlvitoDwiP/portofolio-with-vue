<script setup>
import { computed, ref } from 'vue'
import { ArrowRight, MapPin } from 'lucide-vue-next'
import BaseBadge from '@/components/ui/BaseBadge.vue'

const props = defineProps({
  experience: {
    type: Object,
    required: true,
  },
})

const experience = computed(() => props.experience)
const hasImageError = ref(false)

const badgeLabel = computed(() => {
  if (experience.value.type === 'mbkm') {
    return 'MBKM'
  }

  if (experience.value.type === 'academic') {
    return 'ACADEMIC'
  }

  return 'INTERNSHIP'
})

const showImage = computed(() => Boolean(experience.value.image) && !hasImageError.value)
</script>

<template>
  <RouterLink
    :to="{ name: 'experience-detail', params: { slug: experience.slug } }"
    class="glass glass-panel glass-hover group flex h-full transform-gpu flex-col overflow-hidden rounded-[1.5rem] p-3 transition-[transform,box-shadow,border-color] duration-300 hover:scale-[1.02] hover:shadow-[0_22px_44px_rgba(2,6,23,0.24)] sm:p-3.5"
  >
    <div
      class="flex flex-1 flex-col overflow-hidden rounded-[1.2rem] border border-[color:var(--glass-border)] bg-[linear-gradient(135deg,rgba(251,191,36,0.08),rgba(251,146,60,0.04)_40%,rgba(168,85,247,0.1))]"
    >
      <div
        class="relative overflow-hidden border-b border-[color:var(--glass-border)] bg-[linear-gradient(180deg,rgba(15,23,42,0.24),rgba(2,6,23,0.36))]"
      >
        <div
          v-if="showImage"
          class="flex h-44 items-center justify-center bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(15,23,42,0.12))] p-3 sm:h-48 sm:p-4"
        >
          <img
            :src="experience.image"
            :alt="experience.imageAlt || experience.role"
            class="max-h-full w-full object-contain object-center transition duration-500 ease-out group-hover:scale-[1.02] group-hover:brightness-105"
            @error="hasImageError = true"
          />
        </div>

        <div
          v-else
          class="flex h-44 items-end bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.16),transparent_42%),linear-gradient(135deg,rgba(251,191,36,0.16),rgba(251,146,60,0.06)_45%,rgba(168,85,247,0.14))] p-5 sm:h-48"
        >
          <div
            class="inline-flex rounded-full border border-white/10 bg-slate-950/44 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/88 backdrop-blur-sm"
          >
            {{ badgeLabel }}
          </div>
        </div>

        <div
          class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.02),rgba(2,6,23,0.08)_48%,rgba(2,6,23,0.36))]"
        />
      </div>

      <div class="flex flex-1 flex-col p-4 sm:p-5">
        <BaseBadge
          variant="accent"
          class="w-fit px-3 py-1 text-[0.68rem] uppercase tracking-[0.16em]"
        >
          {{ badgeLabel }}
        </BaseBadge>

        <h3
          class="mt-4 font-display text-[1.28rem] leading-tight text-white transition-colors duration-200 group-hover:text-white/92 sm:text-[1.42rem]"
        >
          {{ experience.role }}
        </h3>

        <p class="mt-3 text-sm font-medium text-textPrimary sm:text-[0.95rem]">
          {{ experience.company }}
        </p>

        <p
          v-if="experience.location"
          class="section-muted mt-2 inline-flex items-center gap-2 text-sm"
        >
          <MapPin class="h-4 w-4" />
          <span>{{ experience.location }}</span>
        </p>

        <div class="mt-auto inline-flex items-center pt-6 text-sm font-medium text-textPrimary">
          <span>Lihat Detail</span>
          <ArrowRight
            class="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </div>
  </RouterLink>
</template>
