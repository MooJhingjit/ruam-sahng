import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Product',
      component: () => import('@Views/Product')
    },
    {
      path: '/product',
      name: 'Product',
      component: () => import('@Views/Product')
    },
    {
      path: '/product/:key',
      name: 'ProductUpdate',
      component: () => import('@Views/Product/update')
    },
    {
      path: '/creation',
      name: 'Creation',
      component: () => import('@Views/Creation')
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: () => import('@Views/Schedule')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@Views/Login')
    },
    {
      path: '/user/:key',
      name: 'UserEdit',
      component: () => import('@Views/User/edit')
    }
  ]
})
