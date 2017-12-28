<template>
	<div id="app">
		<div class="boo" v-for="(data,index) in arr">
			<div id="zuo">
				<a href="#" id="dati" @click="tiaozhuan(index)">{{data.title}}</a>
				<p id="zhongti">{{data.content}}<a href="#" style="color: #3587ec !important;">[详细]</a></p>
				<ul style="margin-top: 15px;">
					<li style="padding-left: 0;"><button><a href="#">VR资讯</a></button></li>
					<li>{{data.pv}}人浏览</li>
					<li>{{data.author}}</li>
					<li>发布时间：{{data.created_time}}</li>
				</ul>
			</div>
			<div id="you">
				<a href="#"><img :src="data.thumbnail"  class="img"/></a>
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
			},
			tiaozhuan(id){
				this.$router.push('/zymList')
			}
		}
	}
</script>

<style scoped>
* {
	margin: 0 auto;
	padding: 0;
	font-size: 12px;
	color: #888;
}
.boo {
	margin-bottom: 20px;
	width: 1190px;
	height: 208px;
	display: flex;
	padding-top: 20px;
	background: white;
}
#zuo {
	width: 70%;
	height: 228px;
}
#zuo ul li {
	list-style: none;
	color: #999;
	line-height: 40px;
	float: left;
	padding: 0px 20px 0px 20px;
}
#zuo ul li button {
	width: 112px;
	height: 22px;
	background: white;
	border: none;
}
#zuo ul li button a{
	padding: 3px 6px;
	display: block;
	border: 1px #b6b6b6 solid;
	color: #b6b6b6;
	border-radius: 20px;
	text-decoration: none;
}
#zuo ul li button a:hover{
	background: #E52E2A;
	color: white;
	border: none;
}
#dati {
	display: block;
	font-size: 20px;
	margin: 20px 0px;
	color: #444444;
	text-decoration: none;
}
#dati:hover{
	color: #0d58b4;
}
#zhongti {
	font-size: 14px;
	height: 72px;
}
#you {
	width: 20%;
}
.img{
	width: 240px;
	height: 136px;
	padding-top: 20px;
}
</style>