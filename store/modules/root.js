export default {
    state: {
        root: {},
    },
    getters: {
        getData(state) {
            return state.root
        } 
    },
    mutations: {
        SET_DATA(state, data) {
            state.root = data;
        }
    },
    actions: {
        async nuxtServerInit({ commit }) {
            try {
                const response = await this.$axios.$get('wp-json/acf/v3/options/options');
                commit('SET_DATA', response.acf);
            } catch (error) {
                console.error('Ошибка при инициализации сервера:', error);
            }
        }
    }
};
