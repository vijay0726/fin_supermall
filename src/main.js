import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'
// import VueLazyLoad from 'vue-lazyload'

Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

// 使用懒加载插件
// Vue.use(VueLazyLoad, {
//   loading:require('占位图路径')
// })
//在图片展示的地方使用v-lazy指令
FastClick.attach(document.body)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
