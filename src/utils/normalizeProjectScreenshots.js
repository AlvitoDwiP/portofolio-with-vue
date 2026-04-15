const createScreenshotItem = (item = {}, fallback = {}) => {
  const src = item.image || item.src || fallback.image || fallback.src || ''

  if (!src) {
    return null
  }

  const title = item.title || item.label || fallback.title || fallback.label || ''
  const description =
    item.description || item.caption || fallback.description || fallback.caption || ''

  return {
    src,
    image: src,
    alt: item.alt || fallback.alt || title || 'Preview project',
    title,
    label: title,
    description,
    caption: description,
  }
}

export const normalizeProjectScreenshots = (images = [], fallback = {}) => {
  if (!Array.isArray(images) || !images.length) {
    const single = createScreenshotItem({}, fallback)
    return single ? [single] : []
  }

  const normalized = []
  const seen = new Set()

  for (const item of images) {
    const screenshot = createScreenshotItem(item)

    if (!screenshot?.src || seen.has(screenshot.src)) {
      continue
    }

    seen.add(screenshot.src)
    normalized.push(screenshot)
  }

  if (!normalized.length) {
    const single = createScreenshotItem({}, fallback)
    return single ? [single] : []
  }

  return normalized
}
