import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/VR-zx/HelloWorld'
import list from '@/view/VR-zx/VR-zym/list.vue'

Vue.use(Router)

export default new Router({
	mode:'history',
	routes: [
		{path: '/',redirect:'HelloWorld'},
		{path: '/HelloWorld',component: HelloWorld},
		{path: '/list/:id',component: list}
	]
})