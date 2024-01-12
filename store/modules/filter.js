// export default {
//     state: {
//         filterData: null,
//         filterHeaders: null,
//     },
//     getters: {
//         getFilter(state) {
//             return {
//                 data: state.filterData,
//                 head: state.filterHeaders
//             };
//         }
//     },
//     mutations: {
//         SET_FILTER(state, response) {
//             state.filterData = response.data;  // Сохраняем данные
//             state.filterHeaders = response.headers;  // Сохраняем заголовки
//         }
//     },
//     actions: {
//         async fetchFilter({ commit }, { filterData }) {
//             const response = await this.$axios.get('wp-json/wp/v2/estate/filter', {
//                 params: filterData
//             });
//             commit('SET_FILTER', response);
//         },
    
//         async nuxtServerInit({ commit, dispatch }, context) {
//             // Извлечение query параметров из контекста запроса
//             const filterData = {
//                 page: 1,
//                 per_page: 6,
//             };
    
//             try {
//                 await dispatch('fetchFilter', { filterData });
//             } catch (error) {
//                 console.error('Ошибка при инициализации сервера:', error);
//             }
//         },
//     }
// }