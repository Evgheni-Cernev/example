const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      bagroundColor: '#050505',
      white: '#fff',
      gray: '#878480;',
      black: '#000000',
      bgColor: '#1b1a1b',
      yellow: '#FFDD00',
      transparent: 'transparent',
      // 'gray-dark': '#273444',
      // gray: '#8492a6',
      // 'gray-light': '#d3dce6',
    },
    backgroundImage: {
      'hero-pattern': "url('/src/img/hero.jpg')",
    },
    extend: {
      height: {
        128: '32rem',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('not-last', '&:not(:last-child)')
    }),
  ],
}
