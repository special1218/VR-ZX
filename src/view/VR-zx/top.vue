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
			<a href="#" class="red" title="每日签到，一天学习好心情！">签到得积分 ！</a>
			<a href="#" class="red">做任务赚积分</a>
			<a href="#" class="orange">QQ群;8229505</a>
			<a href="#" style="color: #999;">积分兑换</a>
			<a>
				<select class="sele" style="color: #999;background: none; border: none;outline: none;">
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
						<td id="table_left">
							<a href="#" id="tiezi">
								<select style="color: #999;background: none; border: none;outline: none;">
									<option value="">帖子</option>
									<option value="">文章</option>
									<option value="">帖子</option>
									<option value="">用户</option>
								</select>
							</a>
						</td>
						<td class="table_center">
							<input type="text" name="search" id="" placeholder="请输入搜索内容" />
						</td>
						<td class="table_right">
							
						</td>
					</tr>
				</table>
				
				<ul id="scbar_type_menu" style="display: none;">
					<li>
						<a href="#" rel="article">文章</a>
					</li>
					<li>
						<a href="#" rel="forum" class="curtype">帖子</a>
					</li>
					<li>
						<a href="#" rel="user">用户</a>
					</li>
				</ul>

				
			</div>
		</div>
		<div class="nv">
			<div class="nv_left">
				<ul>
					<li>
						<a href="#" hidefocus="true" title="Portal">首页</a>
					</li>
					<li>
						<a href="#" hidefocus="true">VR资讯</a>
					</li>
					<li>
						<a href="#" hidefocus="true">VR教程</a>
					</li>
					<li>
						<a href="#" hidefocus="true">招聘外包</a>
					</li>
					<li>
						<a href="#" hidefocus="true" style="color: orange">虚幻引擎</a>
					</li>
					<li>
						<a href="#" hidefocus="true">VR公开课</a>
					</li>
					<li>
						<a href="#" hidefocus="true">VR社区</a>
					</li>
				</ul>
			</div>
			<div class="nv_right">
				<div id="a1">
					<a href="#" class="nv_right_a1"></a>
					<a href="#" class="nv_right_a2"></a>
					<a href="#" class="nv_right_a3"></a>
				</div>
				
				<!--隐藏的div-->
				<div id="b">
					<div class="erweima" id="tencent_erweima">
						<ul class="nav">
							<img src="http://www.52vr.com/template/qu_business/images/qq_erweima.jpg" width="200" height="100">
						</ul>
					</div>
					
					<div class="erweima" id="sina_erweima">
						<ul class="nav">
							<img src="http://www.52vr.com/template/qu_business/images/sina_erweima.jpg" width="200" height="100">
						</ul>
					</div>
					
					<div class="erweima" id="weixin_erweima">
						<ul class="nav">
							<img src="http://www.52vr.com/template/qu_business/images/52vr_wechat.jpg" width="200" height="100">
						</ul>
					</div>
				</div>
				
				
			</div>
		</div>
	</div>
</div>
</template>

<script>

//window.onload=function(){
//	var a=document.getElementById("a1").getElementsByTagName("a")
//	var b=document.getElementById("b").getElementsByClassName("erweima")
//	for(var item in a){
//		a[item].bh=item;
//		a[item].onmouseover=function(){
//			for(var i=0;i<b.length;i++){
//				b[i].style.display="none"
//				b[this.bh].style.display="block"
//			}
//		}
//		a[item].onmouseout=function(){
//			b[this.bh].style.display="none"
//		}
//	}
//}

window.onload=function(){
  var a=document.getElementById("a1").getElementsByTagName("a")
	var b=document.getElementById("b").getElementsByClassName("erweima")
	for(var i=0;i<a.length;i++){
		a[i].index=i;
		//鼠标移入事件
		a[i].onmouseover=function(){
			for(var j=0;j<a.length;j++){
				b[j].style.display="none"
			}
			b[this.index].style.display="block"
		}
		//鼠标移出事件
		a[i].onmouseout=function(){
			b[this.index].style.display="none"
		}
	}
	
//	var table_left=document.getElementById("table_left")
//	var scbar_type_menu=document.getElementById("scbar_type_menu")
//	table_left.onclick=function(){
//		scbar_type_menu.style.display="block"
//	}
//	table_left.onmouseout=function(){
//		scbar_type_menu.style.display="none"
//	}
}
	
			
export default {
 
}
</script>

<style scoped>
.sele option{
	border: none;
	width: 61px;
	height: 30px;
	/*background: url(http://www.52vr.com/template/qu_business/img/arrow.png) no-repeat right -70px;*/
	background-color: #f5f5f5;
}
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
	color: #f86a09;
}
.top_right{
	float: right;
	height: 28px;
  line-height: 28px;
  width: 440px; 
}
.top_right a{
	text-decoration: none;
	padding: 0 2px 0 10px;
}
.red{
	color: red;
}
.red:hover{
	color: #ff7300;
}
.orange{
	color: #ffa504;
}
.orange:hover{
	color: #ff7300;
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
#table_left{
	width: 61px;
	height: 30px;
	background: url(http://www.52vr.com/template/qu_business/img/arrow.png) no-repeat right -70px;
	background-color: #f5f5f5;
}
#table_left a{
	padding-left: 10px;
	text-decoration: none;
	color: #999;
}
#scbar_type_menu{
	width: 61px;
	height: 100px;
}
#scbar_type_menu li{
	list-style: none;
	width: 61px;
	height: 30px;
	background: #f5f5f5;
	line-height: 30px;
}
#scbar_type_menu li a{
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
.nv{
	width: 1190px;
	height: 40px;
	background: #393636;
}
.nv_left{
	width: 800px;
	height: 40px;
	float: left;
}
.nv_left ul li{
	list-style: none;
	float: left;
	  height: 40px;
    line-height: 40px;
    font-weight: 400;
    font-size: 15px;
    margin-right: 5px;
}
.nv_left ul li a{
	float: left;
	text-decoration: none;
	color: white;
	padding: 0 20px;
	height: 40px;
  line-height: 40px;
}
.nv_left ul li a:hover{
	background-color: #f5f5f5;
	color: #333;
}
.nv_right{
	width: 222px;
	height: 40px;
	float: right;
	background: ;
	position: relative;
}
.nv_right a{
	width: 44px;
	height: 40px;
	float: right;
}
.nv_right_a1{
	  background: url(http://www.52vr.com/template/qu_business/common/erweima.png) -63px 8px no-repeat;
    background-size: 100px;
}
.nv_right_a2{
	  background: url(http://www.52vr.com/template/qu_business/common/erweima.png) -26px 8px no-repeat;
    background-size: 96px;
}
.nv_right_a3{
	  background: url(http://www.52vr.com/template/qu_business/common/erweima.png) 9px 10px no-repeat;
    background-size: 100px;
}
.erweima{
	display: none;
}
</style>
