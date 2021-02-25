// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from '@/App';
import router from '@/apps/main-app/router/index.js';
import filter from '@/utils/filter';
import store from '@/apps/main-app/store/index.js';
import vuetify from '@/plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  filter,
  router,
  vuetify,
  store
}).$mount('#app');
