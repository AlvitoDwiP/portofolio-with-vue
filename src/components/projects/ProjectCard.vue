<script setup>
import { computed } from 'vue'
import { ArrowRight, ChartColumnBig, Github } from 'lucide-vue-next'
import { resolveProjectCardVariant } from '@/components/projects/projectCardVariants'
import { createProjectThumbnail } from '@/utils/createProjectThumbnail'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['preview'])

const cardVariant = computed(() => resolveProjectCardVariant(props.project))
const previewImage = computed(() => props.project.cover || createProjectThumbnail(props.project))
const isDataProject = computed(() => cardVariant.value.key === 'data')

const externalAction = computed(() => {
  if (isDataProject.value) {
    const href =
      props.project.links?.demo || props.project.links?.notebook || props.project.links?.ppt || ''

    if (!href) {
      return null
    }

    return {
      href,
      label:
        props.project.links?.demoLabel ||
        props.project.links?.notebookLabel ||
        props.project.links?.pptLabel ||
        'Dashboard',
      ariaLabel: 'Buka dashboard project',
      icon: ChartColumnBig,
    }
  }

  if (!props.project.links?.github) {
    return null
  }

  return {
    href: props.project.links.github,
    label: 'GitHub',
    ariaLabel: 'Buka GitHub project',
    icon: Github,
  }
})

const openPreview = () => {
  emit('preview', props.project)
}
</script>

<template>
  <article
    :class="[
      'section-panel group flex h-full cursor-pointer transform-gpu flex-col overflow-hidden rounded-[1.5rem] border border-[rgba(221,227,240,0.92)] bg-[rgba(255,255,255,0.98)] p-3 transition-[transform,border-color,box-shadow,background-color] duration-300 focus:outline-none sm:p-3.5',
      featured
        ? 'shadow-[0_22px_48px_rgba(26,26,46,0.12),0_0_0_1px_rgba(221,227,240,0.92),0_0_34px_rgba(108,99,255,0.08)] hover:-translate-y-[5px] hover:scale-[1.012] hover:border-[rgba(108,99,255,0.32)] hover:shadow-[0_26px_56px_rgba(26,26,46,0.14),0_0_0_1px_rgba(221,227,240,0.94),0_0_42px_rgba(108,99,255,0.12)]'
        : 'shadow-[0_14px_30px_rgba(26,26,46,0.07),0_0_0_1px_rgba(221,227,240,0.84)] hover:-translate-y-[3px] hover:border-[rgba(108,99,255,0.28)] hover:shadow-[0_22px_44px_rgba(26,26,46,0.1),0_0_0_1px_rgba(221,227,240,0.92)]',
      'focus-visible:border-[rgba(108,99,255,0.24)] focus-visible:shadow-[0_0_0_3px_rgba(108,99,255,0.12)]',
    ]"
    role="button"
    tabindex="0"
    :aria-label="`Buka preview project ${project.title}`"
    @click="openPreview"
    @keydown.enter.prevent="openPreview"
    @keydown.space.prevent="openPreview"
  >
    <div class="relative overflow-hidden rounded-[1.2rem]">
      <div
        v-if="featured"
        class="pointer-events-none absolute inset-x-5 top-0 z-[1] h-16 rounded-full bg-[radial-gradient(circle,rgba(108,99,255,0.14),transparent_72%)] blur-2xl opacity-80 transition duration-300 group-hover:opacity-100"
      />
      <div
        class="flex aspect-[16/10] items-center justify-center bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(239,243,251,0.94))] p-4 sm:p-5"
      >
        <img
          :src="previewImage"
          :alt="`Thumbnail project ${project.title}`"
          class="max-h-full w-full object-contain transition duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-105"
        />
      </div>

      <div
        class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(239,243,251,0.08)_52%,rgba(45,106,79,0.16))]"
      />

      <span
        class="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-2 justify-center opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      >
        <span
          class="mb-4 inline-flex items-center rounded-full border border-[rgba(221,227,240,0.86)] bg-[rgba(255,255,255,0.92)] px-3 py-1.5 text-[0.68rem] font-medium text-textSecondary backdrop-blur-md"
        >
          Preview Project
        </span>
      </span>
    </div>

    <div class="flex flex-1 flex-col px-1 pb-1 pt-4">
      <div class="min-w-0 space-y-3.5">
        <span
          :class="[
            'inline-flex w-fit items-center rounded-full border px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em]',
            cardVariant.badgeClass,
          ]"
        >
          {{ cardVariant.label }}
        </span>

        <h3 class="project-card__title font-display text-[1.15rem] leading-tight tracking-[-0.032em] text-textPrimary sm:text-[1.28rem]">
          {{ project.title }}
        </h3>
      </div>

      <div class="mt-auto flex items-center gap-3 pt-6">
        <RouterLink
          :to="{ name: 'project-detail', params: { slug: project.slug } }"
          class="inline-flex items-center rounded-xl bg-[#2D6A4F] px-4 py-3 text-sm font-semibold text-[#FFFFFF] shadow-[0_16px_36px_rgba(45,106,79,0.18)] transition-[transform,filter,box-shadow] duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#40916C] hover:shadow-[0_20px_40px_rgba(45,106,79,0.22)]"
          @click.stop
          @keydown.enter.stop
          @keydown.space.stop
        >
          <span>Lihat Detail</span>
          <ArrowRight class="ml-2 h-4 w-4" />
        </RouterLink>

        <a
          v-if="externalAction"
          :href="externalAction.href"
          target="_blank"
          rel="noreferrer"
          class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(221,227,240,0.9)] bg-[rgba(255,255,255,0.92)] text-textSecondary shadow-[0_8px_18px_rgba(26,26,46,0.04),inset_0_1px_0_rgba(255,255,255,0.82)] transition-[transform,border-color,color,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-[rgba(108,99,255,0.22)] hover:bg-[rgba(216,243,220,0.52)] hover:text-accent hover:shadow-[0_14px_26px_rgba(26,26,46,0.08),inset_0_1px_0_rgba(255,255,255,0.86)]"
          :aria-label="externalAction.ariaLabel"
          :title="externalAction.label"
          @click.stop
          @keydown.enter.stop
          @keydown.space.stop
        >
          <component :is="externalAction.icon" class="h-4 w-4" />
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card__title {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
