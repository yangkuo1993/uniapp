/*
 * @Author: yangkuo
 * @Date: 2021-02-04 10:47:42
 * @LastEditTime: 2021-02-04 17:30:23
 * @LastEditors: Please set LastEditors yangkuo
 * @Description: In User Settings Edit
 * @FilePath: /h2-dashboard/src/stores/modules/language.js
 */

// 多语言
import { localeLanguages, defaultLanguage } from '@/utils/config';
const language = {
  state: {
    languages: localeLanguages,
    chooseLanguage: defaultLanguage,
  },
  mutations: {
    UPDATE_LANGUAGE(state, payload) {
      state.chooseLanguage = payload;
    },
  },
  actions: {},
  getters: {
    languageGetter: (state) => state.chooseLanguage,
  },
};

export default language;
