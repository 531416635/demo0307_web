/**
 * State of Vuex
 */

// 声明state状态
const state = {

  //后台管理--用户管理--table数据
  managerUserTableData:[],
  managerUserTableCurrentPage:1,
  managerUserTableTotalPage:0,
  //后台管理--角色管理--table数据
  managerRoleTableData:[],
  managerRoleTableCurrentPage:1,
  managerRoleTableTotalPage:0,
  //后台管理--菜单管理--tree数据
  managerMenuTreeData:[],
  //后台管理--菜单管理--table数据
  managerMenuTableData:[],
  managerMenuTableCurrentPage:1,
  managerMenuTableTotalPage:0,
  //后台管理--菜单管理--菜单数据新增、查看、修改
  managerMenuModel: {
    id: "",
    menuPath: "",
    menuName:"",
    menuType:"",
    menuParent:"",
    menuAuth:"",
    menuEnabled:"",
    defaultSelect:"",
    children:[],
  }
}

export default state
