import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from'./router'; //追記
import axios from 'axios' //追記
import VueAxios from 'vue-axios' //追記
import firebase from 'firebase' //追記
import Vuex from 'vuex' //追記
import store from './store.js' //追記

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(VueAxios, axios)
Vue.use(Vuex)


const config = {
  apiKey: "AIzaSyDjVY2m8jaV9mU6nsYBK7TqoRSs6dSMLrM",
  authDomain: "vue-hands-on-cecbc.firebaseapp.com",
  databaseURL: "https://vue-hands-on-cecbc.firebaseio.com",
  projectId: "vue-hands-on-cecbc",
  storageBucket: "vue-hands-on-cecbc.appspot.com",
  messagingSenderId: "272439284534",
  appId: "1:272439284534:web:6438a32b3473cdab0a1997",
  measurementId: "G-EYGJ18TPL8"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
