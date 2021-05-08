import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(Vuex)

import App from '@/App.vue'
import router from './routes.js'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import '@/styles/style.css'


Vue.config.productionTip = false


Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(Vuex)



new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
