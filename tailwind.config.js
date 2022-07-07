/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './develop/layout/**/*.html',
    './develop/js/**/*.js',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: (theme) => ({
        'stats-image-mobile': "url('./assets/images/image-header-mobile.jpg')",
        'stats-image-desktop':
          "url('./assets/images/image-header-desktop.jpg')",
      }),
      colors: {
        veryDarkBlue: 'hsl(233, 47%, 7%)',
        darkDesaturatedBlue: 'hsl(244, 38%, 16%)',
        softViolet: 'hsl(277, 64%, 61%)',

        neutral: 'hsl(0, 0%, 100%)',
        mainParaWhite: 'hsla(0, 0%, 100%, 0.75)',
        statsWhite: 'hsla(0, 0%, 100%, 0.6)',
      },
      fontFamily: {
        inter: ['Inter', '"sans-serif"'],
        deca: ['"Lexend Deca"', '"sans-serif"'],
      },
    },
  },
  plugins: [],
};
