/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'serif': ['Kanit'],
      'sans': ['Kanit']
    },
    extend: {
      colors: {
        'background': '#F0EEDF',
        'primary-text': '#03304F',
      }
    },
  },
  plugins: [],
}

