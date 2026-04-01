<script setup>
import { BarChart3, Code2, FileText, LayoutDashboard } from 'lucide-vue-next'
import BaseContainer from '@/components/ui/BaseContainer.vue'

const proofItems = [
  {
    label: 'Analisis Data',
    icon: BarChart3,
  },
  {
    label: 'Dashboard Interaktif',
    icon: LayoutDashboard,
  },
  {
    label: 'Aplikasi Web',
    icon: Code2,
  },
  {
    label: 'Studi Kasus Nyata',
    icon: FileText,
  },
]
</script>

<template>
  <section class="pb-20 sm:pb-24">
    <BaseContainer>
      <div
        v-motion
        :initial="{ opacity: 0, y: 14 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 380, delay: 140 } }"
      >
        <div class="mb-5 flex flex-col gap-3 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
          <p class="text-xs font-medium uppercase tracking-[0.22em] text-text-muted">
            Sekilas Bukti Kerja
          </p>
          <p class="max-w-2xl text-sm leading-7 text-text-muted">
            Output utama yang saya kerjakan, dari data sampai implementasi.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-3 min-[520px]:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="(item, index) in proofItems"
            :key="item.label"
            v-motion
            :initial="{ opacity: 0, y: 10 }"
            :enter="{
              opacity: 1,
              y: 0,
              transition: { duration: 320, delay: 190 + index * 60 },
            }"
            class="flex items-center gap-3 rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-4 py-4 transition-colors duration-150 hover:border-white/15 hover:bg-white/[0.04]"
          >
            <div
              class="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-slate-950/70 text-accent"
            >
              <component :is="item.icon" class="h-4 w-4" />
            </div>

            <p class="text-sm font-medium text-text">
              {{ item.label }}
            </p>
          </article>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>
