import Page from '../../models/Page.model.js';

// State object
const state = {
    pages: new Page,
}

// Getter functions
const getters = {
    getPages(state) {
        return state.pages;
    },
}


// Actions 
const actions = {
    fetchPages({ commit }) {
        return new Promise((resolve, reject) => {
            commit('SET_PAGES', data);
            resolve();
        })
    },
}


// Mutations
const mutations = {
    SET_PAGES(state, data) {
        state.pages = data;
    },
    SET_VARIABLE_2(state, data) {
        state.variable2 = data;
    },
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}