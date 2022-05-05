import Vue from 'vue'
import App from './App.vue'
const bootstrap = require('bootstrap') // importo bootstrap
Vue.use(bootstrap)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
