/*
 * @Author: liuchao
 * @LastEditors: liuchao
 * @Description: 静态路由配置
 * @Email: liuchao@hua-cloud.com.cn
 * @Company: hua-cloud
 * @Date: 2019-03-04 10:11:38
 * @LastEditTime: 2019-03-04 22:21:42
 */

import layout from '@/layout/default';

export default [
  {
    path: '/',
    name: 'Layout',
    component: layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/dashboard'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
  },
];
