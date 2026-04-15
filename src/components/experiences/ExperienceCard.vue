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

const mediaType = computed(() => {
  if (experience.value.mediaType) {
    return experience.value.mediaType
  }

  return experience.value.type === 'academic' ? 'activity' : 'certificate'
})

const mediaFit = computed(() => {
  if (experience.value.mediaFit) {
    return experience.value.mediaFit
  }

  return mediaType.value === 'activity' ? 'cover' : 'contain'
})

const isCertificateMedia = computed(() => mediaType.value === 'certificate')

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

const mediaFrameClass = computed(() => {
  if (isCertificateMedia.value) {
    return 'flex h-44 items-center justify-center bg-[radial-gradient(circle_at_top,rgba(220,233,226,0.2),transparent_56%),linear-gradient(180deg,rgba(251,246,238,0.98),rgba(239,228,211,0.96))] p-4 sm:h-48 sm:p-5'
  }

  return 'h-44 bg-[radial-gradient(circle_at_top_left,rgba(220,233,226,0.18),transparent_34%),linear-gradient(135deg,rgba(251,246,238,0.98),rgba(239,228,211,0.94)_46%,rgba(169,195,181,0.22))] sm:h-48'
})

const fallbackClass = computed(() => {
  if (isCertificateMedia.value) {
    return 'flex h-44 items-end bg-[radial-gradient(circle_at_top,rgba(220,233,226,0.22),transparent_44%),linear-gradient(180deg,rgba(251,246,238,0.98),rgba(239,228,211,0.96))] p-5 sm:h-48'
  }

  return 'flex h-44 items-end bg-[radial-gradient(circle_at_top,rgba(220,233,226,0.14),transparent_42%),linear-gradient(135deg,rgba(239,228,211,0.92),rgba(244,235,221,0.92)_45%,rgba(169,195,181,0.18))] p-5 sm:h-48'
})

const imageClass = computed(() => {
  const fitClass =
    mediaFit.value === 'cover'
      ? 'h-full w-full object-cover object-center'
      : 'h-full w-full object-contain object-center'

  const hoverClass = isCertificateMedia.value
    ? 'scale-[1.01] group-hover:scale-[1.03] group-hover:brightness-[1.05]'
    : 'group-hover:scale-[1.04] group-hover:brightness-[1.06]'

  return [fitClass, hoverClass, 'transition duration-500 ease-out']
})
</script>

<template>
  <RouterLink
    :to="{ name: 'experience-detail', params: { slug: experience.slug } }"
    class="glass glass-panel glass-hover group flex h-full transform-gpu flex-col overflow-hidden rounded-[1.5rem] border-[rgba(216,203,184,0.88)] bg-[rgba(251,246,238,0.98)] p-3 transition-[transform,box-shadow,border-color] duration-300 hover:scale-[1.02] hover:shadow-[0_22px_44px_rgba(46,42,38,0.1)] sm:p-3.5"
  >
    <div
      class="flex flex-1 flex-col overflow-hidden rounded-[1.2rem] border border-[color:var(--glass-border)] bg-[linear-gradient(135deg,rgba(239,228,211,0.72),rgba(251,246,238,0.92)_40%,rgba(169,195,181,0.2))]"
    >
      <div
        class="relative overflow-hidden border-b border-[color:var(--glass-border)] bg-[linear-gradient(180deg,rgba(251,246,238,0.92),rgba(239,228,211,0.96))]"
      >
        <div v-if="showImage" :class="mediaFrameClass">
          <div
            v-if="isCertificateMedia"
            class="flex h-full w-full items-center justify-center rounded-[1rem] border border-[rgba(216,203,184,0.78)] bg-[linear-gradient(180deg,rgba(251,246,238,0.8),rgba(239,228,211,0.92))] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_18px_34px_rgba(46,42,38,0.1)] backdrop-blur-sm sm:px-5 sm:py-4"
          >
            <img
              :src="experience.image"
              :alt="experience.imageAlt || experience.role"
              :class="imageClass"
              @error="hasImageError = true"
            />
          </div>

          <div v-else class="relative h-full w-full overflow-hidden rounded-[0.95rem]">
            <img
              :src="experience.image"
              :alt="experience.imageAlt || experience.role"
              :class="imageClass"
              @error="hasImageError = true"
            />
            <div
              class="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[rgba(31,92,76,0.18)] via-[rgba(239,228,211,0.08)] to-transparent opacity-90 transition duration-300 group-hover:opacity-100"
            />
          </div>
        </div>

        <div v-else :class="fallbackClass">
          <div
            class="inline-flex rounded-full border border-[rgba(31,92,76,0.16)] bg-[rgba(220,233,226,0.82)] px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-accent backdrop-blur-sm"
          >
            {{ badgeLabel }}
          </div>
        </div>

        <div
          :class="
            isCertificateMedia
              ? 'pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(251,246,238,0.18),rgba(239,228,211,0.08)_48%,rgba(31,92,76,0.14))]'
              : 'pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(251,246,238,0.12),rgba(239,228,211,0.08)_48%,rgba(31,92,76,0.14))]'
          "
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
          class="mt-4 font-display text-[1.28rem] leading-tight text-textPrimary transition-colors duration-200 group-hover:text-accent sm:text-[1.42rem]"
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

        <div class="mt-auto inline-flex items-center pt-6 text-sm font-medium text-accent">
          <span>Lihat Detail</span>
          <ArrowRight
            class="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </div>
  </RouterLink>
</template>
