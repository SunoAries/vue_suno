import Vue from 'vue'
import routes from './router/router'
import VueRouter from 'vue-router'
import {routerMode} from './config/env'
import store from './store/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueRouter)
Vue.use(ElementUI)


const router = new VueRouter({
  routes,
  mode:routerMode  //不知道出了什么问题
});

new Vue({
  router,
  store
}).$mount('#app')
