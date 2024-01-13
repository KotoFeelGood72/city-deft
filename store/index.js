export const state = () => ({
  modal: {
    form: false,
    burger: false,
  },
  root: {},
  selects: {},
  filterData: null,
  filterHeaders: null,
  favorites: [],
});

export const getters = {
  getFilter: (state) => ({
    data: state.filterData,
    head: state.filterHeaders,
  }),
  getData: (state) => state.root,
  getSelects: (state) => state.selects,
  getPopup: (state) => (modalName) => state.modal[modalName],
  getFavorites: (state) => state.favorites,
};

export const mutations = {
  SET_FILTER(state, response) {
    state.filterData = response.data;
    state.filterHeaders = response.headers;
  },
  SET_DATA(state, data) {
    state.root = data;
  },
  SET_ACF_SELECT(state, data) {
    state.selects = data;
  },
  openPopup(state, modalName) {
    state.modal[modalName] = !state.modal[modalName];
  },
  ADD_TO_FAVORITES(state, product) {
    state.favorites.push(product);
  },
  REMOVE_FROM_FAVORITES(state, productId) {
    state.favorites = state.favorites.filter(
      (product) => product.id !== productId
    );
  },
};

export const actions = {
  async fetchFilter({ commit }, { filterData }) {
    const response = await this.$axios.get('wp-json/wp/v2/estate/filter', {
      params: filterData,
    });
    commit('SET_FILTER', response);
  },

  async getAcfSelectValues({ commit }) {
    try {
      const response = await this.$axios.$get('/wp-json/city/v1/acf-select-values/');
      commit('SET_ACF_SELECT', response);
    } catch (error) {
      console.error('Ошибка при получении ACF select значений:', error);
    }
  },

  async nuxtServerInit({ commit, dispatch }) {

    setInterval(() => {
      const used = process.memoryUsage();
      for (let key in used) {
        console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
      }
    }, 5000);
    
    try {
      // Загрузка данных фильтра
      const filterData = { page: 1, per_page: 6 };
      await dispatch('fetchFilter', { filterData });

      // Загрузка ACF данных
      const acfData = await this.$axios.$get('wp-json/acf/v3/options/options');
      commit('SET_DATA', acfData.acf);

      // Загрузка значений ACF Select
      await dispatch('getAcfSelectValues');
    } catch (error) {
      console.error('Ошибка при инициализации сервера:', error);
    }
  },

  addToFavorites({ commit }, product) {
    commit('ADD_TO_FAVORITES', product);
  },

  removeFromFavorites({ commit }, productId) {
    commit('REMOVE_FROM_FAVORITES', productId);
  },
};
