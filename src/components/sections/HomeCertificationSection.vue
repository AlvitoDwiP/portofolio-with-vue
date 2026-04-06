<script setup>
import BaseContainer from '@/components/ui/BaseContainer.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { certifications } from '@/data/certifications'
</script>

<template>
  <section
    id="sertifikasi"
    class="section-theme section-theme-certification section-spacing scroll-mt-24"
  >
    <BaseContainer
      v-motion
      :initial="{ opacity: 0, y: 14 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 360 } }"
    >
      <SectionHeader
        eyebrow="Sertifikasi"
        title="Sertifikasi pendukung yang relevan dengan cara kerja saya."
        description="Bagian ini dirancang ringkas agar recruiter dan client bisa memvalidasi kredibilitas tanpa kehilangan fokus dari Project."
        class="max-w-3xl"
      />

      <div
        class="glass glass-panel glass-divide section-content-gap max-w-4xl rounded-lg px-5 sm:px-6"
      >
        <article
          v-for="item in certifications"
          :key="item.id"
          class="grid gap-2 py-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-6"
        >
          <div class="min-w-0">
            <h3 class="text-sm font-medium leading-6 text-textPrimary sm:text-[0.95rem]">
              {{ item.name }}
            </h3>
            <p class="section-muted mt-1 text-sm">
              {{ item.issuer }}
            </p>
          </div>

          <div class="flex flex-wrap items-center gap-3 sm:justify-end">
            <span class="section-muted text-xs uppercase tracking-[0.18em]">
              {{ item.year ?? item.status }}
            </span>

            <a
              v-if="item.credentialUrl"
              :href="item.credentialUrl"
              target="_blank"
              rel="noreferrer"
              class="section-link text-sm"
            >
              Lihat Kredensial
            </a>
          </div>
        </article>
      </div>
    </BaseContainer>
  </section>
</template>
