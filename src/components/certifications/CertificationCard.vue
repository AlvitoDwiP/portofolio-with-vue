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
    class="section-card-hover group flex h-full transform-gpu flex-col rounded-[20px] border-white/10 p-5 transition duration-300 hover:scale-[1.01] hover:border-white/20 hover:shadow-[0_18px_45px_rgba(15,23,42,0.34)] sm:p-6"
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
        class="section-button-primary inline-flex min-h-11 items-center justify-center rounded-xl border px-4 py-2.5 text-sm font-medium transition-[transform,background-color,border-color,color,box-shadow] duration-200 hover:-translate-y-0.5"
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
              ? 'border-white/15 bg-white p-1.5 text-slate-900'
              : 'border-white/10 bg-white/[0.06] text-white/80'
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
          variant="neutral"
          class="px-2.5 py-1 text-[0.68rem] tracking-[0.12em]"
        >
          {{ skill }}
        </BaseBadge>
      </div>
    </template>
  </BaseCard>
</template>
