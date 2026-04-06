<script setup>
import { computed } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  variant: {
    type: String,
    default: 'neutral',
  },
})

const badgeClass = computed(() => {
  const baseClass =
    'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium tracking-[0.08em]'

  const variants = {
    neutral: 'glass-chip',
    accent: 'section-chip-accent',
  }

  return [baseClass, variants[props.variant] ?? variants.neutral]
})
</script>

<template>
  <span v-bind="$attrs" :class="badgeClass">
    <slot />
  </span>
</template>
