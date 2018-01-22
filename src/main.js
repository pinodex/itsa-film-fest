// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import 'es6-promise/auto'

import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

import App from './App'

import router from './router'

import 'bulma'

Vue.config.productionTip = false

Vue.use(VueScrollTo)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
