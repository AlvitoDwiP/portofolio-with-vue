<script setup>
defineProps({
  categories: {
    type: Array,
    required: true,
  },
  activeCategory: {
    type: String,
    required: true,
  },
})

defineEmits(['change'])
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <button
      v-for="category in categories"
      :key="category"
      type="button"
      class="rounded-full border px-3.5 py-2 text-sm font-medium transition-[transform,background-color,border-color,color,box-shadow] duration-200 hover:-translate-y-0.5 sm:px-4"
      :class="
        activeCategory === category
          ? 'section-chip-accent'
          : 'glass-chip hover:border-[color:var(--glass-hover-border)] hover:text-textPrimary'
      "
      @click="$emit('change', category)"
    >
      {{ category }}
    </button>
  </div>
</template>
