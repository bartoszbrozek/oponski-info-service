import axios from 'axios'
import {
    vm,
    toast
} from '@/main'

axios.defaults.baseURL = 'http://localhost/opon-panel/api'

const state = {
    token: window.$cookies.get("token") || null
}

const getters = {
    isLoggedIn(state) {
        return state.token !== null
    }
}

const actions = {
    /**
     * Login user
     *
     * @param {*} context
     * @param {*} credentials
     */
    async retrieveToken(context, credentials) {
        await axios.post('/login', {
                username: credentials.username,
                password: credentials.password,
            })
            .then(response => {
                let token = response.data.access_token
                context.commit("setToken", token)

                toast.open({
                    duration: 5000,
                    message: "Logged In",
                    type: 'is-success'
                })
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
     * Logout user
     *
     * @param {*} context
     */
    removeToken(context) {
        if (!context.getters.isLoggedIn) {
            return
        }

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token
        context.commit("clearToken")

        axios.post('/logout')
            .then(() => {
                toast.open({
                    duration: 5000,
                    message: "Logged Out",
                    type: 'is-success'
                })
            })
            .catch(error => {
                if (typeof error.response.data.error_description === "undefined") {
                    error.response.data.error_description = "Unknown error"
                }

                toast.open({
                    duration: 5000,
                    message: error.response.data.error_description,
                    type: 'is-danger'
                })
            })
    }
}

const mutations = {
    setToken(state, token) {
        state.token = token
        window.$cookies.set("token", token)
    },
    clearToken(state) {
        state.token = null
        window.$cookies.remove("token")
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}