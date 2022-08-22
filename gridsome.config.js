const tailwind = require('tailwindcss');

module.exports = {
  siteName: 'Briix Group Properties',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwind()]
      }
    }
  }
}
