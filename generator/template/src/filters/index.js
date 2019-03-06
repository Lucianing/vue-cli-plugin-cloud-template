/*
 * @Author: liuchao
 * @LastEditors: liuchao
 * @Description: 自动加载全局过滤器
 * @Email: liuchao@hua-cloud.com.cn
 * @Company: hua-cloud
 * @Date: 2019-03-04 10:11:38
 * @LastEditTime: 2019-03-04 22:20:11
 */
import Vue from 'vue';

// 自动加载 global 目录下的 .js 结尾的文件
const ctx = require.context('./global', true, /\.(js)$/);
ctx.keys().forEach(key => {
  const filter = ctx(key);
  console.log('全局注册过滤器:', key);
  Vue.filter(key, filter);
});
