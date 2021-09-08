/*
 * @Author: your name
 * @Date: 2021-09-08 16:21:38
 * @LastEditTime: 2021-09-08 16:21:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-project/src/filters/index.js
 */
import dayjs from 'dayjs';
import Vue from 'vue';

Vue.filter('dateFilter', (data) => {
  if (data) {
    return dayjs(data).format('YYYY-MM-DD HH:mm:ss');
  } else {
    return '空';
  }
});
