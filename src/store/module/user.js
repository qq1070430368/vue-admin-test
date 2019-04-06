const state = {
    users: {},
    status: ''
}

const getters = {
    getUser(state, getters) {
        return state.users
    }
}

const actions = {
    getUsersStore({
        commit
    }, {
        user
    }) {
        commit('saveUsers', user)
    }
}

const mutations = {
    saveUsers(state, user) {
        if (user) {
            state.users = user
            localStorage.setItem('userInfo', JSON.stringify(user))
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
