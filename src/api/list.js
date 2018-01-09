import request from '../utils/request'


// 分类列表
export function navList(query){
	return request({
		url: '/categories/list',
		methods: 'get',
		params: query
	})
}
// 通过分类id获取资讯并分页
export function listByPage(query){
	return request({
		url: '/infos/listByPage',
		methods: 'get',
		params: query
	})
}
// 通过列表id获取所有详情数据
export function infosGetById(query){
	return request({
		url: '/infos/getById',
		methods: 'get',
		params: query
	})
}