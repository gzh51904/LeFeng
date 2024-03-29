import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './lib/rem/rem.js'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
