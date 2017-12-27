<template>
	<div id="app">
		<div class="zuo">
			<p><a href="#">www.52vr.com</a></p>
		</div>
		<div class="you">
			<p><a href="#">手机版</a> | <a href="#" style="font-weight: bold;">VR开发网</a> | <a href="#">网站地图</a> <a href="#">统计</a> 津ICP备16006248号</p>
			<p>GMT+8,2017-12-27 10:08 AM</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
	}
	
	#app {
		padding: 15px 0px;
		display: flex;
		font-size: 10px;
	}
	
	.zuo{
		width: 50%;
		font-weight: bold;
	}
	.zuo p a{
		text-decoration: none;
		color: black;
	}
	
	.zuo p a:hover{
		color: blue;
	}
	
	.you{
		width: 50%;
	}
	
	.you p a{
		text-decoration: none;
		color: black;
	}
	
	.you p a:hover{
		color: blue;
	}
	.you p{
		text-align: right;
	}
</style>