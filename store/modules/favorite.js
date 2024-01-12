// // store/modules/favorites.js

// export default {
//     state: {
//       favorites: [],
//     },
//     getters: {
//       getFavorites(state) {
//         return state.favorites;
//       },
//     },
//     mutations: {
//       ADD_TO_FAVORITES(state, product) {
//         state.favorites.push(product);
//       },
//       REMOVE_FROM_FAVORITES(state, productId) {
//         state.favorites = state.favorites.filter(product => product.id !== productId);
//       },
//     },
//     actions: {
//       addToFavorites({ commit }, product) {
//         commit('ADD_TO_FAVORITES', product);
//       },
//       removeFromFavorites({ commit }, productId) {
//         commit('REMOVE_FROM_FAVORITES', productId);
//       },
//     },
//   };
  