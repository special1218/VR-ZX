<template>
	<div id="app" style="margin-top: 16px;">
		<div id="box1">
			<div class="zuo">
				<p><a href="#">www.52vr.com</a></p>
			</div>
			<div class="you">
				<p><a href="#">手机版</a> | <a href="#" style="font-weight: bold;">VR开发网</a> | <a href="#" title="网站地图">网站地图</a> <a href="#">统计</a> 津ICP备16006248号</p>
				<p>GMT+8,2017-12-27 10:08 AM</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}
.pg{
	position: absolute;
	right: 10px;
	top: -10px;
}
#box1 {
	position: relative;
	width: 1190px;
	height: 73px;
	margin: 0 auto;
	padding: 20px 0px;
	font-size: 10px;
}

.zuo{
	width: 50%;
	float: left;
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
	float: right;
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
	color: #666;
}
</style>