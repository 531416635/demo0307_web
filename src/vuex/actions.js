/**
 * Actions of Vuex
 */

  // 声明 actions事件
const actions = {

    increment:({ commit }) => commit('increment'),
    decrement:({ commit }) => commit('decrement'),
    incrementIfOdd ({ commit, state },stateOfChange) {
      console.log(stateOfChange)
      if ((state.count + 1) % 2 === 0) {
        commit('increment')
      }
    },
    incrementAsync ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment')
          resolve()
        }, 1000)
      })
    }
    // /**
    //  * 改变主页底部的按钮导航栏显示状态
    //  * @param {*} {commit}
    //  * @param {*} stateOfChange
    //  */
    // changeBottomNavToolBarState({commit}, stateOfChange) {
    //   commit('CHANGE_BOTTOM_NAV_TOOL_BAR_STATE', stateOfChange)
    // }
  }

export default actions
