/**
 * Mutations of Vuex
 */

// 声明 mutations事件以使用actions提交
const mutations = {
  //  后台管理--用户管理  渲染table数据和page分页数据
  setManagerUserTableDate(state, stateOfChange){
    state.managerUserTableData = stateOfChange.userList
    state.managerUserTableTotalPage = stateOfChange.page.totalCount
    state.managerUserTableCurrentPage = stateOfChange.page.currentPageNum
  },
  clearManagerUserTableDate(state){
    state.managerUserTableData = []
    state.managerUserTableTotalPage = 0
    state.managerUserTableCurrentPage = 1
  },
  //  后台管理--角色管理  渲染table数据和page分页数据
  setManagerRoleTableDate(state, stateOfChange){
    state.managerRoleTableData = stateOfChange.roleList
    state.managerRoleTableTotalPage = stateOfChange.page.totalCount
    state.managerRoleTableCurrentPage = stateOfChange.page.currentPageNum
  },

  //  后台管理--菜单管理  渲染table数据和page分页数据
  setManagerMenuTableDate(state, stateOfChange){
    state.managerMenuTableData = stateOfChange.menuList
    state.managerMenuTableTotalPage = stateOfChange.page.totalCount
    state.managerMenuTableCurrentPage = stateOfChange.page.currentPageNum
  },
}

export default mutations
