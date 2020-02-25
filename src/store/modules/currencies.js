const state = {
    allCurrencies: []
}

const getters = {
    allCurrencies: function (state) {
        return state.allCurrencies;
    },
    getCurrencyById: function (state, id) {
        return state.allCurrencies.find(function (el) {
            return el.id == id;
        });
    }
}

const mutations = {
    setNewCurrencyObj: function (state, payload) {
        state.allCurrencies = payload;
    },
    setCurrencies: function (state, payload) {
        state.allCurrencies = payload;
    }
}

export default {
    state,
    getters,
    mutations
}
