<script setup>
defineProps({
  title: {
    type: String,
    default: 'Why This Matters',
  },
  paragraph: {
    type: String,
    default: '',
  },
  variant: {
    type: String,
    default: 'compact',
  },
})
</script>

<template>
  <section class="space-y-7 sm:space-y-8">
    <div class="max-w-3xl space-y-3">
      <p class="case-study-kicker">{{ title }}</p>
      <h2 class="case-study-heading">Context</h2>
    </div>

    <div
      class="border-t border-white/10 pt-6"
      :class="variant === 'wide' ? 'max-w-[58rem]' : 'max-w-[49rem]'"
    >
      <p class="case-study-body case-study-copy leading-[2.1rem] sm:text-[1.04rem]">
        {{ paragraph }}
      </p>
    </div>
  </section>
</template>
