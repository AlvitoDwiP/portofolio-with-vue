/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F4F6FB',
        surface: '#FFFFFF',
        primaryBg: 'var(--color-bg-primary)',
        secondaryBg: 'var(--color-bg-secondary)',
        textPrimary: 'var(--color-text-primary)',
        textSecondary: 'var(--color-text-secondary)',
        textMuted: 'var(--color-text-muted)',
        text: {
          DEFAULT: 'var(--color-text-primary)',
          muted: 'var(--color-text-muted)',
        },
        accent: '#6C63FF',
        primary: '#2D6A4F',
        brand: {
          50: '#ffffff',
          100: '#f4f6fb',
          200: '#eff3fb',
          300: '#dde3f0',
          400: '#d8f3dc',
          500: '#2d6a4f',
          600: '#40916c',
          700: '#8896ae',
          800: '#4a5568',
          900: '#1a1a2e',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
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
