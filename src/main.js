// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store';
// 重置浏览器默认样式
import './assets/css/reset.css'
// 引入ivew UI 组件库
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.config.productionTip = false
// axios请求挂载到Vue实例中
Vue.prototype.$http = axios
Vue.use(iView, {
  transfer: true,
  size: 'large'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
