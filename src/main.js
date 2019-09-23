import Vue from 'vue'
import App from './App.vue'
import HomePage from './components/HomePage'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'


Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Buefy)

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