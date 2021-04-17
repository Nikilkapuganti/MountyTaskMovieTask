import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import { routes } from './routes.js';


import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'
Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.use(VueRouter)
Vue.use(bootstrap)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
