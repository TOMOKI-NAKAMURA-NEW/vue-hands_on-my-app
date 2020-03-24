import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    login () {
      const google_auth_provier = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(google_auth_provier)
    },
  }
})

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});