/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#effef8',
          100: '#d8fff0',
          200: '#b5fde0',
          300: '#84f9c7',
          400: '#49edaa',
          500: '#22d38f',
          600: '#18aa73',
          700: '#15855c',
          800: '#15694b',
          900: '#14563f',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(148, 163, 184, 0.08), 0 20px 60px rgba(2, 6, 23, 0.55)',
      },
    },
  },
  plugins: [],
}
