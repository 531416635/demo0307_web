import Vue from 'vue'
import Router from 'vue-router'
const managerAuthIndex = r => require.ensure([], () => r(require('@/components/manager/Index')), 'managerAuthIndex')
const managerWelcome = r => require.ensure([], () => r(require('@/components/manager/Welcome')), 'managerAuthUser')
const managerAuthUser = r => require.ensure([], () => r(require('@/components/manager/auth/user')), 'managerAuthUser')
const managerAuthRole = r => require.ensure([], () => r(require('@/components/manager/auth/role')), 'managerAuthRole')
const managerAuthMenu = r => require.ensure([], () => r(require('@/components/manager/auth/menu')), 'managerAuthMenu')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/manager/welcome'
    },
    {
      path:'/manager',
      name:'managerAuthIndex',
      component:managerAuthIndex,
      children:[{
        path: '/manager/welcome',
        name: 'managerAuthUser',
        component: managerWelcome,
        meta:{title: '欢迎访问'}
      },{
        path: '/manager/auth/user',
        name: 'managerAuthUser',
        component: managerAuthUser,
        meta:{title: '用户管理'}
      },{
        path: '/manager/auth/role',
        name: 'managerAuthRole',
        component: managerAuthRole,
        meta:{title: '角色管理'}
      },{
        path: '/manager/auth/menu',
        name: 'managerAuthMenu',
        component: managerAuthMenu,
        meta:{title: '菜单管理'}
      }]
    }
  ]
})
