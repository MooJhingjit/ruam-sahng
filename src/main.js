import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import helper from '@Libraries/vue.helpers'
Vue.config.productionTip = false
Vue.mixin(helper)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
