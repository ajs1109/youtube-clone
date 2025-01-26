/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    "./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'roboto': ['roboto','arial','sans-serif'],
    },
    extend: {
      backgroundColor: {
        dark: '#1a1a1a',
        light: '#ffffff'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}