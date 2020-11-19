import { createRouter, createWebHashHistory } from 'vue-router'

import testRouter from './modules/test.js'


export const constantRoutes = [
  {
    path: '/',
    redirect: '/home',
    name: 'Dashboard',
    component:() =>import('@/layout'),
    meta:{
      title:'dashboard',
    },
    children:[
      {
        path:'home',
        name:'Home',
        component: () => import('@/views/Home.vue'),
        meta:{
          title:'Home',
          affix:true
        }
      },
      {
        path:'about',
        name:'About',
        component: () => import('@/views/About.vue'),
        meta:{
          title:'about',
        }
      }
    ]
  },
  {
    path:'/login',
    name:'Login',
    meta:{
      title:'login',
      hide:true
    },
    component:() =>import('@/views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes:constantRoutes,
  scrollBehavior: () => ({ top: 0 }),
})

export const asyncRoutes = [
  testRouter
]

export const resetRouter = () =>{
  router.options= createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
    scrollBehavior: () => ({ top: 0 }),
  }).options
}




export default router
