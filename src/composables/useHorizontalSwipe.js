import { onBeforeUnmount, onMounted, ref } from 'vue'

const SWIPE_QUERY = '(max-width: 767px)'
const SWIPE_THRESHOLD = 48
const SWIPE_DIRECTION_RATIO = 1.15

export function useHorizontalSwipe({ onNext, onPrevious } = {}) {
  const isSwipeEnabled = ref(false)

  const touchState = {
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    tracking: false,
  }

  let mediaQueryList

  const resetTouchState = () => {
    touchState.startX = 0
    touchState.startY = 0
    touchState.deltaX = 0
    touchState.deltaY = 0
    touchState.tracking = false
  }

  const updateSwipeCapability = (event) => {
    isSwipeEnabled.value = event.matches
  }

  const handleTouchStart = (event) => {
    if (!isSwipeEnabled.value || event.touches.length !== 1) {
      resetTouchState()
      return
    }

    const [touch] = event.touches

    touchState.startX = touch.clientX
    touchState.startY = touch.clientY
    touchState.deltaX = 0
    touchState.deltaY = 0
    touchState.tracking = true
  }

  const handleTouchMove = (event) => {
    if (!touchState.tracking || event.touches.length !== 1) {
      return
    }

    const [touch] = event.touches

    touchState.deltaX = touch.clientX - touchState.startX
    touchState.deltaY = touch.clientY - touchState.startY
  }

  const handleTouchEnd = () => {
    if (!touchState.tracking) {
      return
    }

    const absDeltaX = Math.abs(touchState.deltaX)
    const absDeltaY = Math.abs(touchState.deltaY)

    if (
      absDeltaX >= SWIPE_THRESHOLD &&
      absDeltaX > absDeltaY * SWIPE_DIRECTION_RATIO
    ) {
      if (touchState.deltaX < 0) {
        onNext?.()
      } else {
        onPrevious?.()
      }
    }

    resetTouchState()
  }

  onMounted(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return
    }

    mediaQueryList = window.matchMedia(SWIPE_QUERY)
    updateSwipeCapability(mediaQueryList)
    mediaQueryList.addEventListener?.('change', updateSwipeCapability)
  })

  onBeforeUnmount(() => {
    mediaQueryList?.removeEventListener?.('change', updateSwipeCapability)
  })

  return {
    isSwipeEnabled,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleTouchCancel: resetTouchState,
  }
}
