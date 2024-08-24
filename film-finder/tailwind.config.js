/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue-dark': '#3D5A80',
        'custom-blue-light': '#98C1D9',
        'custom-orange': '#EE6C4D',
        'custom-white': '#FFFFFF',
        'custom-blue': '#293241',
      },
    },
  },
  plugins: [],
}

