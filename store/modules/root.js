export default {
    state: {
        root: {},
        selects: {},
    },
    getters: {
        getData(state) {
            return state.root
        },
        getSelects(state) {
            return state.selects
        } 
    },
    mutations: {
        SET_DATA(state, data) {
            state.root = data;
        },
        SET_ACF_SELECT(state, data) {
            state.selects = data;
        }
    },
    actions: {
        async getAcfSelectValues({ commit }) {
            try {
                const response = await this.$axios.$get('/wp-json/city/v1/acf-select-values/')
                commit('SET_ACF_SELECT', response);
            } catch (error) {
                console.log(error);
            };
            
        },
        async nuxtServerInit({ commit, dispatch  }) {
            try {
                const response = await this.$axios.$get('wp-json/acf/v3/options/options');
                commit('SET_DATA', response.acf);
                await dispatch('getAcfSelectValues')
            } catch (error) {
                console.error('Ошибка при инициализации сервера:', error);
            }
        }
    }
};
