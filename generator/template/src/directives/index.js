import Vue from 'vue';

// 自动加载 global 目录下的 .js 结尾的文件
const ctx = require.context('./global', true, /\.(js)$/);
ctx.keys().forEach(key => {
  const directiveConfig = ctx(key);
  // 兼容 import export 和 require module.export 两种规范
  const ctrl = directiveConfig.default || directiveConfig;
  console.log('全局注册指令:', ctrl.name);
  Vue.directive(ctrl.name, ctrl);
});
