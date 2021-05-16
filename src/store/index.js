import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state, payload) {
      state.count = payload;
    }
  },
  actions:{
    increment({state, commit},payload=1){
      commit('increment', state.count += payload);
    }
  },
  getters:{
    count(state){
      return `sayi = ${state.count}`
    }
  }
})

export default store