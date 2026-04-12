<script setup>
defineProps({
  title: {
    type: String,
    default: 'Why This Matters',
  },
  paragraphs: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section class="space-y-7 sm:space-y-8">
    <div class="max-w-3xl space-y-3">
      <p class="case-study-kicker">{{ title }}</p>
      <h2 class="case-study-heading">Context</h2>
    </div>

    <div class="grid gap-6 lg:grid-cols-2 lg:gap-8">
      <div v-for="paragraph in paragraphs" :key="paragraph" class="border-t border-white/10 pt-6">
        <p class="case-study-body">{{ paragraph }}</p>
      </div>
    </div>
  </section>
</template>
