<script setup>
import { computed, ref } from 'vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import BaseCard from '@/components/ui/BaseCard.vue'

const props = defineProps({
  certification: {
    type: Object,
    required: true,
  },
  attachment: {
    type: Boolean,
    default: false,
  },
})

const hasThumbnailError = ref(false)
const showThumbnail = computed(
  () => Boolean(props.certification.thumbnail) && !hasThumbnailError.value
)

const handleThumbnailError = () => {
  hasThumbnailError.value = true
}
</script>

<template>
  <BaseCard
    as="article"
    class="section-card-hover group flex h-full transform-gpu flex-col rounded-[20px] border-[color:var(--glass-border)] bg-[rgba(255,255,255,0.98)] p-5 shadow-[0_12px_26px_rgba(26,26,46,0.07),0_0_0_1px_rgba(221,227,240,0.82)] transition duration-300 hover:scale-[1.01] hover:border-[rgba(45,106,79,0.18)] hover:shadow-[0_20px_42px_rgba(26,26,46,0.1),0_0_0_1px_rgba(221,227,240,0.9)] sm:p-6"
  >
    <div
      v-if="attachment"
      class="flex h-full flex-col gap-5 md:flex-row md:items-end md:justify-between"
    >
      <div class="max-w-2xl space-y-3">
        <p class="section-eyebrow text-xs font-semibold uppercase tracking-[0.22em]">Lampiran</p>

        <div class="space-y-2">
          <h3 class="font-display text-2xl leading-tight text-text sm:text-[1.8rem]">
            {{ certification.title }}
          </h3>
          <p class="section-muted max-w-xl text-sm leading-7 sm:text-base">
            {{ certification.description }}
          </p>
        </div>
      </div>

      <a
        :href="certification.ctaUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="section-button-primary inline-flex min-h-11 items-center justify-center rounded-xl border px-4 py-2.5 text-sm font-medium transition-[transform,background-color,border-color,color,box-shadow] duration-200 hover:-translate-y-0.5 hover:scale-[1.01]"
      >
        {{ certification.ctaLabel }}
      </a>
    </div>

    <template v-else>
      <div class="flex items-start gap-4">
        <div
          class="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border text-[0.68rem] font-semibold uppercase tracking-[0.16em]"
          :class="
            showThumbnail
              ? 'border-[rgba(221,227,240,0.84)] bg-[rgba(255,255,255,0.92)] p-1.5 text-textPrimary'
              : 'border-[rgba(45,106,79,0.16)] bg-[rgba(216,243,220,0.82)] text-[#2D6A4F]'
          "
        >
          <img
            v-if="showThumbnail"
            :src="certification.thumbnail"
            :alt="certification.thumbnailAlt ?? certification.title"
            class="h-full w-full object-contain"
            loading="lazy"
            decoding="async"
            @error="handleThumbnailError"
          />
          <span v-else>{{ certification.badge }}</span>
        </div>

        <div class="min-w-0 space-y-2">
          <p class="section-muted text-[0.7rem] font-medium uppercase tracking-[0.2em]">
            {{ certification.provider }}
          </p>
          <h3 class="font-display text-lg leading-snug text-text sm:text-[1.15rem]">
            {{ certification.title }}
          </h3>
        </div>
      </div>

      <p class="section-muted mt-5 text-sm leading-7">
        {{ certification.description }}
      </p>

      <div v-if="certification.skills?.length" class="mt-5 flex flex-wrap gap-2">
        <BaseBadge
          v-for="skill in certification.skills"
          :key="skill"
          variant="accent"
          class="px-2.5 py-1 text-[0.68rem] tracking-[0.12em]"
        >
          {{ skill }}
        </BaseBadge>
      </div>
    </template>
  </BaseCard>
</template>
