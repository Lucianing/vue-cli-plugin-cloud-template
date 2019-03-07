/**
 * @file: 静态路由配置
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
