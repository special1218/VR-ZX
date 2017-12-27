import request from '../utils/request'

export function getNavById(query){
	return request({
		url:'/categories/getById',
		method: 'get',
		params: query
	})
}

export function navList(query){
	return request({
		url: '/categories/list',
		methods: 'get',
		params: query
	})
}
