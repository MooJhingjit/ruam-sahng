import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Status',
      component: () => import('@Views/Status')
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
