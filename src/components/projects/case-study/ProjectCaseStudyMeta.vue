<script setup>
defineProps({
  tools: {
    type: Array,
    default: () => [],
  },
  output: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <aside v-if="tools.length || output" class="xl:sticky xl:top-28 xl:self-start">
    <div class="rounded-[1.5rem] border border-[rgba(221,227,240,0.88)] bg-[rgba(255,255,255,0.94)] p-5 sm:p-6 shadow-[0_12px_28px_rgba(26,26,46,0.08)]">
      <section v-if="output" class="space-y-3">
        <p class="case-study-kicker">Ringkas</p>
        <h2 class="font-display text-[1.35rem] leading-tight text-textPrimary">Output</h2>
        <p class="case-study-copy text-sm leading-7 text-textSecondary">
          {{ output }}
        </p>
      </section>

      <section v-if="tools.length" class="mt-6 border-t border-[rgba(221,227,240,0.82)] pt-6">
        <h2 class="font-display text-[1.2rem] leading-tight text-textPrimary">Tools</h2>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="item in tools"
            :key="item"
            class="rounded-full border border-[rgba(45,106,79,0.16)] bg-[rgba(216,243,220,0.82)] px-3 py-1.5 text-[0.72rem] text-textSecondary"
          >
            {{ item }}
          </span>
        </div>
      </section>
    </div>
  </aside>
</template>
