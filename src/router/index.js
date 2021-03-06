import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/productlist/:id',
    component: () => import('@/views/Detail')
  },
  {
    path: '/search',
    component: () => import('@/views/Search')
  },
  {
    path: '/brand/:logoId',
    component: () => import('@/views/Brand')
  },
  {
    path: '/productdetail/:productId',
    component: () => import('@/views/Productdetail')
  },
  {
    path: '/productlist',
    component: () => import('@/views/Detail')
  },
  {
    path: '/silo/crossborder',
    component: () => import('@/views/silo/Crossborder')
  },
  {
    path: '/silo/women',
    component: () => import('@/views/silo/Women')
  },
  {
    path: '/silo/men',
    component: () => import('@/views/silo/Men')
  },
  {
    path: '/silo/cosmetics',
    component: () => import('@/views/silo/Cosmetics')
  },
  {
    path: '/silo/lifestyle',
    component: () => import('@/views/silo/Lifestyle')
  },
  {
    path: '/silo/kids',
    component: () => import('@/views/silo/Kids')
  },
  {
    path: '/login',
    component: () => import('@/views/user/Login')
  },
  {
    path: '/register',
    component: () => import('@/views/user/Register')
  },
  {
    path: '/shopcar',
    component: () => import('@/views/ShopCar'),
    beforeEnter: (to, from, next)=>{
        if(sessionStorage.getItem('mlh_token')){
            next()
        }else {
            next('/login')
        }
    }
}
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
