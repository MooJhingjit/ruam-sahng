import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'Product',
    //   component: () => import('@Views/Product')
    // },
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
    // {
    //   path: '/job',
    //   name: 'Job',
    //   component: () => import('@Views/Job')
    // },
    {
      path: '/job/:key',
      name: 'JobEdit',
      component: () => import('@Views/Job/edit')
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
      path: '/users/',
      name: 'User',
      component: () => import('@Views/User/index')
    },
    {
      path: '/users/:key',
      name: 'UserEdit',
      component: () => import('@Views/User/edit')
    },
    {
      path: '/summary',
      name: 'Summary',
      component: () => import('@Views/Summary')
    }
  ]
})
