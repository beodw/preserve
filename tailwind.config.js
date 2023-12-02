/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'preserve-primary': '#F2EEEE',
        'preserve-secondary': '#096288',
      }
    }
  },
  plugins: [],
}