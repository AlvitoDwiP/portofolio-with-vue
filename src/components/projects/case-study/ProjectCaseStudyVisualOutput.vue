<script setup>
import { ref } from 'vue'
import { ArrowUpRight } from 'lucide-vue-next'

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})

const failedImages = ref({})

const markImageFailed = (index) => {
  failedImages.value[index] = true
}
</script>

<template>
  <section v-if="items.length" class="space-y-7 sm:space-y-8">
    <div class="max-w-3xl space-y-3">
      <p class="case-study-kicker">Proof Of Work</p>
      <h2 class="case-study-heading">Output</h2>
    </div>

    <div class="grid gap-6 lg:grid-cols-2">
      <article
        v-for="(item, index) in items"
        :key="`${item.title}-${index}`"
        class="section-panel flex h-full flex-col overflow-hidden rounded-[1.75rem]"
      >
        <div class="relative min-h-[15rem] border-b border-white/8 bg-[#0d1320]">
          <img
            v-if="item.image && !failedImages[index]"
            :src="item.image"
            :alt="item.imageAlt || item.title"
            class="absolute inset-0 h-full w-full object-cover"
            @error="markImageFailed(index)"
          />

          <div
            v-else-if="item.previewType === 'dashboard'"
            class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.96),rgba(15,23,42,0.84)_48%,rgba(2,6,23,0.96))]"
          />

          <div
            v-else
            class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_34%),linear-gradient(135deg,rgba(30,41,59,0.94),rgba(15,23,42,0.88)_50%,rgba(2,6,23,0.96))]"
          />

          <div
            class="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.1),rgba(2,6,23,0.74))]"
          />

          <div class="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
            <p class="case-study-kicker">
              {{ item.label }}
            </p>
            <h3 class="case-study-subheading mt-3">
              {{ item.title }}
            </h3>
          </div>
        </div>

        <div class="flex flex-1 flex-col p-6 sm:p-7">
          <p class="text-sm leading-7 text-textSecondary">
            {{ item.description }}
          </p>

          <div class="mt-auto pt-6">
            <a
              :href="item.href"
              target="_blank"
              rel="noopener noreferrer"
              class="section-button-secondary inline-flex items-center rounded-xl border px-4 py-2.5 text-sm font-semibold transition-[transform,background-color,border-color,color,box-shadow] duration-200 hover:-translate-y-0.5"
            >
              <span>{{ item.ctaLabel || 'View Output' }}</span>
              <ArrowUpRight class="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
