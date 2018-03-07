import Vue from 'vue'
import Router from 'vue-router'
const counter = r => require.ensure([], () => r(require('@/components/demo/Counter')), 'counter')
const managerAuthIndex = r => require.ensure([], () => r(require('@/components/manager/Index')), 'managerAuthIndex')
const managerAuthUser = r => require.ensure([], () => r(require('@/components/manager/auth/user')), 'managerAuthUser')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/manager'
    },
    {
      path: '/counter',
      name: 'counter',
      component: counter
    },
    {
      path:'/manager',
      name:'managerAuthIndex',
      component:managerAuthIndex,
      children:[{
          path: '/manager/auth/user',
          name: 'managerAuthUser',
          component: managerAuthUser
      }]
    }
  ]
})
