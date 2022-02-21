module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        greenCyan: '#009B72',
        greenCyanHover: '#004e39',
        pursianBlue: '#1B2B42',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
