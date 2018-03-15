import Vue from 'vue'
import App from './App'
import router from './router'

import store from './vuex/store' // 导入自定义的store仓库
import VueRouter from 'vue-router' // 导入Vue路由插件
import VueResource from 'vue-resource' // 导入Resource资源插件
import FastClick from 'fastclick'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.css'
import '../static/css/main.css'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI);

FastClick.attach(document.body)
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
