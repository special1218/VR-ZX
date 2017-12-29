import request from '../utils/request'

export function listByPage(query){
	return request({
		url: '/infos/listByPage',
		methods: 'get',
		params: query
	})
}

export function infosGetById(query){
	return request({
		url: '/infos/getById',
		methods: 'get',
		params: query
	})
}

export function List(query){
	return request({
		url: '/infos/list',
		methods: 'get',
		params: query
	})
}

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
