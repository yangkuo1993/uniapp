<!--
 * @Author: your name
 * @Date: 2021-09-06 16:21:42
 * @LastEditTime: 2021-09-08 13:53:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-project/src/pages/index/index.vue
-->
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view>
      <text @click="goto" class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello",
    };
  },
  onLoad() {},
  methods: {
    goto() {
      try {
        console.log(1);
        uni.navigateTo({
          url: "/pages/home/home",
        });
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
