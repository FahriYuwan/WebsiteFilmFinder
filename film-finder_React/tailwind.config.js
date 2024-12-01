/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1F2937',
        'dark-hover': '#334155',
        'dark-text': '#F9FAFB',
        'dark-accent': '#EE6C4D',
        'dark-border': '#374151',
        'dark-card-bg': '#2D3748',
        'dark-card-border': '#4A5568',
      }
    }
  },
  plugins: [],
}