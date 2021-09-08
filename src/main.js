/*
 * @Author: your name
 * @Date: 2021-09-06 16:21:42
 * @LastEditTime: 2021-09-08 16:00:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-project/src/main.js
 */
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import store from '@/stores/store';
import { defaultLanguage } from '@/utils/config';
import messages from '@/i18n';
import App from './App';

Vue.config.productionTip = false;

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: store.state.language.chooseLanguage || defaultLanguage, // 设置地区
  messages, // 设置地区信息
});

App.mpType = 'app';

const app = new Vue({
  ...App,
  i18n,
});
app.$mount();
