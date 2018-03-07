/**
 * Getters of Vuex
 */

// 声明 getters获取器 用于获取数据
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
  //获取（后台管理--用户管理--table数据）
  // getManagerUserTableCurrentPage:state => state.managerUserTableCurrentPage,
  // getManagerUserTableCurrentPage:function (state){
  //   console.log(state.managerUserTableCurrentPage)
  //   return state.managerUserTableCurrentPage
  // },
  getManagerUserTableTotalPage:state => state.managerUserTableTotalPage,
}

export default getters
