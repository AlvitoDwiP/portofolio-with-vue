<script setup>
import { computed } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
  type: {
    type: String,
    default: 'button',
  },
})

const buttonClass = computed(() => {
  const baseClass =
    'inline-flex items-center justify-center rounded-xl border px-4 py-2.5 text-sm font-medium transition-[transform,background-color,border-color,color,box-shadow] duration-200 focus:outline-none hover:-translate-y-0.5'

  const variants = {
    primary: 'border-accent bg-accent text-canvas hover:bg-brand-400',
    secondary: 'border-text-muted/10 bg-surface text-text hover:border-text-muted/20',
  }

  return [baseClass, variants[props.variant] ?? variants.primary]
})
</script>

<template>
  <button v-bind="$attrs" :type="type" :class="buttonClass">
    <slot />
  </button>
</template>
