<template>
	<div id="app">
		<div class="boo" v-for="data in arr">
			<div id="zuo">
				<p id="dati">{{data.title}}</p>
				<p id="zhongti">{{data.content}}<a href="#">[详细]</a></p>
				<ul>
					<li><button><a href="#">VR资讯</a></button></li>
					<li>{{data.pv}}人浏览</li>
					<li>{{data.author}}</li>
					<li>发布时间：{{data.created_time}}</li>
				</ul>
			</div>
			<div id="you">
				<p><img :src="data.img" /></p>
			</div>
		</div>
	</div>
</template>

<script>
	
	import {List} from '../../api/list'
	
	export default {
		data() {
			return {
				arr: []
			}
		},
		created(){
			this.getList()
		},
		methods:{
			getList(){
				const id=this.$route.params.id
				List({id:id}).then(res=>{
					this.arr=res.data.data
						console.log(res.data)
				})
			}
		}
	}
</script>

<style scoped>
	* {
		margin: 0 auto;
		padding: 0;
	}
	
	.boo {
		margin-bottom: 20px;
		width: 1150px;
		display: flex;
		padding: 20px 20px;
		background: white;
	}
	
	#zuo {
		width: 70%;
	}
	#zuo ul li {
		list-style: none;
		color: #b6b6b6;
		line-height: 40px;
		float: left;
		padding: 0px 20px 0px 20px;
	}
	
	#zuo ul li button {
		background: white;
		border: none;
	}
	
	#zuo ul li button a{
		display: block;
		padding: 5px 40px;
		border: 1px #b6b6b6 solid;
		color: #b6b6b6;
		border-radius: 20px;
		text-decoration: none;
	}
	
	#zuo ul li button a:hover{
		background: #ca3232;
		color: white;
	}
	
	#dati {
		font-size: 20px;
		padding: 20px 30px;
		color: #444444;
	}
	
	#zhongti {
		padding: 0px 30px 60px 30px;
		/*display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;*/
		color: #b6b6b6;
	}
	
	#you {
		width: 30%;
	}
	
	#you p {
		text-align: center;
		padding: 30px 0px;
	}
</style>