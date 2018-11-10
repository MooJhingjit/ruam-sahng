import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './Store/index'
import './registerServiceWorker'
import helper from '@Libraries/vue.helpers'
import VeeValidate from 'vee-validate'
import 'alertifyjs/build/alertify.min.js'
import 'alertifyjs/build/css/alertify.min.css'
import 'alertifyjs/build/css/themes/default.min.css'
import Alertifyjs from 'vue2-alertifyjs'
const options = {
  glossary: {
    // dialogs default title
    title: 'การแจ้งเตือน',
    // ok button text
    ok: 'ยืนยัน',
    // cancel button text
    cancel: 'ยกเลิก'
  }
}
Vue.use(Alertifyjs, options)
Vue.use(VeeValidate)
Vue.config.productionTip = false
Vue.mixin(helper)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
