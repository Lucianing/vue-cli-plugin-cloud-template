import Vue from 'vue';
import App from '@/app';
import router from '@/router';
import store from '@/store';

import 'normalize.css/normalize.css';
import '@/assets/style/index.scss';

// [必选插件] element-ui
import '@/plugins/element';
// [可选插件] ajax
import '@/plugins/ajax';

import '@/filters';
import '@/directives';
import '@/components';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
