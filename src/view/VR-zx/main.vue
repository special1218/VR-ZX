<template>
	<div id="main1">
		<div class="q_list_recommend cl">
			<dl class="cl">
				<dt>
		          VR资讯<a href="http://www.52vr.com/portal.php?mod=rss&amp;catid=26" target="_blank" title="RSS">订阅</a>
				</dt>
				<dd v-for="data in listData" @click="clickCategory(data.id)">
					 <span>{{data.category_name}}</span>
				</dd>
			</dl>
		</div>
		
	
	<div class="boo" v-for="(data,index) in arr">
			<div id="zuo">
				<span id="dati" @click="pup(data.id)">{{data.title}}</span>
				<p id="zhongti">{{data.content}}<a href="#" style="color: #3587ec !important;">[详细]</a></p>
				<ul style="margin-top: 15px;">
					<li style="padding-left: 0;"><button><a href="#">VR资讯</a></button></li>
					<li>{{data.pv}}人浏览</li>
					<li>{{data.author}}</li>
					<li>发布时间：{{data.created_time}}</li>
				</ul>
			</div>
			<div id="you">
				<span @click="pup(data.id)"><img :src="data.thumbnail"  class="img"/></span>
			</div>
		</div>
	</div>
</template>

<script>

	import {listByPage,navList} from '../../api/list'
	
	export default {
		data(){
			return{
				a:[],
				arr:[],
				listData: [],
				cat_id: 0,
				llistpage:{
			    	page:1,
			    	limit:3
			   },
			}
		},
		created(){
			const id=this.$route.params.id
			navList({id:id}).then(res=>{
				this.listData=res.data.data
			})
			listByPage({
				page:1,
				limit:3,
				category_id:1
			}).then(res=>{
				this.arr=res.data.data
			})
		},
		methods: {
			clickCategory(catid){
				this.cat_id = catid;
				this.gitList()
			},
            gitList() {
                listByPage({
                	page:this.llistpage.page,
                	limit:this.llistpage.limit,
                	category_id:this.cat_id
                }).then(res=>{
					this.arr=res.data.data
				})
			},
			pup(id){
				this.$router.push('/list/'+id)
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
#main1{
	margin-top: 20px;
}
.q_list_recommend {
	background-color: #FFF;
	height: 45px;
	width: 1190px;
	border: 1px solid #EDEDED;
}

.q_list_recommend dl {
	line-height: 44px;
}

.q_list_recommend dt {
	color: #333;
	font-weight: 700;
	font-size: 16px;
}

.q_list_recommend dt {
	float: left;
	display: inline;
	padding: 0px 14px;
}

.q_list_recommend dt a {
	margin-left: 20px;
	font-size: 12px;
	font-weight: 400;
	text-decoration: none;
	color: #f60 !important;
}

.q_list_recommend dd {
	float: right;
	display: inline;
	padding: 0px 24px;
}

.q_list_recommend dd {
	border-left: 1px dashed #EDEDED;
	height: 44px;
	line-height: 44px;
	font-size: 14px;
	border-bottom: 1px solid #eee;
	margin-bottom: -1px;
}
.q_list_recommend dd a{
	text-decoration: none;
}
.q_list_recommend a:link,
.q_list_recommend a:visited {
	color: #888;
}
.boo {
	margin-top: 20px;
	width: 1190px;
	height: 208px;
	display: flex;
	padding-top: 20px;
	background: white;
	border: 1px solid #EDEDED;
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