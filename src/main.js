import Vue from 'vue'
import VueCookies from 'vue-cookies'
import App from './App.vue'
import ClientHomePage from './components/Client/HomePage'
import AdminLoginPage from './components/Admin/LoginPage'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Buefy)
Vue.use(VueCookies)
VueCookies.config('7d')

const routes = [{
    path: '/',
    component: ClientHomePage
  },
  {
    path: '/admin/login',
    component: AdminLoginPage
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

const vm = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

const toast = vm.$buefy.toast

export {
  vm,
  toast
}