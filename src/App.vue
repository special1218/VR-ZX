<template>
	<div id="app">
		<top1 class="top1"></top1>
		<router-view></router-view>
		<div id="box">
			<a href="#"><img src="./assets/img/dingbu.png" /></a>
		</div>
	</div>
</template>

<script>
	window.onscroll = function() {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var box = document.getElementById("box");
		box.style.display = scrollTop > 200 ? "block" : "none";
	}

	import top1 from './view/VR-zx/top.vue'
	export default {
		name: 'app',
		data() {
			return {
				msg: 'Welcome to Your sunjiabnao'
			}
		},
		components: {
			top1,
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	.top1 {
		width: 100%;
		background: #232121;
		height: 164px;
	}
	#box {
		position: fixed;
		right: 2%;
		bottom: 15%;
		display: none;
		z-index: 100;
	}
</style>