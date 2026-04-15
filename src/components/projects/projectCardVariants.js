const DATA_CATEGORIES = ['data analytics', 'data']
const WEB_CATEGORIES = ['fullstack', 'web']
const MOBILE_CATEGORIES = ['mobile app', 'mobile']

const VARIANTS = {
  data: {
    label: 'DATA',
    badgeClass: 'border-sky-300/18 bg-slate-950/68 text-sky-100',
  },
  web: {
    label: 'WEB',
    badgeClass: 'border-blue-300/18 bg-slate-950/68 text-blue-100',
  },
  mobile: {
    label: 'MOBILE',
    badgeClass: 'border-amber-300/18 bg-slate-950/68 text-amber-50',
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
