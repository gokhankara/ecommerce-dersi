import axios from "@/utils/axios";

export const SET_USER = 'SET_USER';
export const SET_ERROR = 'SET_ERROR';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';


const state = {
  errors: [],
  user: {
      username:null,
      token: null
  },
};

const mutations = {
  SET_USER(state, payload) {
    state.user = payload;
  },
  SET_ERROR(state, payload) {
    state.errors = payload;
  },
};

const actions = {
  async LOGIN({ commit }, { username, password }) {
    try {
      const { data } = await axios.post("/auth/login", { username, password });

      if (!data) {
        commit("SET_ERROR", ["Authentication Failed"]);
      } else {
        commit("SET_USER", {
            username,
          ...data,
        });
      }
    } catch (e) {
      commit("SET_ERROR", [e.message]);
    }
  },
  LOGOUT({ commit }) {
    commit("SET_USER",  {
        username:null,
        token: null
    });
  },
};
const getters = {
  isLoggedIn(state) {
    return !!state.user.token;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
