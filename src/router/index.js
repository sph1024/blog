import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Tech from '@/components/Tech'
import Think from '@/components/Think'
import Life from '@/components/Life'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tech',
      name: 'Tech',
      component: Tech
    },
    {
      path: '/think',
      name: 'Think',
      component: Think
    },
    {
      path: '/life',
      name: 'Life',
      component: Life
    }
  ]
})
