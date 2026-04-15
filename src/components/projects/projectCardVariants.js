const DATA_CATEGORIES = ['data analytics', 'data']
const WEB_CATEGORIES = ['fullstack', 'web']
const MOBILE_CATEGORIES = ['mobile app', 'mobile']

const VARIANTS = {
  data: {
    label: 'DATA',
    badgeClass: 'border-[rgba(31,92,76,0.16)] bg-[rgba(220,233,226,0.88)] text-[#1F5C4C]',
  },
  web: {
    label: 'WEB',
    badgeClass: 'border-[rgba(216,203,184,0.86)] bg-[rgba(251,246,238,0.92)] text-[#2E2A26]',
  },
  mobile: {
    label: 'MOBILE',
    badgeClass: 'border-[rgba(216,203,184,0.86)] bg-[rgba(239,228,211,0.9)] text-[#2E2A26]',
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
