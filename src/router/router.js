/**
 * Created by 47625 on 2017/4/25.
 */
import App from '../App'

const Gear = r => require.ensure([], () => r(require('../components/Gear')), 'Gear')
const Hello = r => require.ensure([], () => r(require('../components/Hello')), 'Hello')
const Circle = r => require.ensure([], () => r(require('../components/Circle')), 'Circle')

export default [{
  path: '/',
  component: App, //顶层路由，对应index.html
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
      path: '/hello',
      component: Hello
    },
    {
      path: '/circle',
      component: Circle
    },
  ]
}]
