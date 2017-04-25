/**
 * Created by 47625 on 2017/4/25.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutations'
import getters from  './getters'

Vue.use(Vuex)


const state = {

}



export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
