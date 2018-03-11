import Vue from 'vue'
import Router from 'vue-router'
//后台管理首页和欢迎页
const managerIndex = r => require.ensure([], () => r(require('@/components/manager/Index')), 'managerIndex')
const managerWelcome = r => require.ensure([], () => r(require('@/components/manager/Welcome')), 'managerUser')
//用户管理
const managerUser = r => require.ensure([], () => r(require('@/components/manager/user/user')), 'managerUser')
const managerAddUser = r => require.ensure([], () => r(require('@/components/manager/user/addUser')), 'managerAddUser')
//角色管理
const managerRole = r => require.ensure([], () => r(require('@/components/manager/role/role')), 'managerRole')
//角色管理 -- auth赋权页面
const managerAuthRole = r => require.ensure([], () => r(require('@/components/manager/role/authRole')), 'managerAuthRole')
//菜单管理 -- table展示
const managerMenu = r => require.ensure([], () => r(require('@/components/manager/menu/menu')), 'managerMenu')
//菜单管理 -- tree展示
const managerMenuTree = r => require.ensure([], () => r(require('@/components/manager/menu/menuTree')), 'managerMenuTree')
//菜单管理 -- 详情展示
const managerShowMenu = r => require.ensure([], () => r(require('@/components/manager/menu/showMenu')), 'managerShowMenu')
//菜单管理 -- 添加菜单
const managerAddMenu = r => require.ensure([], () => r(require('@/components/manager/menu/addMenu')), 'managerAddMenu')
//菜单管理 -- 修改菜单
const managerEditMenu = r => require.ensure([], () => r(require('@/components/manager/menu/editMenu')), 'managerEditMenu')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/manager/welcome'
    },
    {
      path:'/manager',
      name:'managerIndex',
      component:managerIndex,
      children:[{
        path: '/manager/welcome',
        name: 'managerUser',
        component: managerWelcome,
        meta:{title: '欢迎访问'}
      },{
        path: '/manager/user',
        name: 'managerUser',
        component: managerUser,
        meta:{title: '用户管理',keepAlive:true},
      },{
        path: '/manager/addUser',
        name: 'managerAddUser',
        component: managerAddUser,
        meta:{title: '添加用户'},
      },{
        path: '/manager/role',
        name: 'managerRole',
        component: managerRole,
        meta:{title: '角色管理',keepAlive:true}
      },{
        path: '/manager/authRole',
        name: 'managerAuthRole',
        component: managerAuthRole,
        meta:{title: '角色赋权',keepAlive:true}
      },{
        path: '/manager/menu',
        name: 'managerMenu',
        component: managerMenu,
        meta:{title: '菜单管理',keepAlive:true}
      },{
        path: '/manager/menuTree',
        name: 'managerMenuTree',
        component: managerMenuTree,
        meta:{title: '菜单管理',keepAlive:true}
      },{
        path: '/manager/showMenu',
        name: 'managerShowMenu',
        component: managerShowMenu,
        meta:{title: '菜单详情',keepAlive:true}
      },{
        path: '/manager/addMenu',
        name: 'managerAddMenu',
        component: managerAddMenu,
        meta:{title: '新增菜单',keepAlive:true}
      },{
        path: '/manager/editMenu',
        name: 'managerEditMenu',
        component: managerEditMenu,
        meta:{title: '修改菜单',keepAlive:true}
      }]
    }
  ]
})
