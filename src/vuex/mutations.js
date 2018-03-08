/**
 * Mutations of Vuex
 */

// 声明 mutations事件以使用actions提交
const mutations = {

  increment(state){
    state.count++
  },
  decrement (state){
    state.count--
  },

  //  */
  setManagerUserTableDate(state, stateOfChange){
    state.managerUserTableData = stateOfChange.userList
    state.managerUserTableTotalPage = stateOfChange.page.totalCount
    state.managerUserTableCurrentPage = stateOfChange.page.currentPageNum
  }
}

export default mutations
