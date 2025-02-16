// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
// eslint-disable-next-line import/no-commonjs
const tail = require("lodash/tail");

module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: true
    }]
  ],
  plugins: [
    ["import", {
      libraryName: "taro-ui",
      customName: (name) => {
        const path = tail(name.split('-')).join('/');
        const fix = {
          'float/layout': 'float-layout'
        }[path]
        if (fix && fix === 'no-import') return false
        const fileName = fix ?? path
        if (!fileName) return false
        return `taro-ui/lib/components/${fileName}`;
      },
      style: (name) => {
        // name 是 customName 的 return
        const compName = name.replace('taro-ui/lib/components/', '')
        const fix = {
          'list/item': 'no-import',
          'float/layout': 'float-layout'
        }[compName]
        if (fix && fix === 'no-import') return false
        const fileName = fix ?? compName
        if (!fileName) return false
        return `taro-ui/dist/style/components/${fileName}.scss`
      }
    }, 'taro-ui']
  ]
}
