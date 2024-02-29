export const state = () => ({
  modal: {
    form: false,
    burger: false,
  },
  favorites: [],
});

export const getters = {
  getPopup: (state) => (modalName) => state.modal[modalName],
  getFavorites: (state) => state.favorites,
};

export const mutations = {
  openPopup(state, modalName) {
    state.modal[modalName] = !state.modal[modalName];
  },
  closeBurger(state, modalName) {
    state.modal[modalName] = null;
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

  addToFavorites({ commit }, product) {
    commit('ADD_TO_FAVORITES', product);
  },

  removeFromFavorites({ commit }, productId) {
    commit('REMOVE_FROM_FAVORITES', productId);
  },
};
