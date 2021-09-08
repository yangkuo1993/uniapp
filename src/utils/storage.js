/*
 * @Author: yangkuo
 * @Date: 2020-12-31 09:39:10
 * @LastEditTime: 2021-01-04 15:25:27
 * @LastEditors: Please set LastEditors yangkuo
 * @Description: In User Settings Edit
 */
const prefix = 'h2-manage';
class Storage {
  constructor(type = 'localStorage') {
    if (['sessionStorage', 'localStorage'].indexOf(type) === -1) {
      throw new Error('can no support');
    }
    this.type = type;
    this.storage = window[this.type];
  }

  save(key, value) {
    key = prefix + key;
    value = JSON.stringify(value);
    this.storage.setItem(key, value);
  }

  read(key) {
    key = prefix + key;
    const result = this.storage.getItem(key);
    return JSON.parse(result);
  }

  clear(key, clearAll = false) {
    if (clearAll) {
      this.storage.clear();
    } else {
      this.storage.removeItem(key);
    }
  }
}

export const sessionStorage = new Storage('sessionStorage');

export const localStorage = new Storage('localStorage');
