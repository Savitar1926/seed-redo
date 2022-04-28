import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/blogs',
    name: 'Blogs',
    beforeEnter() {
    window.open('https://medium.com/lottielab').focus();
    }
  },
  {
    path: '/community',
    name: 'Community',
    beforeEnter() {
    window.open('https://discord.com/invite/NDUBtvg95a').focus();
    }
  },
  {
    path: '/join-us',
    name: 'JoinUs',
    beforeEnter() {
    window.open('https://lottielab.notion.site/Careers-b4f40799d8294be9ab1c910b881cf6ca').focus();
    }
  },
  {
    path: '/twitter',
    name: 'twitter',
    beforeEnter() {
    window.open('https://twitter.com/LottieLab_').focus();
    }
  },
  {
    path: '/instagram',
    name: 'instagram',
    beforeEnter() {
    window.open('https://www.instagram.com/lottie.lab/').focus();
    }
  },
  {
    path: '/linkedin',
    name: 'linkedin',
    beforeEnter() {
    window.open('https://www.linkedin.com/company/lottielab/').focus();
    }
  },
  {
    path: '/sign-up',
    name: 'instagram',
    beforeEnter() {
    window.open('https://lottielab.io/users/sign_up').focus();
    }
  },
  {
    path: '/sign-in',
    name: 'instagram',
    beforeEnter() {
    window.open('https://lottielab.com/users/sign_in').focus();
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
