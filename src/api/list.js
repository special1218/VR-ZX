import request from '../utils/request'

export function List(query){
	return request({
		url: '',
		methods: 'get',
		params: query
	})
}
