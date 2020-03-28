import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login_user: null,
  },
  mutations: {
    setLoginUser (state, user) {
      state.login_user = user
    },
    deleteLoginUser (state) {
      state.login_user = null
    }
  },
  actions: {
    setLoginUser ({ commit }, user) {
      commit('setLoginUser', user)
    },
    deleteLoginUser ({ commit }) {
      commit('deleteLoginUser')
    },
    logout() {
      firebase.auth.signOut()
    },
    login () {
      const google_auth_provier = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(google_auth_provier)
    },
  }
})