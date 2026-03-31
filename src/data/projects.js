export const projects = [
  {
    slug: 'nova-studio',
    title: 'Nova Studio',
    summary: 'Premium landing system with clean motion, sharp typography, and modular UI.',
    overview:
      'A placeholder case study for the first commit. The goal is to establish a stable frontend data shape before real project content is added.',
    role: 'Frontend Design & Development',
    year: '2026',
    status: 'Concept',
    featured: true,
    stack: ['Vue 3', 'Tailwind CSS', 'VueUse Motion'],
    highlights: [
      'Frontend-only project data that is easy to replace later',
      'Reusable card and layout primitives',
      'Project detail page already wired into the router',
    ],
    links: {
      live: 'https://example.com/nova-studio',
      repo: 'https://github.com/example/nova-studio',
    },
  },
  {
    slug: 'atlas-dashboard',
    title: 'Atlas Dashboard',
    summary: 'Internal analytics interface focused on clarity, hierarchy, and component reuse.',
    overview:
      'This sample entry keeps the portfolio data structure realistic without turning the first commit into a finished case study.',
    role: 'Product Design System',
    year: '2025',
    status: 'Prototype',
    featured: true,
    stack: ['Vue Router', 'Lucide Icons', 'ESLint'],
    highlights: [
      'Structured metadata for future filtering or tags',
      'Consistent project slug model for detail routes',
      'Ready to expand with screenshots or richer content blocks',
    ],
    links: {
      live: 'https://example.com/atlas-dashboard',
      repo: 'https://github.com/example/atlas-dashboard',
    },
  },
  {
    slug: 'signal-notes',
    title: 'Signal Notes',
    summary: 'Content-first note experience with elegant spacing and dark-mode-first styling.',
    overview:
      'Another sample project used to prove the detail route, card grid, and frontend data organization are ready before the real portfolio is filled in.',
    role: 'UI Engineering',
    year: '2024',
    status: 'Exploration',
    featured: true,
    stack: ['Prettier', '@vueuse/head', 'Vite'],
    highlights: [
      'Flat data source stored in the frontend only',
      'Simple enough for a first commit, structured enough to scale',
      'Works well for one-page navigation plus detail pages',
    ],
    links: {
      live: 'https://example.com/signal-notes',
      repo: 'https://github.com/example/signal-notes',
    },
  },
]
