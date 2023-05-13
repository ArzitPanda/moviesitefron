/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        gold: '#FFD700',
        'deep-red': '#B30000',
        'light-gray': '#CCCCCC',
        'medium-gray': '#888888',
        'dark-gray': '#333333',
      },
    },
  },
  plugins: [],
}