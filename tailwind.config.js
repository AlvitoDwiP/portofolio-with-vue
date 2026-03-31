/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0f1115',
        surface: '#171b22',
        text: {
          DEFAULT: '#edf1f7',
          muted: '#9aa3b2',
        },
        accent: '#7ca18f',
        brand: {
          50: '#f3f7f5',
          100: '#e4ece7',
          200: '#c8d9d0',
          300: '#a9c0b4',
          400: '#8eaa9c',
          500: '#7ca18f',
          600: '#628270',
          700: '#4e6659',
          800: '#41524a',
          900: '#38463f',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        gutter: '1.5rem',
        section: '5rem',
      },
      borderRadius: {
        lg: '0.875rem',
        xl: '1.125rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255, 255, 255, 0.04), 0 10px 30px rgba(0, 0, 0, 0.18)',
      },
    },
  },
  plugins: [],
}
