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
    class="section-panel group flex h-full cursor-pointer transform-gpu flex-col overflow-hidden rounded-[1.5rem] border border-white/8 p-3 transition-[transform,border-color,box-shadow,background-color] duration-300 hover:scale-[1.02] hover:border-white/14 hover:shadow-[0_20px_44px_rgba(2,6,23,0.22)] focus:outline-none focus-visible:border-white/18 focus-visible:shadow-[0_0_0_3px_rgba(255,255,255,0.08)] sm:p-3.5"
    role="button"
    tabindex="0"
    :aria-label="`Buka preview project ${project.title}`"
    @click="openPreview"
    @keydown.enter.prevent="openPreview"
    @keydown.space.prevent="openPreview"
  >
    <div class="relative overflow-hidden rounded-[1.2rem]">
      <div
        class="flex aspect-[16/10] items-center justify-center bg-[linear-gradient(180deg,rgba(15,23,42,0.62),rgba(2,6,23,0.42))] p-4 sm:p-5"
      >
        <img
          :src="previewImage"
          :alt="`Thumbnail project ${project.title}`"
          class="max-h-full w-full object-contain transition duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-105"
        />
      </div>

      <div
        class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.02),rgba(15,23,42,0.1)_52%,rgba(2,6,23,0.46))]"
      />

      <span
        class="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-2 justify-center opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      >
        <span
          class="mb-4 inline-flex items-center rounded-full border border-white/12 bg-slate-950/72 px-3 py-1.5 text-[0.68rem] font-medium text-white/88 backdrop-blur-md"
        >
          Preview Project
        </span>
      </span>
    </div>

    <div class="flex flex-1 flex-col px-1 pb-1 pt-4">
      <div class="min-w-0 space-y-3">
        <span
          :class="[
            'inline-flex w-fit items-center rounded-full border px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.22em]',
            cardVariant.badgeClass,
          ]"
        >
          {{ cardVariant.label }}
        </span>

        <h3 class="project-card__title font-display text-[1.15rem] leading-tight text-textPrimary sm:text-[1.28rem]">
          {{ project.title }}
        </h3>
      </div>

      <div class="mt-auto flex items-center gap-3 pt-6">
        <RouterLink
          :to="{ name: 'project-detail', params: { slug: project.slug } }"
          class="inline-flex items-center rounded-xl bg-[linear-gradient(135deg,rgba(56,189,248,0.96),rgba(59,130,246,0.92))] px-4 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_36px_rgba(56,189,248,0.22)] transition-[transform,filter,box-shadow] duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:brightness-105"
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
          class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-textSecondary transition-[transform,border-color,color,background-color] duration-200 hover:-translate-y-0.5 hover:border-white/16 hover:bg-white/[0.06] hover:text-textPrimary"
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
