// ==========================================
// Design Tokens - Sistem desain fondasi
// ==========================================

export const designTokens = {
  // Palet warna utama
  colors: {
    // Warna netral - ink (bukan hitam asli)
    ink: {
      50: '#f8fafc',   // background
      100: '#f1f5f9',   // border halus
      200: '#e2e8f0',   // pembagi
      300: '#cbd5e1',   // placeholder
      400: '#94a3b8',   // teks sekunder
      500: '#64748b',   // teks muted
      600: '#475569',   // teks utama (ink-600)
      700: '#334155',   // teks emphasis
      800: '#1e293b',   // judul utama
      900: '#0f172a',   // ink-900
      950: '#020617',   // near-black untuk kontras
    },
    // Aksen premium
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    // Violet premium
    violet: {
      50: '#f5f3ff',
      100: '#ede9fe',
      200: '#ddd6fe',
      300: '#c4b5fd',
      400: '#a78bfa',
      500: '#8b5cf6',   // violet-500 utama
      600: '#7c3aed',
      700: '#6d28d9',
      800: '#5b21b6',
      900: '#4c1d95',
    },
    // Success green
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
    // Error red
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },
    // Warning amber
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },
    // Backgrounds
    bg: {
      primary: '#ffffff',
      secondary: '#f8fafc',
      tertiary: '#f1f5f9',
      overlay: 'rgba(2, 6, 23, 0.5)',
      glass: 'rgba(255, 255, 255, 0.8)',
    },
    // Surface & Border
    surface: {
      elevated: '#ffffff',
      dropShadow: 'rgba(2, 6, 23, 0.04)',
      border: '#e2e8f0',
      divider: '#f1f5f9',
    },
  },

  // Tipografi
  typography: {
    fontFamily: {
      display: 'Inter, system-ui, -apple-system, sans-serif',
      sans: 'Source Sans Pro, Inter, system-ui, sans-serif',
      mono: 'JetBrains Mono, Consolas, monospace',
    },
    fontSize: {
      // Display
      'display-2xl': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
      'display-xl': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
      'display-lg': ['2rem', { lineHeight: '1.2', fontWeight: '700' }],
      'display-md': ['1.75rem', { lineHeight: '1.2', fontWeight: '700' }],
      'display-sm': ['1.5rem', { lineHeight: '1.2', fontWeight: '600' }],
      
      // Heading
      'h1': ['1.25rem', { lineHeight: '1.4', fontWeight: '700' }],
      'h2': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
      'h3': ['1rem', { lineHeight: '1.5', fontWeight: '600' }],
      
      // Body
      'body-lg': ['1.125rem', { lineHeight: '1.5', fontWeight: '400' }],
      'body-base': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
      'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      
      // Caption
      'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],
      'overline': ['0.75rem', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '0.08em' }],
    },
    
    // Spacing (8pt grid)
    spacing: {
      '0': '0',
      '1': '0.25rem',   // 4px
      '2': '0.5rem',    // 8px
      '3': '0.75rem',   // 12px
      '4': '1rem',      // 16px
      '5': '1.25rem',   // 20px
      '6': '1.5rem',    // 24px
      '7': '1.75rem',   // 28px
      '8': '2rem',      // 32px
      '9': '2.5rem',    // 40px
      '10': '3rem',     // 48px
      '11': '3.5rem',   // 56px
      '12': '4rem',     // 64px
      '14': '5rem',     // 80px
      '16': '6rem',     // 96px
      '20': '8rem',     // 128px
      '24': '10rem',    // 160px
      '32': '13rem',    // 208px
    },
    
    // Border radius
    borderRadius: {
      none: '0',
      sm: '0.25rem',    // 4px
      md: '0.375rem',   // 6px
      lg: '0.5rem',     // 8px
      xl: '0.75rem',    // 12px
      '2xl': '1rem',    // 16px
      '3xl': '1.5rem',  // 24px
      full: '9999px',
    },
    
    // Shadows
    boxShadow: {
      sm: '0 1px 2px rgba(2, 6, 23, 0.04)',
      md: '0 2px 4px rgba(2, 6, 23, 0.06), 0 1px 2px rgba(2, 6, 23, 0.04)',
      lg: '0 4px 6px rgba(2, 6, 23, 0.06), 0 2px 4px rgba(2, 6, 23, 0.04)',
      xl: '0 10px 15px rgba(2, 6, 23, 0.08), 0 4px 6px rgba(2, 6, 23, 0.04)',
      '2xl': '0 20px 25px rgba(2, 6, 23, 0.1), 0 10px 10px rgba(2, 6, 23, 0.04)',
      inner: 'inset 0 2px 4px rgba(2, 6, 23, 0.06)',
      none: 'none',
    },
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Z-index layers
  zIndex: {
    hide: '-1',
    auto: 'auto',
    base: '0',
    docked: '10',
    dropdown: '1000',
    sticky: '1100',
    banner: '1200',
    overlay: '1300',
    modal: '1400',
    popover: '1500',
    skipLink: '1600',
    toast: '1700',
    notification: '1800',
    tooltip: '1900',
  },

  // Animasi
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      default: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
};

export type DesignTokens = typeof designTokens;
