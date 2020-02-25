import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import currencies from './modules/currencies';

Vue.use(Vuex);

export default new Vuex.Store({
    plugins:[createPersistedState()],
    modules: {
        currencies
    }
})
