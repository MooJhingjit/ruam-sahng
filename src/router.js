import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@Views/Home')
    },
    {
      path: '/theme',
      name: 'Theme',
      component: () => import('@Views/theme.vue')
    }
  ]
})
