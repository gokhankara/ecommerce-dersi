import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import SecureLS from "secure-ls";
const ls = new SecureLS({ isCompression: false });

import axios from '@/utils/axios'
import auth from './auth.module'


export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const ADD_TO_BASKET = 'ADD_TO_BASKET';
export const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
export const FETCH_CART = 'FETCH_CART';

export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_BASKET = 'SET_BASKET';
export const SET_COUNT = 'SET_COUNT';

const CART_URL = "/carts/5";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    categories: [],
    basket: {
      products: [],
    },
    count: 0
  },
  mutations: {
    [SET_CATEGORIES](state, payload) {
      state.categories = payload;
    },
    [SET_BASKET](state, payload) {
      state.basket = payload;
    },
    [SET_COUNT](state, payload=1 ){
      state.count += payload
    }
  },
  actions: {
    async [FETCH_CATEGORIES]({ commit }) {
      const { data } = await axios.get(
        "/products/categories"
      );
      commit(SET_CATEGORIES, data);
    },
    async [ADD_TO_BASKET]({ state, dispatch }, productId) {
      const product = {
        productId,
        quantity: 1,
      };
      const basket = {
        ...state.basket,
        products: [...state.basket.products, product],
      };
      /*
        {
          userId:3,
          date:2019-12-10,
          products:[{productId:1,quantity:3}]
        }
        const basket = {
          ...state.basket,
        };
        const basket = {
          userId:3,
          date:2019-12-10,
          products:[{productId:1,quantity:3}]
        };
        const basket = {
          userId:3,
          date:2019-12-10,
          //products:[{productId:1,quantity:3}]
          products:[
            {productId:1,quantity:3},
            product //{productId, quantity:1}
          ]
        };
        const basket = {
          userId:3,
          date:2019-12-10,
          products:[
            {productId:1,quantity:3},
            {productId:5, quantity:1}
          ]
        };
      */

      await axios.put(CART_URL, basket);
      await dispatch("FETH_CART");
    },
    async [REMOVE_FROM_BASKET]({state, dispatch},productId){
      const basket ={
        ...state.basket,
        products : state.basket.products.filter(p=>{
          return p.productId !== productId
        })
      }
      await axios.put(CART_URL, basket);
      await dispatch("FETH_CART");
    },
    async [FETCH_CART]({ commit }) {
      const { data } = await axios.get(CART_URL);
      commit("SET_BASKET", data);
    },
  },
  getters: {
    categories(state) {
      return state.categories;
    },
    getBasketCount(state) {
      return state.basket.products.length;
    },
  },
  modules:{
    auth
  },
  plugins: [createPersistedState({
    paths: ['auth'],
    storage: {
      getItem: key => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: key => ls.remove(key)
    }
  })],
});

export default store;
