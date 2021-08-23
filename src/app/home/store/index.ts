/*
 * @descripttion: 
 * @author: luohong
 * @Date: 2021-06-21
 */
interface HomeState {
  AppInfo: string
}
const state: HomeState = {
  AppInfo: 'iboot-vue3-ts-init'
}
const getters = {
  AppInfo: (state: HomeState) => state.AppInfo
}
const actions = {
  setAppInfo({ commit }, data: string) {
    commit('setAppInfo', data)
  }
}
const mutations = {
  setAppInfo: (state: HomeState, data: string) => {
    state.AppInfo = data
  }
}
export default {
  Home: {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
  }
}
