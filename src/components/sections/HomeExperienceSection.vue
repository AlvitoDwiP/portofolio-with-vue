<script setup>
import ExperienceCard from '@/components/experiences/ExperienceCard.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'

defineProps({
  experiences: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section
    id="pengalaman"
    class="section-theme section-theme-experience section-spacing scroll-mt-24 bg-[#F4EBDD]"
  >
    <BaseContainer
      v-motion
      :initial="{ opacity: 0, y: 14 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 360 } }"
    >
      <SectionHeader
        eyebrow="Pengalaman"
        title="Perjalanan Kerja"
        description="Pengalaman yang membentuk cara saya memahami masalah, bekerja dalam sistem, dan menghasilkan solusi yang relevan."
        class="mx-auto max-w-3xl text-center"
      />

      <div class="section-content-gap section-grid-gap grid auto-rows-fr md:grid-cols-2">
        <ExperienceCard
          v-for="experience in experiences"
          :key="experience.slug"
          :experience="experience"
        />
      </div>
    </BaseContainer>
  </section>
</template>
