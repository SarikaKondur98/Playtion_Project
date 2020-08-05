import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(Vuetify)


new Vue({
  router,
  axios,
  Vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
