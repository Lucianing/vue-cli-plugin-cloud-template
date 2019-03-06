/**
 * @file:   文件生成
 * @author: lzc
 * @date:   2019-03-04
 */
const fs = require('fs')

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

// 脚本命令
const scripts = {
  'dev': 'vue-cli-service serve',
  'build': 'vue-cli-service build',
  'lint': 'vue-cli-service lint',
  'lint:style': 'vue-cli-service lint:style',
  'docs:build': 'vuepress-jsdoc --rm ./documentation/code  --source=./src --dist=./documentation --title=\'vue-huacloud-template\' --exclude=*.test.js,exclude.js',
  'docs:dev': 'vuepress dev documentation',
  'docs': 'yarn run docs:build && yarn run docs:dev',
  'commit': 'commit'
}

// 开发依赖
const devDependencies = {
  '@ascendancyy/vue-cli-plugin-stylelint': '^1.1.2',
  '@commitlint/cli': '^7.5.2',
  '@commitlint/config-conventional': '^7.5.0',
  '@types/lodash': '^4.14.121',
  '@vue/cli-plugin-babel': '^3.4.0',
  '@vue/cli-plugin-eslint': '^3.4.0',
  '@vue/cli-service': '^3.4.0',
  'babel-eslint': '^10.0.1',
  'babel-plugin-jsx-v-model': '^2.0.3',
  'babel-plugin-syntax-jsx': '^6.18.0',
  'babel-plugin-transform-vue-jsx': '^3.7.0',
  'eslint': '^5.8.0',
  'eslint-plugin-vue': '^5.2.2',
  'husky': '^1.3.1',
  'node-sass': '^4.9.0',
  'postcss-pxtorem': '^4.0.1',
  'sass-loader': '^7.1.0',
  'sass-resources-loader': '^2.0.0',
  'standard-version': '^5.0.0',
  'stylelint-config-standard': '^18.2.0',
  'svg-sprite-loader': '^4.1.3',
  'uglifyjs-webpack-plugin': '^2.1.2',
  'vue-template-compiler': '^2.6.6',
  'vuepress': '^0.14.9',
  'vuepress-jsdoc': '^1.6.0'
}

const newDependencies = {
  'axios': '^0.18.0',
  'element-ui': '^2.5.4',
  'lodash': '^4.17.11',
  'normalize.css': '^8.0.1',
  'nprogress': '^0.2.0',
  'vue': '^2.6.6',
  'vue-router': '^3.0.1',
  'vuex': '^3.0.1'
}

module.exports = (api, options, rootOptions, opts) => {
  // 修改 `package.json` scripts
  Object.keys(scripts).forEach(key => {
    api.extendPackage({
      'scripts': {
        [key]: scripts[key]
      }
    })
  })
  
  // 开发依赖
  Object.keys(devDependencies).forEach(dependencyName => {
    if (!api.hasPlugin(dependencyName)) {
      api.extendPackage({
        'devDependencies': {
          [dependencyName]: devDependencies[dependencyName]
        }
      })
    }
  })
  
  // 生产依赖包
  Object.keys(newDependencies).forEach(dependencyName => {
    if (!api.hasPlugin(dependencyName)) {
      api.extendPackage({
        'dependencies': {
          [dependencyName]: newDependencies[dependencyName]
        }
      })
    }
  })
  
  // gitHooks 提交配置
  api.extendPackage({
    'gitHooks': {
      'pre-commit': 'lint-staged'
    },
    'lint-staged': {
      '*.js': [
        'vue-cli-service lint',
        'git add'
      ],
      '*.vue': [
        'vue-cli-service lint',
        'git add'
      ],
      '*.{vue,htm,html,css,sss,less,scss}': [
        'vue-cli-service lint:style',
        'git add'
      ]
    },
    'husky': {
      'hooks': {
        'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS'
      }
    }
  })
  
  // 删除原有 eslintConfig 配置
  api.extendPackage(page => {
    delete page.eslintConfig
    delete page.postcss
    return page
  })
  
  api.postProcessFiles(files => {
    const fileList = Object.keys(files)
    srcFileList = fileList.filter(file => /^src\//.test(file))
  })
  
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

