const DATA_CATEGORIES = ['data analytics', 'data']
const WEB_CATEGORIES = ['fullstack', 'web']
const MOBILE_CATEGORIES = ['mobile app', 'mobile']

const VARIANTS = {
  data: {
    label: 'DATA',
    badgeClass: 'border-[rgba(45,106,79,0.16)] bg-[rgba(216,243,220,0.88)] text-[#2D6A4F]',
  },
  web: {
    label: 'WEB',
    badgeClass: 'border-[rgba(221,227,240,0.86)] bg-[rgba(255,255,255,0.92)] text-[#1A1A2E]',
  },
  mobile: {
    label: 'MOBILE',
    badgeClass: 'border-[rgba(221,227,240,0.86)] bg-[rgba(239,243,251,0.9)] text-[#1A1A2E]',
  },
}

const resolveVariantKey = (category = '') => {
  const normalizedCategory = category.toLowerCase()

  if (DATA_CATEGORIES.some((item) => normalizedCategory.includes(item))) {
    return 'data'
  }

  if (WEB_CATEGORIES.some((item) => normalizedCategory.includes(item))) {
    return 'web'
  }

  if (MOBILE_CATEGORIES.some((item) => normalizedCategory.includes(item))) {
    return 'mobile'
  }

  return 'web'
}

export const resolveProjectCardVariant = (project) => {
  const variantKey = resolveVariantKey(project?.cardVariant ?? project?.category)

  return {
    ...VARIANTS[variantKey],
    label: VARIANTS[variantKey].label,
    key: variantKey,
  }
}
