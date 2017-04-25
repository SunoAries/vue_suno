import Vue from 'vue'
import routes from './router/router'
import VueRouter from 'vue-router'
import {routerMode} from './config/env'
import store from './store/'

Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode:routerMode  //不知道出了什么问题
});

const app = new Vue({
  router,
  store,
}).$mount('#app')
