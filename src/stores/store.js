/*
 * @Author: yangkuo
 * @Date: 2020-12-31 09:39:10
 * @LastEditTime: 2021-09-08 16:03:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 */
import Vue from 'vue';
import Vuex from 'vuex';
// !工具
// import router, { constRoutes } from "@/routes/router";
// import { localStorage } from "@/utils/storage";
// import createLogger from "vuex/dist/logger";
import { importAll } from '@/utils/utils';
const modules = importAll(require.context('./modules', true, /\.js$/));

Vue.use(Vuex);
export default new Vuex.Store({
  // plugins: process.env.NODE_ENV === "production" ? [] : [createLogger()],
  plugins: [],
  modules: {
    ...modules,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});
