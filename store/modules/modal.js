// store/modules/modal.js
export default {
    state: {
      modal: {
        form: false,
        burger: false,
      }
    },
    mutations: {
      openPopup(state, modalName) {
        state.modal[modalName] = !state.modal[modalName]
      }
    },
    getters: {
      getPopup: (state) => (modalName) => {
        return state.modal[modalName]
      }
    }
  }