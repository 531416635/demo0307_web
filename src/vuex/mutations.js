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
  // /**
  //  * 改变主页底部的按钮导航栏显示状态
  //  * @param {*} state vue state对象
  //  * @param {*} stateOfChange 要改变的状态
  //  */
  setManagerUserTableDateAction(state, stateOfChange){
    console.log(stateOfChange)
    console.log(state)
    state.managerUserTableData = stateOfChange.userList
    state.managerUserTableTotalPage = stateOfChange.page.totalCount
    state.managerUserTableCurrentPage = stateOfChange.page.currentPageNum
  }
}

export default mutations
