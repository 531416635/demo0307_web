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
      // commit('clearManagerUserTableDate')
    }).catch((err) =>{
//          console.log(err)
    })
  },
  // 修改用户
  editManagerUserAction({ commit,state},userModel){
    axios({
      method: 'post',
      url: hostUrl + 'user/editUser.do',
      data:userModel.userModel
    }).then((response) => {
      //初始化table数据和page分页数据
      // commit('clearManagerUserTableDate')
    }).catch((err) =>{
//          console.log(err)
    })
  },
  // 删除用户
  deleteManagerUserAction({ commit,state},userModel){
    axios({
      method: 'post',
      url: hostUrl + 'user/deleteUser.do',
      data:userModel.userModel
    }).then((response) => {
      //初始化table数据和page分页数据
      // commit('clearManagerUserTableDate')
    }).catch((err) =>{
//          console.log(err)
    })
  },

  // todo 后台管理--角色管理
  // 获取table数据
  getManagerRoleTableDateAction({ commit,state},val){
    axios({
      method: 'post',
      url: hostUrl + 'role/selectAllRoleByPage.do',
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

  // 获取全部角色信息数据
  getManagerAllRoleDateAction({ commit,state}){
    axios({
      method: 'post',
      url: hostUrl + 'role/getAllRole.do',
    }).then((response) => {
      commit('setManagerAllRoleDate',response.data.result)
    }).catch((err) =>{
//          console.log(err)
    })
  },

// 新增角色
  addManagerRoleAction({ commit,state},roleModel){
    axios({
      method: 'post',
      url: hostUrl + 'role/addRole.do',
      data:roleModel.roleModel
    }).then((response) => {
      // commit('setManagerAllRoleDate',response.data.result)
    }).catch((err) =>{
//          console.log(err)
    })
  },
  // 编辑角色
  editManagerRoleAction({ commit,state},roleModel){
    axios({
      method: 'post',
      url: hostUrl + 'role/editRole.do',
      data:roleModel.roleModel
    }).then((response) => {
      // commit('setManagerAllRoleDate',response.data.result)
    }).catch((err) =>{
//          console.log(err)
    })
  },
  // 删除角色
  deleteManagerRoleAction({ commit,state},roleModel){
    axios({
      method: 'post',
      url: hostUrl + 'role/deleteRole.do',
      data:roleModel.roleModel
    }).then((response) => {
      // commit('setManagerAllRoleDate',response.data.result)
    }).catch((err) =>{
//          console.log(err)
    })
  },
// 查询角色对应的权限菜单ID
  getDefaultCheckedKeysAction({ commit,state},roleModel){
    axios({
      method: 'post',
      url: hostUrl + 'role/getRoleAuth.do',
      data:roleModel.roleModel
    }).then((response) => {
      commit('setManagerRoleDefaultCheckedKeys',response.data.result)
    }).catch((err) =>{
//          console.log(err)
    })
  },
// 赋权---将菜单ID数组赋值给对应的角色
  addManagerAuthRoleAction({ commit,state},menus){
    console.log(menus)
    axios({
      method: 'post',
      url: hostUrl + 'role/addRoleAuth.do',
      data:{
        menus:JSON.stringify(menus.menus),
        roleId:menus.roleId
      }
    }).then((response) => {
      // commit('setManagerRoleDefaultCheckedKeys',response.data.result)
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

  // 获取菜单树结构数据
  getManagerMenuTreeDateAction({ commit,state},val){
    axios({
      method: 'post',
      url: hostUrl + 'menu/getMenuChildren.do',
      data:{
        "currentPage":val
      }
    }).then((response) => {
      //重新渲染tree数据
      commit('setManagerMenuTreeDate',response.data.result)
    }).catch((err) =>{
//          console.log(err)
    })
  },

  // 添加菜单
  addManagerMenuAction({ commit,state},menuModel){
    axios({
      method: 'post',
      url: hostUrl + 'menu/addMenu.do',
      data:menuModel.menuModel
    }).then((response) => {
      //初始化数据
      commit('clearManagerMenuModel')
    }).catch((err) =>{
//          console.log(err)
    })
  },
  // 修改菜单
  editManagerMenuAction({ commit,state},menuModel){
    axios({
      method: 'post',
      url: hostUrl + 'menu/editMenu.do',
      data:menuModel.menuModel
    }).then((response) => {
      //初始化数据
      commit('clearManagerMenuModel')
    }).catch((err) =>{
//          console.log(err)
    })
  },

}

export default actions
