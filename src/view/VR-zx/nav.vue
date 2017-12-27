<template>
	<div class="q_list_recommend cl">
		<dl class="cl">
			<dt>
	    VR资讯<a href="http://www.52vr.com/portal.php?mod=rss&amp;catid=26" target="_blank" title="RSS">订阅</a>
			</dt>
			<dd v-for="data in arr">
				<a href="">{{data.category_name}}</a>
			</dd>
		</dl>
	</div>
</template>

<script>
	
	import {navList} from '../../api/nav'
	
	export default {
		data(){
			return{
				arr:[]
			}
		},
		created(){
			const id=this.$route.params.id
			navList({id:id}).then(res=>{
				this.arr=res.data.data
				console.log(res.data)
			})
		}
	}
</script>

<style scoped>
.cl{
	margin-top: 0px;
}
.q_list_recommend {
	background-color: #FFF;
	margin: 15px auto;
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

.q_list_recommend a:link,
.q_list_recommend a:visited {
	color: #888;
}

</style>