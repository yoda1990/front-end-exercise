import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import Pagination from '/src/components/pagination'
 
Vue.component('Pagination', Pagination) // 全局使用<Pagination/> <pagination/>

new Vue({
  render: h => h(App),
  //注册路由，此时组件中都会拥有$router $route属性
  router,
  //注册store,此时组件中都会拥有$store
  store
}).$mount('#app')