<script setup>
import { ArrowUpRight, Github } from 'lucide-vue-next'

defineProps({
  tools: {
    type: Array,
    default: () => [],
  },
  output: {
    type: String,
    default: '',
  },
  links: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <aside v-if="tools.length || output || links.length" class="xl:sticky xl:top-28 xl:self-start">
    <div class="rounded-[1.5rem] border border-white/8 bg-white/[0.02] p-5 sm:p-6">
      <section v-if="output" class="space-y-3">
        <p class="case-study-kicker">Summary</p>
        <h2 class="font-display text-[1.35rem] leading-tight text-textPrimary">Output</h2>
        <p class="text-sm leading-7 text-textSecondary">
          {{ output }}
        </p>
      </section>

      <section v-if="tools.length" class="mt-6 border-t border-white/8 pt-6">
        <h2 class="font-display text-[1.2rem] leading-tight text-textPrimary">Tools</h2>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="item in tools"
            :key="item"
            class="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[0.72rem] text-textSecondary"
          >
            {{ item }}
          </span>
        </div>
      </section>

      <section v-if="links.length" class="mt-6 border-t border-white/8 pt-6">
        <h2 class="font-display text-[1.2rem] leading-tight text-textPrimary">Links</h2>
        <div class="mt-4 flex flex-col gap-3">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-textPrimary transition duration-200 hover:border-white/15 hover:bg-white/[0.05]"
          >
            <span>{{ link.label }}</span>
            <Github v-if="link.kind === 'github'" class="h-4 w-4" />
            <ArrowUpRight v-else class="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  </aside>
</template>
