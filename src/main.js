import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'



import App from '@/App.vue'
import router from './router'
import store from './store'
import axios from './utils/axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import '@/styles/style.css'


Vue.config.productionTip = false


Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueAxios,axios)


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
