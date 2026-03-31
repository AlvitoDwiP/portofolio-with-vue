<script setup>
defineOptions({
  inheritAttrs: false,
})

defineProps({
  as: {
    type: String,
    default: 'div',
  },
})
</script>

<template>
  <component
    :is="as"
    v-bind="$attrs"
    class="rounded-2xl border border-text-muted/10 bg-surface p-6 shadow-glow"
  >
    <slot />
  </component>
</template>
