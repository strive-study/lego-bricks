const baseConfig = require('./rollup.config')
const { name } = require('../package.json')

const file = type => `dist/${name}.${type}.js`

module.exports = {
  ...baseConfig,
  output: {
    name: 'LegoComponents',
    file: file('umd'),
    format: 'umd',
    globals: {
      vue: 'Vue',
      'lodash-es': '_'
    },
    exports: 'named'
  }
}
