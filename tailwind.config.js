/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'detail-bg':
          "url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//backgrounds/greyfade.jpg')",
      },
      colors: {
        primary: '#13161b',
        secondary: 'rgb(44, 55, 61)',
      },
    },
  },
  plugins: [],
};
