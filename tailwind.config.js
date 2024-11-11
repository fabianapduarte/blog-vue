/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      serif: ['Cormorant', 'ui-serif'],
      sans: ['Inter', 'ui-sans']
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#A66F5B',
          foreground: '#fafafa'
        },
        'primary-light': {
          DEFAULT: '#E3D0CA',
          foreground: '#151515'
        }
      }
    }
  },
  plugins: []
}
