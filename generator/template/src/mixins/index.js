/**
 * @file: 自动全局混入
 */

import Vue from 'vue';

// 自动加载 global 目录下的 .js 结尾的文件
const ctx = require.context('./global', true, /\.(js)$/);
ctx.keys().forEach(key => {
  const mixin = ctx(key);
  console.log('全局混入:', key);
  Vue.mixin(mixin);
});
