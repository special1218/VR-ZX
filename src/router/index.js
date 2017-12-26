import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/VR-zx/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
