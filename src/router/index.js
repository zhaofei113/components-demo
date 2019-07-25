import Vue from 'vue'
import Router from 'vue-router'
import one from '@/page/one'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'one',
      component: one
    }
  ]
})
