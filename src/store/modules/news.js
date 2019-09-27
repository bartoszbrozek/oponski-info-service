import axios from 'axios'
import {
    vm,
    toast
} from '@/main'

axios.defaults.baseURL = 'http://localhost/opon-panel/api'

const state = {
    news: [],
    title: "",
    subtitle: "",
    content: ""
}

const getters = {
    news(state) {
        return state.news
    },
    title(state) {
        return state.title
    },
    subtitle(state) {
        return state.subtitle
    },
    content(state) {
        return state.content
    },
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
            })
            .catch(error => {
                toast.open({
                    duration: 5000,
                    message: error.response.data.error_description,
                    type: 'is-danger'
                })
            })
    },

    /**
     * Create a new article
     *
     * @param {*} context
     * @param {*} data
     */
    create(context) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.user.token

        axios.post('/news/add', {
                title: context.state.title,
                subtitle: context.state.subtitle,
                content: context.state.content,
            })
            .then(response => {
                toast.open({
                    duration: 5000,
                    message: response.data.msg,
                    type: 'is-success'
                })

                context.commit("clearForm")
            })
            .catch(error => {
                toast.open({
                    duration: 5000,
                    message: error.response.data.error_description,
                    type: 'is-danger'
                })
            })
    }
}

const mutations = {
    setNews(state, news) {
        state.news = news
    },
    clearForm(state) {
        state.title = ""
        state.subtitle = ""
        state.content = ""
    },
    updateTitle(state, title) {
        state.title = title
    },
    updateSubtitle(state, subtitle) {
        state.subtitle = subtitle
    },
    updateContent(state, content) {
        state.content = content
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}