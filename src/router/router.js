/**
 * Created by 47625 on 2017/4/25.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import {routerMode} from '../config/env'

Vue.use(VueRouter)

const Index = r => require.ensure([], () => r(require('../pages/Index')), 'Index')
const Gear = r => require.ensure([], () => r(require('../pages/Gear')), 'Gear')
const Archives = r => require.ensure([], () => r(require('../pages/Archives')), 'Archives')
const Circle = r => require.ensure([], () => r(require('../pages/Circle')), 'Circle')
const Resume = r => require.ensure([], () => r(require('../pages/Resume')), 'Resume')

const routes = [{
  path: '/',
  component: Index, //顶层路由，对应index.html
  children: [ //二级路由。对应App.vue
    //地址为空时跳转home页面
    {
      path: '',
      redirect: '/circle'
    },
    //首页城市列表页
    {
      path: '/gear',
      component: Gear
    },
    //当前选择城市页
    {
      path: '/archives',
      component: Archives
    },
    {
      path: '/circle',
      component: Circle
    },
    {
      path: '/resume',
      component: Resume
    }
  ]
}]
const router = new VueRouter({
  routes,
  mode:routerMode  //不知道出了什么问题
});

export default router
