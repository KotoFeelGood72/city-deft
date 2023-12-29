// store/index.js

import Vue from 'vue'
import Vuex from 'vuex'

import modal from './modules/modal'
import root from './modules/root'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      modal,
      root
    }
  })
}

export default createStore