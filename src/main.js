import Vue from 'vue'
import VueCookies from 'vue-cookies'
import App from './App.vue'
import ClientHomePage from './components/Client/HomePage'
import ClientPages from './components/Client/ClientPages'
import AdminLoginPage from './components/Admin/LoginPage'
import AdminDashboard from './components/Admin/AdminDashboard'
import AdminPages from './components/Admin/AdminPages'
import AdminPageNews from './components/Admin/Pages/News/News'

import '@fortawesome/fontawesome/styles.css';
import fontawesome from '@fortawesome/fontawesome';
import { faEdit } from '@fortawesome/fontawesome-free-solid';
fontawesome.library.add(faEdit);

import VueRouter from 'vue-router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Buefy, {
  defaultIconPack: 'fas',
});
Vue.use(VueCookies)
VueCookies.config('7d')

const routes = [
  /**
   * CLIENT PAGES
   */
  {
    path: "",
    components: {
      default: ClientPages
    },
    children: [{
      path: "",
      components: {
        clientView: ClientHomePage
      }
    }]
  },
  /**
   * ADMIN PAGES
   */
  {
    path: "/admin",
    component: AdminPages,
    meta: {
      requiresAuth: true,
    },
    children: [{
        path: "",
        name: "adminDashboard",
        components: {
          adminView: AdminDashboard,
        }
      },
      {
        path: "news",
        name: "adminNews",
        components: {
          adminView: AdminPageNews
        }
      }
    ]
  },
  {
    path: "/admin/login",
    name: "adminLogin",
    component: AdminLoginPage
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

/**
 * Check if user is logged in
 */
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters["user/isLoggedIn"]) {
      next({
        name: 'adminLogin',
      })
    } else {
      next()
    }
  } else {
    next()
  }
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