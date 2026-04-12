<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  summary: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <section v-if="items.length || summary" class="space-y-7 sm:space-y-8">
    <div class="max-w-3xl space-y-3">
      <p class="case-study-kicker">Fast Read</p>
      <h2 class="case-study-heading">Insights</h2>
    </div>

    <div class="section-panel rounded-[1.75rem] p-6 sm:p-8">
      <p class="case-study-kicker">Core Reading</p>
      <p class="mt-5 max-w-4xl text-lg leading-8 text-textPrimary sm:text-[1.24rem]">
        {{ summary }}
      </p>
    </div>

    <div class="grid gap-5 lg:grid-cols-3">
      <article
        v-for="(item, index) in items"
        :key="`${item.title}-${index}`"
        class="rounded-[1.5rem] border border-white/8 bg-white/[0.02] p-6 sm:p-7"
      >
        <p class="case-study-kicker text-accent">
          {{ item.eyebrow }}
        </p>
        <h3 class="case-study-subheading mt-5">
          {{ item.title }}
        </h3>
        <p class="mt-3 text-sm leading-7 text-textSecondary">
          {{ item.description }}
        </p>
        <p class="mt-5 border-t border-white/8 pt-5 text-sm leading-7 text-textPrimary">
          {{ item.implication }}
        </p>
      </article>
    </div>
  </section>
</template>
