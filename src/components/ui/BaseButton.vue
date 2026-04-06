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
    'inline-flex cursor-pointer items-center justify-center rounded-xl border px-4 py-2.5 text-sm font-medium transition-[transform,background-color,border-color,color,box-shadow] duration-200 focus:outline-none hover:-translate-y-0.5'

  const variants = {
    primary: 'section-button-primary',
    secondary: 'section-button-secondary',
  }

  return [baseClass, variants[props.variant] ?? variants.primary]
})
</script>

<template>
  <button v-bind="$attrs" :type="type" :class="buttonClass">
    <slot />
  </button>
</template>
