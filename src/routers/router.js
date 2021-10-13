import { RouterMount, createRouter } from 'uni-simple-router';

const router = createRouter({
  platform: process.env.VUE_APP_PLATFORM,
  routes: [
    // eslint-disable-next-line no-undef
    ...ROUTES,
    {
      path: '*',
      // eslint-disable-next-line no-unused-vars
      redirect: (to) => {
        return { name: '404' };
      },
    },
  ],
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
  next();
});
// 全局路由后置守卫
// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
  console.log('跳转结束');
});

export { router, RouterMount };
