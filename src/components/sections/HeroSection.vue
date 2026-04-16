<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { ArrowRight, Download } from 'lucide-vue-next'
import BaseContainer from '@/components/ui/BaseContainer.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { useSectionNavigation } from '@/composables/useSectionNavigation'
import { siteConfig } from '@/data/site'

const hasPortraitError = ref(false)
const cardRef = ref(null)
const isCardHovered = ref(false)
const prefersReducedMotion = ref(false)

const defaultCardState = {
  rotateX: 0,
  rotateY: 0,
  scale: 1,
  imageX: 0,
  imageY: 0,
  overlayX: 0,
  overlayY: 0,
  glowX: 50,
  glowY: 18,
  glowOpacity: 0.16,
  shadowY: 26,
  shadowBlur: 54,
  shadowOpacity: 0.24,
}

const cardState = ref({ ...defaultCardState })

const portraitAlt = computed(
  () => siteConfig.portrait?.alt ?? `Foto profesional ${siteConfig.name}`
)

const fallbackInitials = computed(() =>
  siteConfig.name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
)

const { navigateToSection } = useSectionNavigation(['#proyek'])

const revealTransition = (delay, duration) => ({
  duration,
  delay,
  easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
})

const heroReveal = (delay = 0, y = 14, duration = 360) =>
  prefersReducedMotion.value
    ? {
        initial: { opacity: 1, y: 0 },
        enter: { opacity: 1, y: 0, transition: { duration: 0 } },
      }
    : {
        initial: { opacity: 0, y },
        enter: { opacity: 1, y: 0, transition: revealTransition(delay, duration) },
      }

const cardStyle = computed(() => ({
  transform: `perspective(1400px) rotateX(${cardState.value.rotateX}deg) rotateY(${cardState.value.rotateY}deg) scale(${cardState.value.scale})`,
  transition: isCardHovered.value
    ? 'transform 120ms ease-out, box-shadow 180ms ease-out, filter 180ms ease-out'
    : 'transform 360ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 360ms cubic-bezier(0.22, 1, 0.36, 1), filter 360ms cubic-bezier(0.22, 1, 0.36, 1)',
  boxShadow: `0 ${cardState.value.shadowY}px ${cardState.value.shadowBlur}px rgba(26, 26, 46, ${cardState.value.shadowOpacity})`,
  '--hero-card-glow-x': `${cardState.value.glowX}%`,
  '--hero-card-glow-y': `${cardState.value.glowY}%`,
  '--hero-card-glow-opacity': cardState.value.glowOpacity,
}))

const portraitStyle = computed(() => ({
  transform: `translate3d(${cardState.value.imageX}px, ${cardState.value.imageY}px, 0) scale(${isCardHovered.value ? 1.045 : 1.025})`,
  transition: isCardHovered.value
    ? 'transform 140ms ease-out'
    : 'transform 360ms cubic-bezier(0.22, 1, 0.36, 1)',
}))

const focusCardStyle = computed(() => ({
  transform: `translate3d(${cardState.value.overlayX}px, ${cardState.value.overlayY}px, 28px)`,
  transition: isCardHovered.value
    ? 'transform 150ms ease-out'
    : 'transform 360ms cubic-bezier(0.22, 1, 0.36, 1)',
}))

let frameId = 0
let mediaQueryList
let pendingPointerPosition = null

const resetCardState = () => {
  cardState.value = { ...defaultCardState }
}

const commitPointerUpdate = () => {
  frameId = 0

  if (!pendingPointerPosition || !cardRef.value) {
    return
  }

  const { clientX, clientY } = pendingPointerPosition
  const rect = cardRef.value.getBoundingClientRect()
  const normalizedX = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1)
  const normalizedY = Math.min(Math.max((clientY - rect.top) / rect.height, 0), 1)
  const offsetX = normalizedX * 2 - 1
  const offsetY = normalizedY * 2 - 1
  const activity = Math.min((Math.abs(offsetX) + Math.abs(offsetY)) / 2, 1)

  cardState.value = {
    rotateX: Number((-offsetY * 4).toFixed(2)),
    rotateY: Number((offsetX * 6).toFixed(2)),
    scale: 1.015,
    imageX: Number((offsetX * 10).toFixed(2)),
    imageY: Number((offsetY * 8).toFixed(2)),
    overlayX: Number((offsetX * 6).toFixed(2)),
    overlayY: Number((offsetY * 4).toFixed(2)),
    glowX: Number((normalizedX * 100).toFixed(2)),
    glowY: Number((normalizedY * 100).toFixed(2)),
    glowOpacity: Number((0.16 + activity * 0.08).toFixed(3)),
    shadowY: Number((26 + activity * 8).toFixed(2)),
    shadowBlur: Number((54 + activity * 16).toFixed(2)),
    shadowOpacity: Number((0.24 + activity * 0.08).toFixed(3)),
  }
}

const queuePointerUpdate = (event) => {
  if (prefersReducedMotion.value || event.pointerType === 'touch') {
    return
  }

  pendingPointerPosition = {
    clientX: event.clientX,
    clientY: event.clientY,
  }

  if (!frameId) {
    frameId = window.requestAnimationFrame(commitPointerUpdate)
  }
}

const handleCardPointerEnter = (event) => {
  if (prefersReducedMotion.value || event.pointerType === 'touch') {
    return
  }

  isCardHovered.value = true
  queuePointerUpdate(event)
}

const handleCardPointerMove = (event) => {
  if (!isCardHovered.value) {
    return
  }

  queuePointerUpdate(event)
}

const handleCardPointerLeave = () => {
  isCardHovered.value = false
  pendingPointerPosition = null

  if (frameId) {
    window.cancelAnimationFrame(frameId)
    frameId = 0
  }

  resetCardState()
}

const updateReducedMotionPreference = (event) => {
  prefersReducedMotion.value = event.matches

  if (event.matches) {
    handleCardPointerLeave()
  }
}

onMounted(() => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return
  }

  mediaQueryList = window.matchMedia('(prefers-reduced-motion: reduce)')
  updateReducedMotionPreference(mediaQueryList)
  mediaQueryList.addEventListener?.('change', updateReducedMotionPreference)
})

onBeforeUnmount(() => {
  if (frameId) {
    window.cancelAnimationFrame(frameId)
  }

  mediaQueryList?.removeEventListener?.('change', updateReducedMotionPreference)
})
</script>

<template>
  <section id="home" class="section-theme section-theme-hero scroll-mt-24">
    <BaseContainer
      class="flex min-h-[calc(100vh-4.75rem)] items-center pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28"
    >
      <div
        class="grid w-full gap-y-8 lg:grid-cols-[minmax(0,56%)_minmax(0,44%)] lg:grid-rows-[auto_auto] lg:items-center lg:gap-x-10 xl:gap-x-14"
      >
        <div class="order-1 max-w-xl space-y-6 lg:row-span-2">
          <p
            v-motion
            :initial="heroReveal(0, 12, 300).initial"
            :enter="heroReveal(0, 12, 300).enter"
            class="section-eyebrow text-xs font-medium uppercase tracking-[0.24em]"
          >
            {{ siteConfig.eyebrow }}
          </p>

          <div class="space-y-5">
            <h1
              v-motion
              :initial="heroReveal(80, 16, 360).initial"
              :enter="heroReveal(80, 16, 360).enter"
              class="hero-name-animated font-display text-[2.5rem] leading-[1.05] text-text sm:text-5xl lg:text-6xl"
            >
              {{ siteConfig.name }}
            </h1>

            <p
              v-motion
              :initial="heroReveal(160, 14, 340).initial"
              :enter="heroReveal(160, 14, 340).enter"
              class="text-lg font-medium text-text sm:text-xl"
            >
              {{ siteConfig.role }}
            </p>

            <p
              v-motion
              :initial="heroReveal(240, 14, 360).initial"
              :enter="heroReveal(240, 14, 360).enter"
              class="section-muted max-w-lg text-[0.98rem] leading-8 sm:text-lg"
            >
              {{ siteConfig.summary }}
            </p>
          </div>

          <div
            v-motion
            :initial="heroReveal(320, 12, 360).initial"
            :enter="heroReveal(320, 12, 360).enter"
            class="flex flex-col gap-3 pt-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <BaseButton
              variant="primary"
              class="w-full sm:w-auto"
              @click="navigateToSection('#proyek')"
            >
              <span>Lihat Proyek</span>
              <ArrowRight class="ml-2 h-4 w-4" />
            </BaseButton>

            <a
              :href="siteConfig.resumeUrl"
              download
              class="section-button-secondary inline-flex w-full items-center justify-center rounded-xl border px-4 py-2.5 text-sm font-medium transition-[transform,background-color,border-color,color] duration-200 hover:-translate-y-0.5 sm:w-auto"
            >
              <span>Unduh CV</span>
              <Download class="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, y: 22 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 500, delay: 80 } }"
          class="order-2 relative lg:col-start-2 lg:row-span-2 lg:flex lg:items-center lg:justify-end"
        >
          <div
            class="pointer-events-none absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(216,243,220,0.72)_0%,rgba(216,243,220,0.38)_36%,rgba(244,246,251,0)_72%)] blur-3xl sm:h-[28rem] sm:w-[28rem]"
          />
          <div
            ref="cardRef"
            :style="cardStyle"
            class="hero-photo-card section-panel mx-auto flex w-full max-w-[24.5rem] items-stretch rounded-[1.5rem] border-[rgba(221,227,240,0.9)] bg-[rgba(255,255,255,0.96)] p-2.5 sm:max-w-[27rem] sm:p-3 lg:mx-0 lg:max-w-[28rem] xl:max-w-[29.5rem]"
            @pointerenter="handleCardPointerEnter"
            @pointermove="handleCardPointerMove"
            @pointerleave="handleCardPointerLeave"
            @pointercancel="handleCardPointerLeave"
          >
            <div
              class="hero-photo-card__ambient absolute inset-x-8 bottom-0 h-20 rounded-full bg-[radial-gradient(circle,rgba(216,243,220,0.42)_0%,rgba(239,243,251,0.34)_45%,rgba(45,106,79,0.16)_72%,transparent_100%)] blur-3xl sm:inset-x-10 sm:h-24"
            />
            <div class="hero-photo-card__cursor-glow absolute inset-0 rounded-[inherit]" />

            <div
              class="hero-photo-card__surface relative min-h-[16rem] flex-1 overflow-hidden rounded-[1.1rem] border border-[rgba(221,227,240,0.82)] bg-[#FFFFFF] sm:min-h-[18.5rem] lg:min-h-[20rem]"
            >
              <img
                v-if="!hasPortraitError"
                :src="siteConfig.portrait.src"
                :alt="portraitAlt"
                :style="portraitStyle"
                class="hero-photo-card__media h-full w-full object-cover object-top"
                @error="hasPortraitError = true"
              />

              <div
                v-else
                class="flex h-full flex-col items-center justify-center bg-[radial-gradient(circle_at_top,rgba(216,243,220,0.18),transparent_44%)] px-6 text-center"
              >
                <div
                  class="glass-chip-strong flex h-24 w-24 items-center justify-center rounded-full text-2xl font-semibold tracking-[0.24em] text-textPrimary"
                >
                  {{ fallbackInitials }}
                </div>
                <p class="mt-5 text-base font-medium text-textPrimary">
                  {{ siteConfig.name }}
                </p>
                <p class="section-muted mt-2 max-w-xs text-sm leading-7">
                  {{ siteConfig.role }}
                </p>
              </div>

              <div
                class="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(239,243,251,0.1)_60%,rgba(45,106,79,0.16))]"
              />

              <div
                class="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(239,243,251,0.18),rgba(108,99,255,0.2))]"
              />

              <div class="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <div
                  :style="focusCardStyle"
                  class="hero-photo-card__focus glass glass-panel max-w-[17rem] rounded-card px-4 py-3 sm:max-w-[18rem]"
                >
                  <p class="section-eyebrow text-xs uppercase tracking-[0.2em]">Fokus kerja</p>
                  <p class="mt-2 text-sm leading-7 text-textPrimary">
                    Menyusun insight yang jelas dan membangun aplikasi yang dapat langsung dipakai.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  </section>
</template>

<style scoped>
.hero-photo-card {
  transform-style: preserve-3d;
  will-change: transform, box-shadow, filter;
}

.hero-name-animated {
  background-image: linear-gradient(
    110deg,
    rgba(26, 26, 46, 0.98) 0%,
    rgba(26, 26, 46, 0.98) 38%,
    rgba(108, 99, 255, 0.88) 50%,
    rgba(26, 26, 46, 0.98) 62%,
    rgba(136, 150, 174, 0.92) 74%,
    rgba(26, 26, 46, 0.98) 100%
  );
  background-size: 220% 100%;
  background-position: 0% 50%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  animation: hero-name-sweep 8s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite;
}

.hero-photo-card__surface {
  transform: translateZ(0);
  transform-style: preserve-3d;
}

.hero-photo-card__ambient {
  opacity: 0.85;
  transition:
    transform 360ms cubic-bezier(0.22, 1, 0.36, 1),
    opacity 360ms ease;
}

.hero-photo-card__cursor-glow {
  pointer-events: none;
  background:
    radial-gradient(
      circle at var(--hero-card-glow-x, 50%) var(--hero-card-glow-y, 18%),
      rgba(108, 99, 255, var(--hero-card-glow-opacity, 0.16)),
      transparent 36%
    ),
    linear-gradient(180deg, rgba(239, 243, 251, 0.14), transparent 32%);
  opacity: 0.9;
}

.hero-photo-card__media,
.hero-photo-card__focus {
  will-change: transform;
}

.hero-photo-card__focus {
  box-shadow: 0 16px 36px rgba(26, 26, 46, 0.12);
}

.hero-photo-card:hover .hero-photo-card__ambient {
  transform: scale(1.03);
  opacity: 1;
}

@keyframes hero-name-sweep {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-name-animated {
    animation: none;
    background-position: 50% 50%;
  }

  .hero-photo-card,
  .hero-photo-card__ambient,
  .hero-photo-card__media,
  .hero-photo-card__focus {
    transition: none !important;
    transform: none !important;
  }
}
</style>
