/*
 * @file: 自动加载全局过滤器
 */
import Vue from 'vue';

// 自动加载 global 目录下的 .js 结尾的文件
const ctx = require.context('./global', true, /\.(js)$/);
ctx.keys().forEach(key => {
  const filter = ctx(key);
  console.log('全局注册过滤器:', key);
  Vue.filter(key, filter);
});
