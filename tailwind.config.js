/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bggrey: '#8A9099',
        bggreylight: '#F2F4F7',
      },
      boxShadow:{
        shadow:' 0px 12px 16px -4px rgba(0, 0, 0, 0.09)'

      }
    },
  },
  plugins: [],
}