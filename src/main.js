import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from'./router'; //追記
import axios from 'axios' //追記
import VueAxios from 'vue-axios' //追記

Vue.config.productionTip = false
Vue.use(VueAxios, axios) 

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
