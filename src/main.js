import Vue from 'vue'
import App from './App.vue'
import HomePage from './components/HomePage'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: HomePage
}, ]

const router = new VueRouter({
  routes
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')