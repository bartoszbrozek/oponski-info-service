import axios from 'axios'
import {
    vm,
    toast
} from '@/main'

axios.defaults.baseURL = 'http://localhost/opon-panel/api'

const state = {
    categories: [],
    name: ""
}

const getters = {
    categories(state) {
        return state.categories
    },
    name(state) {
        return state.name
    },
}

const actions = {
    /**
     * Get categories
     *
     * @param {*} context
     */
    getAll(context) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.user.token

        axios.get('/categories')
            .then(response => {
                let categories = response.data
                context.commit("setCategories", categories)
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
     * Create a new category
     *
     * @param {*} context
     * @param {*} data
     */
    create(context) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.rootState.user.token

        axios.post('/categories/add', {
                name: context.state.name
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
    setCategories(state, categories) {
        state.categories = categories
    },
    clearForm(state) {
        state.name = ""
    },
    updateName(state, name) {
        state.name = name
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}