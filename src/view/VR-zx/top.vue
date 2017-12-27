<template>
  <div id="app">
    <div class="top_up">
      <ul class="ul_left">
        <li>登录</li>
        <li style="width: 72px;">立即注册</li>
        <li style="width: 67.56px;">QQ登陆</li>
        <li style="width: 72px;">微信登陆</li>
      </ul>
      <ul class="ul_right">
      	<li style="color: red;width: 93px;">签到得积分 ！</li>
      	<li style="color: red;width: 93px;">做任务赚积分</li>
      	<li style="color: orange;width: 104.72px;">QQ群;8229505</li>
      	<li style="width: 69px;">积分兑换</li>
      	<li style="width: 59px;">
      		<select style="color: #888;background: none; border: none;">
      			<option>联系我们</option>
      			<option>版权投诉</option>
      			<option>广告投放</option>
      		</select>
      	</li>
      </ul>
    </div>
    <div class="top_center">
    	<div class="top_center_top">
    		<div class="top_center_top_left">
    			<img src="../../assets/img/top_logo.png" />
          <a>专业VR技术开发社区，始建于2006年</a>
    		</div>
        <div class="top_center_top_right">
        	<ul class="serch_ul">
        		<li>
        			<select style="color: #888;background: none; border: none;">
      			    <option>帖子</option>
      			    <option>文章</option>
      			    <option>用户</option>
      		    </select>
        		</li>
        	</ul>
        	<input type="text" value="请输入搜索内容" placeholder="请输入搜索内容" />
        	<button><img src="../../assets/img/serch.png"/></button>
        </div>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>

#app {

}
.top_up{
	height: 28px;
	width: 100%;
}
.top_center{
	width: 1333px;
	height: 136px;
}
.top_center_top{
	margin: 0 auto;
	width: 1190px;
	height: 60px;
	padding: 18px 0px 18px 0px;
	padding-right: px;
}
.top_center_top a{
	display: block;
	color: #555;
	width: 210px;
	height: 16px;
	text-decoration: none;
	text-align: center;
	font: 12px/1.5 '微软雅黑',Tahoma,Helvetica,'SimSun',sans-serif;
}
.top_center_top_left{
	float: left;
}
.top_center_top_right{
	float: right;
	position: relative;
	
}
.top_center_top_right input{
	
}
.top_center_top_right button{
	border: 0;
	background: none;
}
.serch_ul{
	position: absolute;
	top: 10%;
  border: none;
  padding: 0;
  box-shadow: none;
  background: #F5F5F5;
  width: 61px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
}
li {
  display: inline-block;
  margin: 0;
  color: #888;
  font-size: 14px;
}
a {
  color: #42b983;
}
.ul_left{
	padding-left: 70.5px;
  width: 30%;
  height: 28px;
  line-height: 28px;   
  float: left;                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
}
.ul_left li{
	width: 48px;
	text-align: center;
	font-size: 12px;
}
.ul_right{
	float: right;
	height: 28px;
  line-height: 28px; 
  padding-right: 85px; 
}
</style>
