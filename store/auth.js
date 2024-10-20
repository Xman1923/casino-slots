import { reactive } from 'vue';

export const state = reactive({
  user: null,
});

export const mutations = {
  SET_USER(user) {
    state.user = user;
  },
  LOGOUT() {
    state.user = null;
  },
};

export const actions = {
  login({ commit }, user) {
    // Bu kısmı gerçek bir API çağrısı ile değiştirebilirsiniz.
    commit('SET_USER', user);
  },
  logout({ commit }) {
    commit('LOGOUT');
  },
};

export const getters = {
  isAuthenticated() {
    return !!state.user;
  },
  getUser() {
    return state.user;
  },
};