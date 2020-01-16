import { createStore } from '@mpxjs/core'

const SET_IS_IPX = 'SET_IS_IPX'

export default createStore({
  state: {
    isIpx: false, // 是否为 iPhone X
  },
  getters: {},
  mutations: {
    [SET_IS_IPX] (state, isIpx) {
      state.isIpx = isIpx
    }
  }
})
