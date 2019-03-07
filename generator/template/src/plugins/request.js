/**
 * @file:   文件描述
 */

import axios from 'axios';

// 创建实例
const service = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 600000, // 请求超时时间
});

// 请求拦截
service.interceptors.request.use(
  config => {
    // 在请求之前做一些处理, 比如携带 token
    return config;
  },
  error => {
    // 请求发送失败
    console.error(error);
    return Promise.reject(error);
  },
);

// 响应拦截
service.interceptors.response.use(
  response => {
    const res = response.data;
    return res;
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '请求错误';
          break;
        case 401:
          error.message = '未授权，请登录';
          break;
        case 403:
          error.message = '拒绝访问';
          break;
        case 404:
          error.message = `请求地址出错: ${error.response.config.url}`;
          break;
        case 408:
          error.message = '请求超时';
          break;
        case 500:
          error.message = '服务器内部错误';
          break;
        case 501:
          error.message = '服务未实现';
          break;
        case 502:
          error.message = '网关错误';
          break;
        case 503:
          error.message = '服务不可用';
          break;
        case 504:
          error.message = '网关超时';
          break;
        case 505:
          error.message = 'HTTP版本不受支持';
          break;
        default:
          break;
      }
    }
    console.error(error);
    return Promise.reject(error);
  },
);

export default service;
