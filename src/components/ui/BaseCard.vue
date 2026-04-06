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
  <component :is="as" v-bind="$attrs" class="glass glass-panel p-6">
    <slot />
  </component>
</template>
