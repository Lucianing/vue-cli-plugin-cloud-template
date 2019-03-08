/**
 * @file:   从git拉取项目，然后做相应的更改脚本
 * @author: lzc
 * @date:   2019-03-08
 */

const { run } = require('runjs')
const path = require('path')
const globby = require('globby')
const fsExtra = require('fs-extra')

// 进入generator目录 拉取文件
run('cd generator && git clone https://github.com/hua-cloud/cloud-template.git')

const start = async() => {
  // 获取所有文件
  const files = await globby(['**/*'], {
    onlyFiles: false,
    cwd: path.resolve(__dirname, './generator/cloud-template'),
    dot: true
  })
  
  for (const rawPath of files) {
    // 把带 . 开头的文件夹和文件转成 _ 开头
    const targetPath = rawPath.split('/').map(filename => {
      if (filename.charAt(0) === '.' && filename.charAt(1) !== '.') {
        return `_${filename.slice(1)}`
      }
      return filename
    }).join('/')
    
    try {
      // 复制文件
      await fsExtra.copy(`./generator/cloud-template/${rawPath}`, `./generator/template/${targetPath}`, { overwrite: true })
      console.log('复制成功！')
    } catch (err) {
      console.error(err)
    }
  }
  
  try {
    // 读取package.json
    const packageObj = await fsExtra.readJson('./generator/template/package.json')
    delete packageObj.name
    delete packageObj.version
    delete packageObj.private
    // 写入配置
    await fsExtra.writeJson('./generator/config.json', packageObj, { spaces: 2 })
  } catch (e) {
    console.error(e)
  }
  
  try {
    await fsExtra.remove('./generator/template/_git')
    console.log('成功删除template目录下的_git目录')
    await fsExtra.remove('./generator/template/package.json')
    console.log('成功删除template目录下的package.json')
    await fsExtra.remove('./generator/template/public')
    console.log('成功删除template目录下的public目录')
    await fsExtra.remove('./generator/cloud-template')
    console.log('成功删除cloud-template目录')
  } catch (e) {
    console.error(e)
  }
}
start()

