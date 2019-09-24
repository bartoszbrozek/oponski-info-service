import axios from 'axios'
import {
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
    retrieveToken(context, credentials) {
        axios.post('/login', {
                username: credentials.username,
                password: credentials.password,
            })
            .then(response => {
                let token = response.data.access_token
                window.$cookies.set("token", token)

                toast.open({
                    duration: 5000,
                    message: "Logged In",
                    position: 'is-bottom',
                    type: 'is-success'
                })
            })
            .catch(error => {
                console.log(error)
                toast.open({
                    duration: 5000,
                    message: error.response.data.error_description,
                    position: 'is-bottom',
                    type: 'is-danger'
                })
            })
    },

    /**
     * Logout user
     *
     * @param {*} context
     * @param {*} credentials
     */
    removeToken(context, credentials) {
        if (!context.getters.isLoggedIn) {
            return
        }

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

        axios.post('/logout')
            .then(response => {
                window.$cookies.remove("token")

                toast.open({
                    duration: 5000,
                    message: "Logged Out",
                    position: 'is-bottom',
                    type: 'is-success'
                })
            })
            .catch(error => {
                console.log(error)
                toast.open({
                    duration: 5000,
                    message: error.response.data.error_description,
                    position: 'is-bottom',
                    type: 'is-danger'
                })
            })
    }
}

const mutations = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}