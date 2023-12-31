const baseTailwindConfig = require('./baseTailwindConfig')

module.exports = {
  content: [
    './assets/**/*.css',
    './components/*.{vue,js}',
    './components/**/*.{vue,js}',
    './pages/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './*.{vue,js,ts,html}',
  ],
  ...baseTailwindConfig,
}
