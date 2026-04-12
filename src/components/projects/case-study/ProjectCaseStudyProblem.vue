<script setup>
const isGenericTitle = (title = '') => /^problem\s+\d+$/i.test(title.trim())

const getDisplayTitle = (item) =>
  !item?.title || isGenericTitle(item?.title) ? item?.description : item?.title

const getDisplayDescription = (item) =>
  !item?.title || isGenericTitle(item?.title) ? '' : item?.description

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
      <p class="case-study-kicker">Core Tensions</p>
      <h2 class="case-study-heading">Problem</h2>
    </div>

    <div class="grid gap-5 lg:grid-cols-3">
      <article
        v-for="(item, index) in items"
        :key="`${item.title}-${index}`"
        class="section-panel rounded-[1.5rem] p-6 sm:p-7"
      >
        <p class="case-study-index">{{ String(index + 1).padStart(2, '0') }}</p>
        <h3 class="case-study-subheading mt-5">
          {{ getDisplayTitle(item) }}
        </h3>
        <p v-if="getDisplayDescription(item)" class="mt-3 text-sm leading-7 text-textSecondary">
          {{ getDisplayDescription(item) }}
        </p>
        <p class="mt-5 border-t border-white/8 pt-5 text-sm leading-7 text-textPrimary">
          {{ item.implication }}
        </p>
      </article>
    </div>
  </section>
</template>
