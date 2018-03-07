// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './vuex/store' // 导入自定义的store仓库
import VueRouter from 'vue-router' // 导入Vue路由插件
import VueResource from 'vue-resource' // 导入Resource资源插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.css'
import '../static/css/main.css'

// 禁用输出生产提示
// Vue.config.productionTip = false


Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
