/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0f1115',
        surface: '#171b22',
        primaryBg: 'var(--color-bg-primary)',
        secondaryBg: 'var(--color-bg-secondary)',
        textPrimary: 'var(--color-text-primary)',
        textSecondary: 'var(--color-text-secondary)',
        text: {
          DEFAULT: '#edf1f7',
          muted: '#9aa3b2',
        },
        accent: '#c89b60',
        brand: {
          50: '#f8f3ec',
          100: '#efe2cf',
          200: '#e3c9a3',
          300: '#d6b178',
          400: '#cb9f62',
          500: '#c89b60',
          600: '#ae7f45',
          700: '#8b6336',
          800: '#654827',
          900: '#43301c',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        gutter: 'var(--space-gutter)',
        section: 'var(--space-section)',
      },
      borderRadius: {
        card: 'var(--radius-card)',
        lg: 'var(--radius-lg)',
        xl: '1.125rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        glass: 'var(--shadow-glass)',
        glow: '0 0 0 1px var(--glass-border), var(--shadow-soft)',
      },
      backdropBlur: {
        glass: 'var(--blur-base)',
        strong: 'var(--blur-strong)',
      },
    },
  },
  plugins: [],
}
