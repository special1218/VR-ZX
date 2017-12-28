<template>
	<div class="hello">
		<top1 class="top1"></top1>
		<nav1 class="nav1"></nav1>
		<main1 class="main1"></main1>
		<footer1 class="footer1"></footer1>
		<div id="box">
			<a href="#"><img src="../../assets/img/dingbu.png" /></a>
		</div>
	</div>
</template>

<script>
	window.onscroll = function() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var box = document.getElementById("box");
		box.style.display = scrollTop > 200 ? "block" : "none";
	}
	import top1 from './top.vue'
	import nav1 from './nav.vue'
	import main1 from './main.vue'
	import footer1 from './footer.vue'

	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'Welcome to Your sunjiabnao'
			}
		},
		components: {
			top1,
			nav1,
			main1,
			footer1
		}
	}
</script>

<style scoped>
	* {
		margin: 0;
		padding: 0;
		background: #F5F5F5;
	}
	
	.top1 {
		width: 100%;
		background: #232121;
		height: 164px;
	}
	
	.nav1 {
		width: 1190px;
		height: 45px;
		border: 1px solid #EDEDED;
		margin: 0 auto;
	}
	
	.main1 {
		width: 1190px;
		margin: 0 auto;
	}
	
	.footer1 {
		border-top: 1px solid #EDEDED;
		clear: both;
		width: 100%;
		height: 103px;
	}
	
	#box {
		position: fixed;
		right: 10%;
		bottom: 15%;
		display: none;
		z-index: 100;
	}
</style>