<script setup>
const isGenericTitle = (title = '') => /^problem\s+\d+$/i.test(title.trim())

const hasExplicitTitle = (item) => Boolean(item?.title && !isGenericTitle(item.title))

const getDisplayTitle = (item) => (hasExplicitTitle(item) ? item.title : '')

const getDisplayDescription = (item) =>
  hasExplicitTitle(item) ? item?.description : item?.description || item?.title || ''

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
      <p class="case-study-kicker">Pokok Masalah</p>
      <h2 class="case-study-heading">Problem</h2>
    </div>

    <div class="grid gap-5 lg:grid-cols-3">
      <article
        v-for="(item, index) in items"
        :key="`${item.title}-${index}`"
        class="section-panel flex h-full flex-col rounded-[1.5rem] p-6 sm:p-7"
      >
        <p class="case-study-index">{{ String(index + 1).padStart(2, '0') }}</p>

        <div class="mt-5 space-y-3">
          <h3 v-if="getDisplayTitle(item)" class="case-study-subheading">
            {{ getDisplayTitle(item) }}
          </h3>
          <p
            v-if="getDisplayDescription(item)"
            class="text-sm leading-7 text-textSecondary"
            :class="getDisplayTitle(item) ? '' : 'font-medium text-textPrimary'"
          >
            {{ getDisplayDescription(item) }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>
