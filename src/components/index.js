//  注册全局组件
import lestlayout from './home/lest-layout.vue'
import toplayout from './home/top-layout'
import middlelayout from './home/middle-layout'
// 导出对象里面有个install方法
export default {
  install (Vue) {
    Vue.component('lest-layout', lestlayout)// 注册左面组件
    Vue.component('top-layout', toplayout)// 注册上面组件
    Vue.component('middle-layout', middlelayout)// 注册中间组件
  }
}
