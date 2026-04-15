const DATA_CATEGORIES = ['data analytics', 'data']
const WEB_CATEGORIES = ['fullstack', 'web']
const MOBILE_CATEGORIES = ['mobile app', 'mobile']

const THUMBNAIL_THEMES = {
  data: {
    label: 'DATA',
    backgroundStart: '#08111f',
    backgroundEnd: '#0f2743',
    accent: '#38bdf8',
    accentSoft: 'rgba(56,189,248,0.18)',
    panel: 'rgba(8,15,28,0.62)',
  },
  web: {
    label: 'WEB',
    backgroundStart: '#08111f',
    backgroundEnd: '#12263f',
    accent: '#60a5fa',
    accentSoft: 'rgba(96,165,250,0.18)',
    panel: 'rgba(8,15,28,0.6)',
  },
  mobile: {
    label: 'MOBILE',
    backgroundStart: '#140f07',
    backgroundEnd: '#1f2937',
    accent: '#f59e0b',
    accentSoft: 'rgba(245,158,11,0.18)',
    panel: 'rgba(20,16,12,0.62)',
  },
}

const resolveThemeKey = (project = {}) => {
  const category = String(project.cardVariant ?? project.category ?? '').toLowerCase()

  if (DATA_CATEGORIES.some((item) => category.includes(item))) {
    return 'data'
  }

  if (MOBILE_CATEGORIES.some((item) => category.includes(item))) {
    return 'mobile'
  }

  if (WEB_CATEGORIES.some((item) => category.includes(item))) {
    return 'web'
  }

  return 'web'
}

const escapeSvg = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

export const createProjectThumbnail = (project = {}) => {
  const theme = THUMBNAIL_THEMES[resolveThemeKey(project)]
  const title = escapeSvg(project.title ?? 'Project Preview')

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${theme.backgroundStart}" />
          <stop offset="100%" stop-color="${theme.backgroundEnd}" />
        </linearGradient>
        <radialGradient id="glow" cx="72%" cy="18%" r="55%">
          <stop offset="0%" stop-color="${theme.accentSoft}" />
          <stop offset="100%" stop-color="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      <rect width="1600" height="900" fill="url(#bg)" rx="44" />
      <rect width="1600" height="900" fill="url(#glow)" rx="44" />

      <g opacity="0.22">
        <path d="M0 668C177 602 332 572 464 578C619 585 747 653 909 650C1085 647 1248 547 1600 398V900H0Z" fill="${theme.accent}" />
      </g>

      <g opacity="0.7">
        <rect x="94" y="90" width="1412" height="720" rx="36" fill="${theme.panel}" stroke="rgba(255,255,255,0.08)" />
        <rect x="146" y="152" width="872" height="478" rx="26" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
        <rect x="1064" y="152" width="286" height="218" rx="24" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
        <rect x="1064" y="402" width="286" height="228" rx="24" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" />
        <rect x="146" y="668" width="1204" height="74" rx="22" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" />
      </g>

      <g>
        <rect x="196" y="206" width="402" height="26" rx="13" fill="rgba(255,255,255,0.18)" />
        <rect x="196" y="252" width="312" height="16" rx="8" fill="rgba(255,255,255,0.08)" />
        <rect x="196" y="474" width="772" height="102" rx="24" fill="rgba(255,255,255,0.04)" />
        <rect x="196" y="312" width="178" height="122" rx="22" fill="${theme.accentSoft}" />
        <rect x="402" y="312" width="178" height="122" rx="22" fill="rgba(255,255,255,0.06)" />
        <rect x="608" y="312" width="178" height="122" rx="22" fill="rgba(255,255,255,0.08)" />
        <rect x="814" y="312" width="122" height="122" rx="22" fill="rgba(255,255,255,0.06)" />

        <circle cx="1138" cy="230" r="48" fill="${theme.accentSoft}" />
        <rect x="1206" y="194" width="92" height="16" rx="8" fill="rgba(255,255,255,0.16)" />
        <rect x="1206" y="226" width="66" height="14" rx="7" fill="rgba(255,255,255,0.08)" />
        <rect x="1096" y="450" width="222" height="24" rx="12" fill="rgba(255,255,255,0.12)" />
        <rect x="1096" y="494" width="184" height="14" rx="7" fill="rgba(255,255,255,0.08)" />
        <rect x="1096" y="528" width="156" height="14" rx="7" fill="rgba(255,255,255,0.08)" />
      </g>

      <g>
        <rect x="146" y="114" width="142" height="42" rx="21" fill="rgba(2,6,23,0.58)" stroke="rgba(255,255,255,0.12)" />
        <text x="217" y="141" fill="#f8fafc" font-size="20" font-family="Arial, Helvetica, sans-serif" text-anchor="middle" letter-spacing="3">${theme.label}</text>
      </g>
    </svg>
  `.trim()

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}
