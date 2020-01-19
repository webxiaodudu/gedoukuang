import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',     //首页
    name: 'home',
    component: Home
  },
  {
    path:'/video',  //视频
    name: 'video',
    component: () => import(/* webpackChunkName: "video" */ '@/views/video')
  },
  {
    path:'/community',  //社区
    name: 'community',
    component: () => import(/* webpackChunkName: "community" */ '@/views/community')
  },
  {
    path:'/user',  //个人中心
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '@/views/user')
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
