import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUi from 'element-ui' // 引入elementui组件
import 'element-ui/lib/theme-chalk/index.css' // 引入element样式
import './assets/nomoless/index.less' // 引入基础的base样式
Vue.use(ElementUi) // 注册elementui组件
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
