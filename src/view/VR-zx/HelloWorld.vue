<template>
  <div class="hello">
    <top1></top1>
    <nav1></nav1>
    <main1></main1>
    <footer1></footer1>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
