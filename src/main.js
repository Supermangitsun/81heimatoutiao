import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUi from 'element-ui' // 引入elementui组件
import 'element-ui/lib/theme-chalk/index.css' // 引入element样式
import './assets/nomoless/index.less' // 引入基础的base样式
import axios from 'axios' // 引用axios
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 将后台的接口地址给axios
Vue.prototype.$axios = axios // 把axios给vue的原型属性，以后可以在组件里直接this.$axios...
Vue.use(ElementUi) // 注册elementui组件
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
