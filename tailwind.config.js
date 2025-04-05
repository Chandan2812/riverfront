/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        'safe': 'env(safe-area-inset-bottom)', // this adds pb-safe
      },
    },
  },
  plugins: [],
}

