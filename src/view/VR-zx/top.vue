<template>
<div id="app">
	<div class="top_up">
		<div class="top_left">
			<a href="#">登录</a>
			<a href="#">立即注册</a>
			<a href="#">QQ登陆</a>
			<a href="#">微信登陆</a>
		</div>
		<div class="top_right">
			<a style="color: red">签到得积分 ！</a>
			<a style="color: red">做任务赚积分</a>
			<a style="color: orange">QQ群;8229505</a>
			<a style="color: #999;">积分兑换</a>
			<a>
				<select style="color: #888;background: none; border: none;">
					<option>联系我们</option>
					<option>版权投诉</option>
					<option>广告投放</option>
				</select>
			</a>
		</div>
	</div>
	<div class="top_bottom">
		<div class="logo">
			<div class="logo_left">
				<img src="../../assets/img/top_logo.png"/>
				<a href="#" class="top_bottom_a">专业VR技术开发社区,始建于2006年</a>
			</div>
			<div class="logo_right">
				<table cellspacing="0" cellpadding="0">
					<tr>
						<td class="table_left">
							<a href="#">帖子</a>
						</td>
						<td class="table_center">
							<input type="text" name="search" id="" placeholder="请输入搜索内容" />
						</td>
						<td class="table_right">
							
						</td>
					</tr>
				</table>
			</div>
		</div>
		<div class="nv">
			
		</div>
	</div>
</div>
</template>

<script>
export default {
 
}
</script>

<style scoped>

#app {
	font-size: 12px;
}
.top_up{
	height: 28px;
	width: 1190px;
	margin: 0 auto;
}
.top_left{
	width: 260px;
  height: 28px;
  line-height: 28px;   
  float: left;                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
}
.top_left a{
	text-decoration: none;
	padding: 0 12px;
	color: #999;
}
.top_left a:hover{
	color: orangered;
}
.top_right{
	float: right;
	height: 28px;
  line-height: 28px;
  width: 440px; 
}
.top_right a{
	padding: 0 2px 0 10px;
}
.top_bottom{
	width: 1190px;
	height: 136px;
	margin: 0 auto;
}
.logo{
	width: 1190px;
	height: 60px;
	padding: 18px 0;
}
.nv{
	width: 1190px;
	height: 40px;
	background: green;
}
.logo_left{
	width: 208px;
	height: 62px;
	float: left;
}

.top_bottom_a{
	color: #555;
	text-decoration: none;
}
.top_bottom_a:hover{
	color: #e69daa;
}
.logo_right{
	width: 436px;
	height: 30px;
	float: right;
	padding: 4px 0;
	margin-top: 10px;
}
table{
	width: 436px;
	height: 30px;
}
.table_left{
	width: 61px;
	height: 30px;
	background: url(http://www.52vr.com/template/qu_business/img/arrow.png) no-repeat right -70px;
	background-color: #f5f5f5;
}
.table_left a{
	padding-left: 10px;
	text-decoration: none;
	color: #999;
}

.table_center{
	width: 305px;
	height: 30px;
	background: white;
}
.table_center input{
	width: 300px;
	height: 18px;
	padding: 1px 0px 1px 5px;
	outline: none;
	border: none;
	color: #999;
}
.table_right{
	width: 70px;
	background: url(http://www.52vr.com/template/qu_business/img/search.png) no-repeat center center;
	background-color: #4691f3;
}
</style>
