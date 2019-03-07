/**
 * @file: 路由配置入口文件
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

// 进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 路由数据
import routes from './routes';

Vue.use(VueRouter);

/**
 * 动态路由
 */
const ctx = require.context('./modules', true, /\.js$/);

ctx.keys().forEach(route => {
  let routeModuleConfig = ctx(route);
  if (route === './index.js' || route === './routes.ts') return;
  if (Array.isArray(routeModuleConfig.default)) {
    routeModuleConfig.default.forEach(subRoute => {
      routes.push(subRoute);
    });
  } else {
    routes.push(routeModuleConfig.default);
  }
});

// 导出路由 在 main.js 里使用
const router = new VueRouter({
  routes,
});

/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach((to, from, next) => {
  // 进度条
  NProgress.start();
  next();
  NProgress.done();
});

export default router;
