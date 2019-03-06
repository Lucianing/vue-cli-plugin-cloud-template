/**
 * Hua-Cloud ESLint Vue 规则
 *
 * 包含所有 ESLint Vue 规则
 *
 * @fixable 表示此配置支持 --fix
 * @off 表示此配置被关闭了，并且后面说明了关闭的原因
 */
module.exports = {
  // 以当前目录为根目录，不再向上查找 .eslintrc.js
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['plugin:vue/essential'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //
    //
    // 可能的错误
    //
    // 禁止重复的二级键名
    'vue/no-dupe-keys': 'error',
    // 禁止出现语法错误
    'vue/no-parsing-error': 'error',
    // 禁止覆盖保留字
    'vue/no-reserved-keys': 'error',
    // 组件的 data 属性的值必须是一个函数
    'vue/no-shared-component-data': 'error',
    // 禁止 <template> 使用 key 属性
    'vue/no-template-key': 'error',
    // render 函数必须有返回值
    'vue/require-render-return': 'error',
    // prop 的默认值必须匹配它的类型
    'vue/require-valid-default-prop': 'error',
    // 计算属性必须有返回值
    'vue/return-in-computed-property': 'error',
    // template 的根节点必须合法
    'vue/valid-template-root': 'error',
    // v-bind 指令必须合法
    // v-bind 在2.6版本以后可以写动态属性
    'vue/valid-v-bind': 'off',
    // v-cloak 指令必须合法
    'vue/valid-v-cloak': 'error',
    // v-else-if 指令必须合法
    'vue/valid-v-else-if': 'error',
    // v-else 指令必须合法
    'vue/valid-v-else': 'error',
    // v-for 指令必须合法
    'vue/valid-v-for': 'error',
    // v-html 指令必须合法
    'vue/valid-v-html': 'error',
    // v-if 指令必须合法
    'vue/valid-v-if': 'error',
    // v-model 指令必须合法
    'vue/valid-v-model': 'error',
    // v-on 指令必须合法
    'vue/valid-v-on': 'error',
    // v-once 指令必须合法
    'vue/valid-v-once': 'error',
    // v-pre 指令必须合法
    'vue/valid-v-pre': 'error',
    // v-show 指令必须合法
    'vue/valid-v-show': 'error',
    // v-text 指令必须合法
    'vue/valid-v-text': 'error',

    //
    //
    // 最佳实践
    //
    // @fixable html 的结束标签必须符合规定
    'vue/html-end-tags': 'error',
    // 计算属性禁止包含异步方法
    'vue/no-async-in-computed-properties': 'error',
    // 禁止出现难以理解的 v-if 和 v-for
    'vue/no-confusing-v-for-v-if': 'error',
    // 禁止出现重复的属性
    'vue/no-duplicate-attributes': 'error',
    // 禁止在计算属性中对属性修改
    // @off 太严格了
    'vue/no-side-effects-in-computed-properties': 'off',
    // 禁止在 <textarea> 中出现 {{message}}
    'vue/no-textarea-mustache': 'error',
    // 组件的属性必须为一定的顺序
    'vue/order-in-components': 'error',
    // <component> 必须有 v-bind:is
    'vue/require-component-is': 'error',
    // prop 必须有类型限制
    'vue/require-prop-types': 'error',
    // v-for 指令的元素必须有 v-bind:key
    'vue/require-v-for-key': 'error',
    // 没使用的组件
    'vue/no-unused-components': 'error',
    // 没使用的变量
    'vue/no-unused-vars': 'error',
    // v-for不能同级使用v-if
    'vue/no-use-v-if-with-v-for': 'error',
    // prop声明类型
    'vue/require-prop-type-constructor': 'error',
    // 方法精确
    'vue/use-v-on-exact': 'error',
    // 不能使用v-html 防止xss
    'vue/no-v-html': 'error',
    
    //
    //
    // 风格问题
    //
    // @fixable 限制自定义组件的属性风格
    'vue/attribute-hyphenation': 'error',
    // html 属性值必须用双引号括起来
    'vue/html-quotes': 'error',
    // @fixable 没有内容时，组件必须自闭和
    // @off 和prettier冲突
    'vue/html-self-closing': 'error',
    // 限制每行允许的最多属性数量
    'vue/max-attributes-per-line': 'error',
    // @fixable 限制组件的 name 属性的值的风格
    'vue/name-property-casing': 'error',
    // @fixable 禁止出现连续空格
    'vue/no-multi-spaces': 'error',
    // @fixable 限制 v-bind 的风格, 简写风格
    'vue/v-bind-style': 'error',
    // @fixable 限制 v-on 的风格, 简写风格
    'vue/v-on-style': 'error',
    // @fixable 模板属性排序
    'vue/attributes-order': 'error',
    // @fixable 模板不能写this
    'vue/this-in-template': 'error',
    // 闭合标签换行
    'vue/html-closing-bracket-newline': 'error',
    // 闭合标签尖括号前空格
    'vue/html-closing-bracket-spacing': 'error',
    // 内容缩进
    'vue/html-indent': 'error',
    // 内容换行
    'vue/multiline-html-element-content-newline': 'error',
    // 表达式空格
    'vue/mustache-interpolation-spacing': 'error',
    // 组件名称大驼峰
    'vue/name-property-casing': 'error',
    // 属性等号前后不能有空格
    'vue/no-spaces-around-equal-signs-in-attribute': 'error',
    // good: <div v-for="i in 5"></div> <div v-for="j in 5"></div>
    'vue/no-template-shadow': 'error',
    // 属性名称
    'vue/prop-name-casing': 'off',
    // prop属性类型必须定义类型
    'vue/require-default-prop': 'error',
    // 内容换行
    'vue/singleline-html-element-content-newline': 'error',
    // 关闭模板组件名中划线
    'vue/component-name-in-template-casing': 'off',
    // script-indent
    'vue/script-indent': 'error',
    
    //
    // 变量
    //
    // 定义了的 jsx element 必须使用
    'vue/jsx-uses-vars': 'error',
  },
};
