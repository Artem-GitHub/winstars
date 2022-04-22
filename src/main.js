import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
axios.defaults.baseURL = process.env.VUE_APP_BASE_API_URL
axios.defaults.headers.authorization = process.env.VUE_APP_API_TOKEN

Vue.use(VueAxios, axios)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
