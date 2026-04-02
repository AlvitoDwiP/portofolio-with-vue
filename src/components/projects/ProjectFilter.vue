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
  <div class="flex flex-wrap gap-2.5">
    <button
      v-for="category in categories"
      :key="category"
      type="button"
      class="rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-150"
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
