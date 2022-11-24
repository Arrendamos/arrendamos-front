module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primaryColor: '#009DDC',
        primaryColorHover: '#066286',
        pursianBlue: '#1B2B42',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
