<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <section v-if="items.length" class="space-y-7 sm:space-y-8">
    <div class="max-w-3xl space-y-3">
      <p class="case-study-kicker">Decision Value</p>
      <h2 class="case-study-heading">Impact</h2>
    </div>

    <div class="section-panel rounded-[1.75rem] p-6 sm:p-8">
      <div class="space-y-6">
        <div
          v-for="(item, index) in items"
          :key="`${item}-${index}`"
          class="grid gap-4 border-t border-white/8 pt-6 first:border-t-0 first:pt-0 sm:grid-cols-[3rem_minmax(0,1fr)]"
        >
          <div class="case-study-index pt-1 text-accent">
            {{ String(index + 1).padStart(2, '0') }}
          </div>
          <p class="case-study-body">
            {{ item }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
