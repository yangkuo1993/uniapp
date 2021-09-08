/*
 * @Author: your name
 * @Date: 2021-09-08 16:02:53
 * @LastEditTime: 2021-09-08 16:02:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-project/src/utils/utils.js
 */

const importAll = (jsModule) => {
  const modules = {};
  jsModule.keys().forEach((key) => {
    const moduleKey = key.replace(/(\.\/|\.js)/g, '');
    modules[moduleKey] = jsModule(key).default;
  });
  return modules;
};

export { importAll };
