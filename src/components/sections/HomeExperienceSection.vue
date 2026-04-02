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
    class="section-theme section-theme-experience section-spacing scroll-mt-24"
  >
    <BaseContainer
      v-motion
      :initial="{ opacity: 0, y: 14 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 360 } }"
    >
      <SectionHeader
        eyebrow="Pengalaman"
        title="Pengalaman yang membentuk cara saya bekerja dengan data, sistem, dan kolaborasi."
        description="Bagian ini merangkum pengalaman yang paling relevan untuk menunjukkan bagaimana saya bekerja, mengambil keputusan, dan memberi dampak dalam konteks nyata."
        class="max-w-3xl"
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
