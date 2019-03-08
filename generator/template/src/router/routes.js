/**
 * @Description: 静态路由配置
 */

import layout from '@/layout/default';

export default [
  {
    path: '/',
    name: 'Layout',
    component: layout,
    redirect: '/dashbord',
    children: [
      {
        path: 'dashbord',
        name: 'Dashbord',
        component: () => import('@/views/dashbord'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
  },
];
