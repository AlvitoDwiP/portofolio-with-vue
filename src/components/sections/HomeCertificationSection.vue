<script setup>
import BaseContainer from '@/components/ui/BaseContainer.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { certifications } from '@/data/certifications'
</script>

<template>
  <section id="sertifikasi" class="scroll-mt-24 pb-20 sm:pb-24">
    <BaseContainer>
      <SectionHeader
        eyebrow="Sertifikasi"
        title="Sertifikasi pendukung yang relevan dengan cara kerja saya."
        description="Bagian ini dirancang ringkas agar recruiter dan client bisa memvalidasi kredibilitas tanpa kehilangan fokus dari Project."
        class="max-w-3xl"
      />

      <div class="mt-8 max-w-4xl divide-y divide-white/10">
        <article
          v-for="item in certifications"
          :key="item.id"
          class="grid gap-2 py-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-6"
        >
          <div class="min-w-0">
            <h3 class="text-sm font-medium leading-6 text-slate-100 sm:text-[0.95rem]">
              {{ item.name }}
            </h3>
            <p class="mt-1 text-sm text-slate-400">
              {{ item.issuer }}
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-3 sm:justify-end">
            <span class="text-xs uppercase tracking-[0.18em] text-slate-500">
              {{ item.year ?? item.status }}
            </span>

            <a
              v-if="item.credentialUrl"
              :href="item.credentialUrl"
              target="_blank"
              rel="noreferrer"
              class="text-sm text-slate-400 transition-colors duration-150 hover:text-slate-200"
            >
              Lihat Kredensial
            </a>
          </div>
        </article>
      </div>
    </BaseContainer>
  </section>
</template>
