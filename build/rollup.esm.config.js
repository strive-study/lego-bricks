const baseConfig = require('./rollup.config')
const { name } = require('../package.json')

const file = type => `dist/${name}.${type}.js`
module.exports = {
  ...baseConfig,
  output: {
    name,
    file: file('esm'),
    format: 'es'
  }
}
