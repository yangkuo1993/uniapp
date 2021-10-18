import { RouterMount, createRouter } from 'uni-simple-router';

const router = createRouter({
  platform: process.env.VUE_APP_PLATFORM,
  h5: {
    paramsToQuery: false,
    vueRouterDev: false,
    vueNext: false,
    mode: 'hash',
    base: '/',
    linkActiveClass: 'router-link-active',
    linkExactActiveClass: 'router-link-exact-active',
    // eslint-disable-next-line no-unused-vars
    scrollBehavior: (to, from, savedPostion) => ({ x: 0, y: 0 }),
    fallback: true,
  },
  // eslint-disable-next-line no-unused-vars
  routerErrorEach: (error, router) => {
    if (error.type === 3) {
      router.$lockStatus = false;
    }
  },
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
