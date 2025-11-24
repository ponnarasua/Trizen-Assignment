/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom': '800px',
      },
      colors: {
        amazon: {
          dark: '#131921',
          orange: '#ff9900',
          'orange-hover': '#f3a847',
          yellow: '#febd69',
          link: '#007185',
        },
      },
    },
  },
  plugins: [],
}
