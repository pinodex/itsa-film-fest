import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const pages = {
  Index: () => import('@/pages/Index'),
  Default: () => import('@/pages/Default')
}

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'Index',
      component: pages.Index
    },

    {
      path: '*',
      name: 'Default',
      component: pages.Default
    }
  ]
})
