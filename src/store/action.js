import Vue from 'vue'
import {articless}  from '../service/getData.js'
const beginLoading = (commit,add) =>{
  add?commit('loadMore_toggle', true) : commit('isLoading_toggle', true)
  return Date.now()
}
const endLoading = (commit,startTime,toggle)=>{
   const leftTime = 500-(Date.now()-startTime)
  leftTime>0?setTimeout(commit(toggle,false),leftTime):commit(toggle,false)
}

export default {
  getAllArticles({commit}, payload){
    commit('moreArticle_toggle', true)
    const startTime = beginLoading(commit, payload.add)
    if (payload.value) {
      commit('isLoading_toggle', false)
    }
    return articless()
      .then(articles => {
        if(articles.length ===0){
          commit('moreArticle_toggle',false)
          commit('noMore_toggle',true)
        }else {
          commit('noMore_toggle',false)
        }
        if(payload.add){
          commit('add_articles',articles)
          endLoading(commit,startTime,'loadMore_toggle')
        }else {
          commit('set_all_articles',articles)
          endLoading(commit,startTime,'isLoading_toggle')
        }
      }).catch((err)=>{console.log(err)})
  }
}
