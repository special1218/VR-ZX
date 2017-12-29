import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/view/VR-zx/HelloWorld'
import sqIndex from '@/view/VR-sq/sq-index'
import zymList from '@/view/VR-zx/VR-zym/zym-list'
Vue.use(Router)

export default new Router({
	routes: [
		{path: '/',redirect:'HelloWorld'},
		{path: '/HelloWorld',name: 'HelloWorld',component: HelloWorld},
		{path: '/sqIndex',name: 'sqIndex',component: sqIndex},
		{path: '/zymList',name: 'zymList',component: zymList}
	]
})