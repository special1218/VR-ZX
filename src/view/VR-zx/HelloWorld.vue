<template>
	<div class="hello">
		<main1 class="main1"></main1>
		<footer1 class="footer1"></footer1>
	</div>
</template>

<script>
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

</style>