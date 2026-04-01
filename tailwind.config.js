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
