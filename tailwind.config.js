/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './styles/**/*.css'],
  theme: {
    extend: {
      colors: {
        ink: '#0d0c07',
        parchment: '#f4edd9',
        gold: '#c79a3a',
        terracotta: '#bf4826',
        stone: '#8a7a60',
        surface: '#ede6d2',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
