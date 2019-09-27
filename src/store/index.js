import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import news from './modules/news'
import categories from './modules/categories'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        user,
        news,
        categories
    },
    strict: debug,
    plugins: debug ? [] : []
})