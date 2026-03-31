<script setup>
defineOptions({
  inheritAttrs: false,
})

defineProps({
  eyebrow: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  titleTag: {
    type: String,
    default: 'h2',
  },
})
</script>

<template>
  <div v-bind="$attrs" class="space-y-3">
    <p v-if="eyebrow" class="text-xs font-medium uppercase tracking-[0.18em] text-accent">
      {{ eyebrow }}
    </p>

    <component :is="titleTag" class="font-display text-3xl leading-tight text-text sm:text-4xl">
      {{ title }}
    </component>

    <p v-if="description" class="max-w-2xl text-sm leading-7 text-text-muted sm:text-base">
      {{ description }}
    </p>
  </div>
</template>
