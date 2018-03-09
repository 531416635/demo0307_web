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
//菜单管理
const managerMenu = r => require.ensure([], () => r(require('@/components/manager/menu/menu')), 'managerMenu')

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
        path: '/manager/menu',
        name: 'managerMenu',
        component: managerMenu,
        meta:{title: '菜单管理',keepAlive:true}
      }]
    }
  ]
})
