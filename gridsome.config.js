const tailwind = require('tailwindcss');

module.exports = {
  siteName: 'Briix Group Properties',
  siteDescription: 'Briix Group Properties Homepage Website',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwind()]
      }
    }
  }
}
