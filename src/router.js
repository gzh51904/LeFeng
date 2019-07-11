import Vue from 'vue'
import Router from 'vue-router'
//引入页面组件
import Home from './pages/Home.vue'
import Nav from './pages/Nav.vue'
import Mall from './pages/Mall.vue'
import Cart from './pages/Cart.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',//当浏览器地址为/home时渲染home组件
      component: Home
    },
    {
      path: '/nav',
      name: 'nav',
      component: Nav
    },
    {
      path: '/mall',
      name: 'mall',
      component: Mall
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'mine',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './pages/Mine.vue')
    }
  ]
})
