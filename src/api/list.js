import request from '../utils/request'

export function listByPage(query){
	return request({
		url: '/infos/listByPage',
		methods: 'get',
		params: query
	})
}

export function getListById(query){
	return request({
		url:'/infos/getById',
		method: 'get',
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
