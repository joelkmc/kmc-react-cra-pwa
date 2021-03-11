module.exports = {
  purge: ['./src/**/*.tsx', './public/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: '320px',
      },
      colors: {
        kmcOrange: '#f99d3a',
        kmcYellow: '#f2c94c',
      },
      fontFamily: {
        proxiRegular: ['ProximanovaRegular'],
        proxiSemiBold: ['ProximanovaSemiBold'],
        proxiExtraBold: ['ProximanovaExtraBold'],
        sans: [
          'ProximanovaRegular',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
