/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4da6ff',
          DEFAULT: '#0078ff',
          dark: '#0057b8',
        },
        arihant: {
          red: '#ed4c4c',
          brown: 'rgba(80, 17, 9, 0.52)',
          footerBrown: 'rgba(115, 43, 33, 0.4)',
          cream: '#f6edd4',
          yellow: '#e9c635',
          gray: '#d9d9d9',
        },
      },
      boxShadow: {
        'custom': '0px 4px 4px #888888ff',
        'product': '0px 4px 48px #000000',
      },
    },
  },
  plugins: [],
}