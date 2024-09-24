/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitey: '#FDF6E3',
        black: '#333333',
        orange: '#D35400',
        peach: '#F7C8A7',
        sand: '#FFEEDB',
        teal: '#008080',
      }
    },
  },
  plugins: [],
}

