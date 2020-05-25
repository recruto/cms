const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './index.html',
    './App.vue',
    './components/**/*.vue',
    './views/**/*.vue',
    './main.js',
    './src/**/*.js',
  ],

  defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
})

module.exports = {
  plugins: [require('tailwindcss'), require('autoprefixer'), purgecss],
}
