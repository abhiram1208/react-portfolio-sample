/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',           // keep this for our dark mode toggle
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#10b981',
      },
    },
  },
  plugins: [],
}