import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home.vue'
import List from '../components/List/List.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/list',
      name: 'list',
      component: List
    }
  ]
});