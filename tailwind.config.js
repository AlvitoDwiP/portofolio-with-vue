/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F4EBDD',
        surface: '#FBF6EE',
        primaryBg: 'var(--color-bg-primary)',
        secondaryBg: 'var(--color-bg-secondary)',
        textPrimary: 'var(--color-text-primary)',
        textSecondary: 'var(--color-text-secondary)',
        textMuted: 'var(--color-text-muted)',
        text: {
          DEFAULT: 'var(--color-text-primary)',
          muted: 'var(--color-text-muted)',
        },
        accent: '#1F5C4C',
        brand: {
          50: '#fbf6ee',
          100: '#f4ebdd',
          200: '#efe4d3',
          300: '#d8cbb8',
          400: '#a9c3b5',
          500: '#1f5c4c',
          600: '#17473b',
          700: '#6f655b',
          800: '#2e2a26',
          900: '#211d1a',
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
