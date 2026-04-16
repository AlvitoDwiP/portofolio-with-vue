<script setup>
const isGenericTitle = (title = '') => /^step\s+\d+$/i.test(title.trim())

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
      <p class="case-study-kicker">Cara Kerja</p>
      <h2 class="case-study-heading">Approach</h2>
    </div>

    <div class="space-y-5">
      <article
        v-for="(item, index) in items"
        :key="`${item.title}-${index}`"
        class="grid gap-4 border-t border-[rgba(221,227,240,0.82)] py-6 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-8"
      >
        <div class="case-study-index pt-1">
          {{ String(index + 1).padStart(2, '0') }}
        </div>

        <div class="space-y-3">
          <h3 class="case-study-subheading">
            {{ getDisplayTitle(item) }}
          </h3>
          <p
            v-if="getDisplayDescription(item)"
            class="case-study-copy max-w-3xl text-base leading-8 text-textSecondary"
          >
            {{ getDisplayDescription(item) }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>
