import { AppWindow, ChartColumnBig } from 'lucide-vue-next'

const DATA_CATEGORIES = ['data analytics', 'data']
const WEB_CATEGORIES = ['fullstack', 'web']

const VARIANTS = {
  data: {
    label: 'DATA',
    coverLabel: 'Insight Layer',
    summaryLabel: 'ANALYTICS PROJECT',
    icon: ChartColumnBig,
    coverGradient:
      'bg-[radial-gradient(circle_at_top,rgba(244,114,182,0.16),transparent_34%),linear-gradient(135deg,rgba(79,70,229,0.38),rgba(91,33,182,0.22)_54%,rgba(17,24,39,0.96))]',
    glowPrimary: 'glow-purple',
    glowSecondary: 'glow-indigo',
    badgeClass: 'border-violet-300/20 bg-violet-400/15 text-violet-100',
    iconShell:
      'border-violet-200/20 bg-violet-400/10 text-violet-100 shadow-glass',
    metaClass: 'text-violet-200/80',
    techClass: 'border-violet-300/15 bg-violet-400/10 text-violet-100/90',
    linkPrimaryClass:
      'border-violet-300/20 bg-violet-400/10 text-violet-50 hover:border-violet-200/30 hover:bg-violet-400/18',
    dotClass: 'bg-fuchsia-300',
  },
  web: {
    label: 'WEB',
    coverLabel: 'Interface Layer',
    summaryLabel: 'WEB PROJECT',
    icon: AppWindow,
    coverGradient:
      'bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_34%),linear-gradient(135deg,rgba(14,165,233,0.28),rgba(59,130,246,0.18)_52%,rgba(15,23,42,0.96))]',
    glowPrimary: 'glow-blue',
    glowSecondary: 'glow-indigo',
    badgeClass: 'border-sky-300/20 bg-sky-400/15 text-sky-100',
    iconShell:
      'border-sky-200/20 bg-sky-400/10 text-sky-100 shadow-glass',
    metaClass: 'text-sky-200/80',
    techClass: 'border-sky-300/15 bg-sky-400/10 text-sky-100/90',
    linkPrimaryClass:
      'border-sky-300/20 bg-sky-400/10 text-sky-50 hover:border-sky-200/30 hover:bg-sky-400/18',
    dotClass: 'bg-sky-300',
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

  return 'web'
}

export const resolveProjectCardVariant = (project) => {
  const variantKey = resolveVariantKey(project?.category)
  return {
    ...VARIANTS[variantKey],
    key: variantKey,
  }
}
