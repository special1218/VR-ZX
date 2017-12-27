<template>
  <div class="hello">
    <top1 class="top1"></top1>
    <nav1 class="nav1"></nav1>
    <main1 class="main1"></main1>
    <footer1 class="footer1"></footer1>
  </div>
</template>

<script>
	
	import top1 from './top.vue'
	import nav1 from './nav.vue'
	import main1 from './main.vue'
	import footer1 from './footer.vue'
	
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your sunjiabnao'
    }
  },
  components:{
  	top1,
  	nav1,
  	main1,
  	footer1
  }
}
</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
	background: #F5F5F5;
}
.top1{
	width: 100%;
  background: #232121;
  height: 164px;
}

.nav1{
  width: 1190px;
	height: 45px;
	border: 1px solid #EDEDED;
	margin: 0 auto;
}
.main1{
	width: 1190px;
  height: 600px;
  background: green;
  margin: 0 auto;
  border: 1px solid #EDEDED;
}
.footer1{
	width: 1190px;
	margin: 0 auto;
	border: 1px solid #EDEDED;
}
</style>
