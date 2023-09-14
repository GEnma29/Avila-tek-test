/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './context/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      button: {
        primary:
          'rounded bg-indigo-500 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500',
      },
      colors: {
        neutral: '#5F5F5F',
        black: '#333',
        primary: {
          50: '#FA7D8A',
          100: '#E95867',
          200: '#E7283C',
          300: '#E2081E',
          400: '#C21527',
          500: '#8C131F',
          600: '#671B23',
          700: '#4A1D22',
        },
        secondary: {
          100: '#DAD6D3',
          200: '#C8C2BE',
          300: '#B5B0AD',
          400: '#9B928D',
          500: '#867D77',
          600: '#68605B',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};
