/**
 * Created by 47625 on 2017/4/25.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import {routerMode} from '../config/env'

Vue.use(VueRouter)

const Index = r => require.ensure([], () => r(require('../pages/Index')), 'Index')
const Tags = r => require.ensure([], () => r(require('../pages/Tags')), 'Tags')
const Archives = r => require.ensure([], () => r(require('../pages/Archives')), 'Archives')
const Circle = r => require.ensure([], () => r(require('../pages/Circle')), 'Circle')
const Resume = r => require.ensure([], () => r(require('../pages/Resume')), 'Resume')
const Article = r => require.ensure([], () => r(require('../pages/Article')), 'Article')

const routes = [{
  path: '/',
  component: Index, //顶层路由，对应index.html
  children: [ //二级路由。对应App.vue
    //地址为空时跳转home页面
    {
      path: '',
      redirect: '/circle'
    },
    {
      path: '/circle',
      component: Circle
    },
    {
      path: '/tags',
      component: Tags
    },
    {
      path: '/archives',
      component: Archives
    },
    {
      path: '/resume',
      component: Resume
    },
    {
      path: '/article',
      component: Article,
      name: 'article'
    }
  ]
}]
const router = new VueRouter({
  routes,
  mode: routerMode  //不知道出了什么问题
});

router.beforeEach((to, from, next) => {
  next()
})

export default router
