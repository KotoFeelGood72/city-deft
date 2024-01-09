// plugins/persistedState.js
import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'favorites', // Укажите уникальный ключ для хранения состояния в LocalStorage
      paths: ['favorite'], // Укажите только модуль, который вы хотите сохранять
    })(store);
  });
};
