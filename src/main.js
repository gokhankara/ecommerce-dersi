import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'

import App from '@/App.vue'

import HelloTurkey from '@/components/HelloTurkey.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import '@/styles/style.css'


Vue.config.productionTip = false

Vue.use(BootstrapVue)

Vue.component('HelloTurkey',  HelloTurkey)

new Vue({
  render: h => h(App),
}).$mount('#app')
