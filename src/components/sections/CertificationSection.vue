<script setup>
import CertificationCard from '@/components/certifications/CertificationCard.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { certificationAttachment, certifications } from '@/data/certifications'
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
        title="Pengembangan Diri"
        description="Daftar sertifikasi yang menunjukkan pengembangan kemampuan saya dalam analisis data, pengembangan aplikasi, dan implementasi solusi berbasis teknologi."
        class="mx-auto max-w-3xl text-center"
      />

      <div
        class="section-content-gap section-grid-gap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <div class="md:col-span-2 lg:col-span-3">
          <CertificationCard :certification="certificationAttachment" attachment />
        </div>

        <CertificationCard
          v-for="certification in certifications"
          :key="certification.id"
          :certification="certification"
        />
      </div>
    </BaseContainer>
  </section>
</template>
