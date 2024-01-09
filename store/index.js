// store/index.js

import Vue from 'vue'
import Vuex from 'vuex'

import modal from './modules/modal'
import root from './modules/root'
import filter from './modules/filter'
import favorite from './modules/favorite'


Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      modal,
      root,
      filter,
      favorite
    },
  })
}

export default createStore
