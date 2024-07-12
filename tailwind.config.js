/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B0D17',
        accent: '#D0D6F9',
        white: '#FFFFFF',
      },
      fontFamily: {
        'barlow-regular': ['Barlow, sans-serif'],
        'barlow-condensed': ['Barlow Condensed, sans-serif'],
        'bellefair-regular': ['Bellefair, serif'],
      },
      screens: {
        lg: '1100px',
      },
    },
  },
  plugins: [],
};
