<template>
	<div id="app">
		<div class="aaa" v-for="data in arr">
			<p class="biao">{{data.title}}</p>
			<p class="shi"><span>查看：{{data.pv}} | 评论：1</span>{{data.created_time}} | 发布者：{{data.author}} | 原作者：{{data.promulgator}}</p>
			<p class="nei">{{data.content}}</p>
			<p class="tu"><img :src="data.thumbnail" alt=""></p>
			<p class="sao">52VR.COM微信扫一扫</p>
			<p class="tupian">
				<img src="http://www.52vr.com/template/qu_business/images/52vr_wechat.jpg" />
			</p>
			<p class="zhuan">专注于VR的学习、开发和人才交流</p>
			<p class="jiaru"><img src="http://pub.idqqimg.com/wpa/images/group.png" /></p>
			<p class="fen"><button style="padding: 3px 10px; background: green;color: white; border: none; border-radius: 5px;">分享到微信</button> <button style="padding: 3px 10px; background: #ca3232;color: white; border: none; border-radius: 5px;">新浪</button> <button style="padding: 3px 10px; background: goldenrod;color: white; border: none; border-radius: 5px;">空间</button> <button style="padding: 3px 10px; background: darkcyan;color: white; border: none; border-radius: 5px;">腾讯</button></p>
		</div>
	</div>
</template>

<script>

import {infosGetById} from '../../../api/list'
	export default {
		name: 'app',
		data() {
			return {
				arr:[],
				id:''
			}
		},
		created(){
			this.id=this.$route.params.id
			infosGetById({
				id:this.id
			}).then(res=>{
				console.log(this.id)
				this.arr=res.data
				console.log(res.data.data)
			})
		}
	}
</script>

<style scoped>

*{
	margin: 0 ;
	padding: 0;
}
#app{
	width: 100%;
	background: #F5F5F5;
}
.aaa {
	margin-top: 15px;
	width: 1190px;
	background: white;
	margin: 0 auto;
}

.biao {
	margin-top: 20px;
	font-size: 18px;
	text-align: center;
	padding: 15px 0px;
}

.shi {
	margin: 5px 10px;
	font-size: 12px;
	padding: 10px 10px;
	background: #fafafa;
    border-bottom: 1px dashed #e2e2e2;
}

.shi span {
	float: right;
}

.tu {
	text-align: center;
	padding: 25px 0px;
}

.tu img {
	width: 700px;
	height: 418px;
}

.nei {
	padding: 30px 10px 20px 50px;
}

.touxian {
	padding: 10px 10px;
	font-size: 12px;
	color: #369;
}

.sao {
	padding: 5px 0px;
	text-align: center;
	font-size: 14px;
}

.tupian {
	text-align: center;
}

.tupian img{
	width: 320px;
	height: 160px;
}

.zhuan {
	text-align: center;
	font-size: 14px;
}

.jiaru {
	text-align: center;
}

.fen {
	text-align: right;
	margin-top: 30px;
	padding: 10px 10px;
	border-bottom: 1px #ccc solid;
}
</style>