<script setup>
import EducationCard from '@/components/education/EducationCard.vue'
import BaseContainer from '@/components/ui/BaseContainer.vue'
</script>

<template>
  <section id="quick-proof" class="section-theme section-theme-proof section-spacing scroll-mt-24">
    <BaseContainer>
      <div
        v-motion
        :initial="{ opacity: 0, y: 14 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 380, delay: 140 } }"
        class="mx-auto flex max-w-3xl flex-col items-center space-y-8 text-center sm:space-y-10"
      >
        <div>
          <p class="section-eyebrow text-xs font-medium uppercase tracking-[0.22em]">Edukasi</p>
        </div>

        <EducationCard />
      </div>
    </BaseContainer>
  </section>
</template>
