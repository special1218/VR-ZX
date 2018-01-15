<template>
	<div class="hello">
		<main1 class="main1"></main1>
	</div>
</template>

<script>
	import main1 from './main.vue'

	export default {
		name: 'HelloWorld',
		data() {
			return {
				msg: 'Welcome to Your sunjiabnao'
			}
		},
		components: {
			main1
		}
	}
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
}
.main1 {
	width: 1190px;
	margin: 0 auto;
}
</style>