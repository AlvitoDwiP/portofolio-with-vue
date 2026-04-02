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
      class="rounded-full border px-3.5 py-2 text-sm font-medium transition-[transform,background-color,border-color,color] duration-150 hover:-translate-y-0.5 sm:px-4"
      :class="
        activeCategory === category
          ? 'border-accent bg-accent text-canvas'
          : 'border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:text-white'
      "
      @click="$emit('change', category)"
    >
      {{ category }}
    </button>
  </div>
</template>
