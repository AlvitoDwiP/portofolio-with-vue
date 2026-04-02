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
  <section id="pengalaman" class="scroll-mt-24 pb-24 sm:pb-32">
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

      <div class="mt-8 grid auto-rows-fr gap-5 md:grid-cols-2 xl:gap-6">
        <ExperienceCard
          v-for="experience in experiences"
          :key="experience.slug"
          :experience="experience"
        />
      </div>
    </BaseContainer>
  </section>
</template>
