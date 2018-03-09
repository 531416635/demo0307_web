import axios from 'axios'

/**
 * 解决跨域请求时，session丢失的问题（需与后台跨域请求一起设置Credentials）
 * @type {boolean}
 */
axios.defaults.withCredentials=true;

const hostUrl = "http://localhost:8090/demo/"

// 声明 actions事件
const actions = {

  // todo 后台管理--用户管理
  // 获取table数据
  getManagerUserTableDateAction({ commit,state},val){
    axios({
      method: 'post',
      url: hostUrl + 'user/getAllUser.do',
      data:{
        "currentPage":val
      }
    }).then((response) => {
      //重新渲染table数据和page分页数据
      commit('setManagerUserTableDate',response.data.result)
    }).catch((err) =>{
    })
  },
  // 添加用户
  addManagerUserAction({ commit,state},userModel){
    axios({
      method: 'post',
      url: hostUrl + 'user/addUser.do',
      data:userModel.userModel
    }).then((response) => {
      //初始化table数据和page分页数据
      commit('clearManagerUserTableDate')
    }).catch((err) =>{
//          console.log(err)
    })
  },

  // todo 后台管理--角色管理
  // 获取table数据
  getManagerRoleTableDateAction({ commit,state},val){
    axios({
      method: 'post',
      url: hostUrl + 'role/getAllRole.do',
      data:{
        "currentPage":val
      }
    }).then((response) => {
      //重新渲染table数据和page分页数据
      commit('setManagerRoleTableDate',response.data.result)
    }).catch((err) =>{
//          console.log(err)
    })
  },

  // todo 后台管理--菜单管理
  // 获取table数据
  getManagerMenuTableDateAction({ commit,state},val){
    axios({
      method: 'post',
      url: hostUrl + 'menu/getAllMenu.do',
      data:{
        "currentPage":val
      }
    }).then((response) => {
      //重新渲染table数据和page分页数据
      commit('setManagerMenuTableDate',response.data.result)
    }).catch((err) =>{
//          console.log(err)
    })
  },

}

export default actions
