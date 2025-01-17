/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      'viet': ["Be Vietnam Pro"],
      },
      colors: {
        'china-black': '#161616',
        'raisin-black': '#242424',
        'topaz': '#F06B41',
        'dark-topaz': '#B03D18'
      },
    }
  },
  plugins: [],
}

