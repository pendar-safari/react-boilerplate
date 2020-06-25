const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

module.exports = ({ webpack: { mode } }) => {
  const development = {}
  const production = {
    plugins: [autoprefixer, cssnano],
  }

  return mode === 'production' ? production : development
}
