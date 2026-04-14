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
  <div v-bind="$attrs" class="space-y-5">
    <p v-if="eyebrow" class="section-eyebrow text-xs font-medium uppercase tracking-[0.18em]">
      {{ eyebrow }}
    </p>

    <component :is="titleTag" class="font-display text-3xl leading-tight text-text sm:text-4xl">
      {{ title }}
    </component>

    <p
      v-if="description"
      class="section-muted max-w-2xl whitespace-pre-line text-sm leading-8 sm:text-base"
    >
      {{ description }}
    </p>
  </div>
</template>
