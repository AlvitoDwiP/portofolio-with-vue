import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const HEADER_SELECTOR = '[data-site-header]'
const SECTION_GAP = 16
const MAX_SCROLL_ATTEMPTS = 10
const MANUAL_SCROLL_TIMEOUT = 1400
const TARGET_TOLERANCE = 12

function getHeaderOffset() {
  const header = document.querySelector(HEADER_SELECTOR)
  const headerHeight = header?.getBoundingClientRect().height ?? 0

  return Math.ceil(headerHeight + SECTION_GAP)
}

function getSectionElement(hash) {
  if (!hash?.startsWith('#')) {
    return null
  }

  try {
    return document.querySelector(hash)
  } catch {
    return null
  }
}

function updateHash(hash) {
  const url = new URL(window.location.href)
  url.hash = hash.slice(1)
  window.history.replaceState(window.history.state, '', url)
}

function scrollToHash(hash, { behavior = 'smooth', updateHistory = true } = {}) {
  const section = getSectionElement(hash)

  if (!section) {
    return false
  }

  const top = window.scrollY + section.getBoundingClientRect().top - getHeaderOffset()

  window.scrollTo({
    top: Math.max(top, 0),
    behavior,
  })

  if (updateHistory) {
    updateHash(hash)
  }

  return true
}

function isNearSection(hash) {
  const section = getSectionElement(hash)

  if (!section) {
    return false
  }

  const distanceFromViewportTop = Math.abs(section.getBoundingClientRect().top - getHeaderOffset())

  return distanceFromViewportTop <= TARGET_TOLERANCE
}

export function useSectionNavigation(sectionHashes = []) {
  const route = useRoute()
  const router = useRouter()
  const activeHash = ref(sectionHashes[0] ?? null)
  const manualTargetHash = ref(null)

  let observer = null
  let manualScrollTimeoutId = null
  let resizeFrameId = null

  const normalizedSectionHashes = sectionHashes.filter((hash) => hash.startsWith('#'))

  const createSectionHref = (hash) => (route.name === 'home' ? hash : `/${hash}`)

  const clearManualScrollLock = () => {
    if (manualScrollTimeoutId) {
      window.clearTimeout(manualScrollTimeoutId)
      manualScrollTimeoutId = null
    }

    window.removeEventListener('scroll', handleManualScrollProgress)
    manualTargetHash.value = null
  }

  const resolveActiveHash = () => {
    if (route.name !== 'home' || normalizedSectionHashes.length === 0) {
      activeHash.value = null
      return
    }

    if (manualTargetHash.value) {
      activeHash.value = manualTargetHash.value
      return
    }

    const headerOffset = getHeaderOffset()
    const viewportAnchor = headerOffset + window.innerHeight * 0.28
    let nextActiveHash = normalizedSectionHashes[0]

    for (const hash of normalizedSectionHashes) {
      const section = getSectionElement(hash)

      if (!section) {
        continue
      }

      const rect = section.getBoundingClientRect()

      if (rect.top <= viewportAnchor && rect.bottom > headerOffset + 8) {
        nextActiveHash = hash
      }
    }

    const hasReachedPageEnd =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2

    if (hasReachedPageEnd) {
      nextActiveHash = normalizedSectionHashes.at(-1) ?? nextActiveHash
    }

    activeHash.value = nextActiveHash
  }

  function handleManualScrollProgress() {
    if (!manualTargetHash.value) {
      return
    }

    if (isNearSection(manualTargetHash.value)) {
      clearManualScrollLock()
      resolveActiveHash()
    }
  }

  const lockActiveHash = (hash) => {
    clearManualScrollLock()

    manualTargetHash.value = hash
    activeHash.value = hash

    window.addEventListener('scroll', handleManualScrollProgress, { passive: true })
    manualScrollTimeoutId = window.setTimeout(() => {
      clearManualScrollLock()
      resolveActiveHash()
    }, MANUAL_SCROLL_TIMEOUT)
  }

  const disconnectObserver = () => {
    observer?.disconnect()
    observer = null
  }

  const setupObserver = () => {
    disconnectObserver()

    if (route.name !== 'home' || normalizedSectionHashes.length === 0) {
      activeHash.value = null
      return
    }

    observer = new IntersectionObserver(
      () => {
        resolveActiveHash()
      },
      {
        root: null,
        threshold: [0, 0.2, 0.4, 0.6],
        rootMargin: `-${getHeaderOffset()}px 0px -55% 0px`,
      }
    )

    normalizedSectionHashes
      .map((hash) => getSectionElement(hash))
      .filter(Boolean)
      .forEach((section) => observer.observe(section))

    resolveActiveHash()
  }

  const handleResize = () => {
    if (resizeFrameId) {
      window.cancelAnimationFrame(resizeFrameId)
    }

    resizeFrameId = window.requestAnimationFrame(() => {
      setupObserver()
    })
  }

  const scrollWhenReady = async (hash, options = {}) => {
    if (!hash) {
      return
    }

    await nextTick()

    let attempts = 0

    const tryScroll = () => {
      if (scrollToHash(hash, options) || attempts >= MAX_SCROLL_ATTEMPTS) {
        return
      }

      attempts += 1
      window.requestAnimationFrame(tryScroll)
    }

    window.requestAnimationFrame(tryScroll)
  }

  const navigateToSection = async (hash) => {
    if (!hash?.startsWith('#')) {
      return
    }

    if (route.name === 'home') {
      lockActiveHash(hash)
      scrollToHash(hash)
      return
    }

    await router.push({ name: 'home', hash })
  }

  watch(
    () => [route.name, route.hash],
    async ([routeName, hash], [previousRouteName, previousHash]) => {
      if (routeName !== 'home') {
        clearManualScrollLock()
        disconnectObserver()
        activeHash.value = null
        return
      }

      setupObserver()

      if (!hash) {
        resolveActiveHash()
        return
      }

      const behavior =
        previousRouteName === undefined && previousHash === undefined ? 'auto' : 'smooth'

      if (behavior === 'smooth') {
        lockActiveHash(hash)
      } else {
        activeHash.value = hash
      }

      await scrollWhenReady(hash, {
        behavior,
        updateHistory: false,
      })
    },
    { immediate: true }
  )

  onMounted(() => {
    window.addEventListener('resize', handleResize, { passive: true })
    setupObserver()
  })

  onBeforeUnmount(() => {
    clearManualScrollLock()
    disconnectObserver()
    window.removeEventListener('resize', handleResize)

    if (resizeFrameId) {
      window.cancelAnimationFrame(resizeFrameId)
    }
  })

  return {
    activeHash,
    createSectionHref,
    navigateToSection,
  }
}
