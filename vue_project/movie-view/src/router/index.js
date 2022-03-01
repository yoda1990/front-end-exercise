import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewHelloWorld from '@/components/NewHelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/NewHelloWorld',
      name: 'NewHelloWorld',
      component: NewHelloWorld
    }
  ]
})
