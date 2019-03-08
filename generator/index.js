/**
 * @file:   文件生成
 * @author: lzc
 * @date:   2019-03-04
 */
const fs = require('fs')
const packageObj = require('./config.json')

// 原来cli生成的文件
const originalFiles = [
  'src/App.vue',
  'src/router.js',
  'src/store.js',
  'src/assets/logo.png',
  'src/components/HelloWorld.vue',
  'src/views/About.vue',
  'src/views/Home.vue'
]

let srcFileList = []

module.exports = api => {
  // 扩展
  api.extendPackage(packageObj)
  
  // 删除原有 eslintConfig 配置
  api.extendPackage(page => {
    delete page.eslintConfig
    delete page.postcss
    return page
  })
  
  // 获取生成项目的src文件
  api.postProcessFiles(files => {
    const fileList = Object.keys(files)
    srcFileList = fileList.filter(file => /^src\//.test(file))
  })
  
  // 删除一些文件
  api.onCreateComplete(() => {
    srcFileList.forEach(file => {
      if (originalFiles.indexOf(file) >= 0) {
        const currentPath = api.resolve(file)
        try {
          fs.unlinkSync(currentPath)
          console.log('成功删除：', file)
        } catch (err) {
          console.error(err)
        }
      }
    })
  })
  
  api.render('./template')
}

