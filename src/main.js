/*
 * @Author: your name
 * @Date: 2021-09-06 16:21:42
 * @LastEditTime: 2021-09-08 16:22:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-project/src/main.js
 */
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import store from '@/stores/store';
import { defaultLanguage } from '@/utils/config';
import { H5ENV, NotH5 } from '@/utils/uniEnv';
import messages from '@/i18n';
import '@/filters/';
import App from './App';
import { router, RouterMount } from '@/routers/router.js'; //路径换成自己的

Vue.config.productionTip = false;

Vue.use(VueI18n);
Vue.use(router);

const i18n = new VueI18n({
  locale: store.state.language.chooseLanguage || defaultLanguage,
  messages,
});

App.mpType = 'app';

const app = new Vue({
  ...App,
  store,
  i18n,
});

H5ENV(() => RouterMount(app, router, '#app'));

NotH5(() => app.$mount());
