import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action.js'
import mutations from './mutations.js'
import getters from  './getters'

Vue.use(Vuex)


const state = {
  isLoading:false,
  article: {},
  articles: [],
  headline: {},
  moreArticle: true,
  loadMore: false,
  isSaving: false,
  noMore: false,
};



export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
