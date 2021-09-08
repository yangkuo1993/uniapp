/*
 * @Author: yangkuo
 * @Date: 2021-02-03 16:44:28
 * @LastEditTime: 2021-09-08 16:03:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /h2-dashboard/src/i18n/index.js
 */
import { importAll } from '@/utils/utils';
const modules = importAll(require.context('./', true, /\.js$/));
export default {
  ...modules,
};
