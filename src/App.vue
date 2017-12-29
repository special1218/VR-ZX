<template>
	<div id="app">
		<top1 class="top1" style="background: #232121;"></top1>
		<router-view></router-view>
		<footer1 class="footer"></footer1>
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
	import footer1 from './view/VR-zx/footer.vue'
	export default {
		name: 'app',
		data() {
			return {
				
			}
		},
		components: {
			top1,
			footer1
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	#app{
	   background: #F5F5F5;
	}
	.top1 {
		width: 100%;
		height: 164px;
	}
	.footer1 {
		border-top: 1px solid #EDEDED;
		clear: both;
		width: 100%;
		height: 103px;
	}
	#box {
		position: fixed;
		right: 2%;
		bottom: 15%;
		display: none;
		z-index: 100;
	}
</style>