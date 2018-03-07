/**
 * Getters of Vuex
 */

// 声明 getters获取器 用于获取数据
const getters = {
  // bottomNavToolBarState: state => state.bottomNavToolBarState,
  // ticketSearchResultList: state => state.ticketSearchResultList
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

export default getters
