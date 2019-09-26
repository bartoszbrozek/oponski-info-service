import axios from 'axios'
import {
    vm,
    toast
} from '@/main'

axios.defaults.baseURL = 'http://localhost/opon-panel/api'

const state = {
    news: []
}

const getters = {
    news(state) {
        return state.news
    }
}

const actions = {
    /**
     * Get news (articles)
     *
     * @param {*} context
     */
    getAll(context) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.user.token

        axios.get('/news')
            .then(response => {
                let news = response.data
                context.commit("setNews", news)

                console.log("NEWS", news)
            })
            .catch(error => {
                toast.open({
                    duration: 5000,
                    message: error.response.data.error_description,
                    type: 'is-danger'
                })
            })
    },
}

const mutations = {
    setNews(state, news) {
        state.news = news
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}