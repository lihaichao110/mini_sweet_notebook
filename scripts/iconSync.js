/* eslint-disable import/no-commonjs */
const fs = require('fs')
const path = require('path')

const fetch = require('node-fetch')
const prompts = require('prompts')

const pkg = require('../package')

const getFontFaceString = base64 => `/**
 *  此文件不要手动改，用syncIcon脚本同步
 **/

// stylelint-disable
@font-face {
  font-family: 'wx-applet-symbols';
  src: url(data:application/font-woff2;charset=utf-8;base64,${base64})format('woff2');
  font-style: normal;
  font-weight: normal;
}

.lhc-${pkg.name} {
  display: inline-block;
  font-family: wx-applet-symbols;
}`

const getTypesString = icons => {
  const typeString = icons.map(icon => `'${icon}'`).join('\n  | ')

  return `/**
 * 此文件不要手动改，用syncIcon脚本同步
 * */

export type HIconType =
  | ${typeString}
`
}

const PREFIX = `lhc-${pkg.name}-`

const EXPORTED_PATH = 'src/styles/icons.scss'

const EXPORTED_TYPES_PATH = 'src/types/icons.ts'

const validateUrl = url => (/\/(font.*)\.css/.test(url) ? true : '地址不对哦')
const questions = [
  {
    type: 'text',
    name: 'url',
    message: '输入下iconfont的fontClass地址？',
    validate: validateUrl,
  },
]

const main = async () => {
  const { url } = await prompts(questions)

  // fetch 字体相关文件
  const iconsScss = await fetch(`http:${url}`)
  const woff2 = await fetch(`http:${url.replace(/\.css$/, '.woff2')}`)

  // 将woff2然后转成base64
  const base64String = (await woff2.buffer()).toString('base64')

  // 读取icons.scss文件
  const originCssContent = (await iconsScss.buffer()).toString('utf-8')

  // 整理icons.scss内容
  const icons = originCssContent.trim('\n\n').split('\n\n').slice(2)

  const sortedIcons = icons
    .map(item => item.replace(/:before/g, '::before'))
    .map(item => item.replace(/"/g, "'"))
    // eslint-disable-next-line no-nested-ternary
    .sort((a, b) => (a === b ? 0 : a > b ? 1 : -1))

  const sortedIconNameList = sortedIcons
    .map(icon => icon.split('::')[0].slice(1))
    .map(icon => icon.replace(new RegExp(`^${PREFIX}`), ''))


  // 抓出非法icon
  const invalidNameIcons = sortedIcons.filter(
    item => !new RegExp(`.lhc-${pkg.name}-[a-z]+`).test(item),
  )
  if (invalidNameIcons.length) {
    console.log('下列icon命名不规范')
    console.log(invalidNameIcons.map(item => item.split('::')[0]))
  }
  fs.writeFileSync(
    path.join(process.cwd(), EXPORTED_PATH),
    `${[getFontFaceString(base64String), ...sortedIcons].join('\n\n')}\n`,
  )
  console.log('字体 样式文件更新成功')

  fs.writeFileSync(
    path.join(process.cwd(), EXPORTED_TYPES_PATH),
    getTypesString(sortedIconNameList),
  )
  console.log('字体 样式类型文件更新成功')
}

main()
