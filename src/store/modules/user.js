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
    retrieveToken(context, credentials) {
        axios.post('/login', {
                username: credentials.username,
                password: credentials.password,
            })
            .then(response => {
                let token = response.data.access_token
                window.$cookies.set("token", token)
                vm.$router.push('/admin')

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

        axios.post('/logout')
            .then(() => {
                toast.open({
                    duration: 5000,
                    message: "Logged Out",
                    position: 'is-bottom',
                    type: 'is-success'
                })
            })
            .catch(error => {
                toast.open({
                    duration: 5000,
                    message: error.response.data.error_description,
                    position: 'is-bottom',
                    type: 'is-danger'
                })
            })
            .finally(() => {
                vm.$router.push('/admin/login')
                window.$cookies.remove("token")
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