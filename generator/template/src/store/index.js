/**
 * @file:   文件描述
 * @author: lzc
 * @date:   2019-02-27
 */
import Vue from 'vue';
import Vuex from 'vuex';
import { toLower } from 'lodash';

import getters from './getters';

Vue.use(Vuex);

const modules = {};
const ctx = require.context('./modules', true, /index.js$/);

ctx.keys().forEach(key => {
  const moduleName = toLower(key.replace(/(\.\/|\.js)/g, ''));
  modules[moduleName] = ctx(key).default;
});

console.log(modules);
const store = new Vuex.Store({
  modules,
  getters,
});

export default store;
