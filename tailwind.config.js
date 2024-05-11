const colors = require('./src/shared/theme/defaults.json');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors,
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        fadeInSlow: 'fadeIn 3s ease-in-out',
        fadeShowFiveSeconds: 'fadeInOut 5s ease-in-out',
        fadeShowTenSeconds: 'fadeInOut 10s ease-in-out',
        fadeShowFifteenSeconds: 'fadeInOut 15s ease-in-out',
        marqueeRepeat: 'marquee 25s linear infinite',
        marqueeReverseRepeat: 'marqueeReverse 25s linear infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeInOut: {
          '0%': { opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(20%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(20%)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
