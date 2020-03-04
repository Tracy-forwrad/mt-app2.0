<template>
	<div class="top-nav-wrap">
		<ul class="top-nav inner-wrap">
			<li class="top-item-left top-item">
				<ul class="top-left">
					<li class="top-item--little">
						<i class="el-icon-location"></i><span>{{$store.state.cityInfo.name}}</span>
					</li>
					<li class="top-item--little"><a class="change-city" href="/changeCity">切换城市</a></li>
					<li class="top-item--little">[
						<span class="hot-area"  
							  v-for="(c,index) in $store.state.cityInfo.hotArea" 
							  :key="index">{{c}}</span>
					]</li>
					<li v-if="!logined" 
						class="top-item--little">
						<a href="/login" class="now-login">立即登录</a>
					</li>
					<li v-else="logined"
						class="top-item--little">
						<a href="/login" class="now-login">{{$store.state.loginInfo.userName}}</a>
					</li>
					<li v-if="!logined"
						class="top-item--little">
						<a href="/login">注册</a>
					</li>
					<li v-else="logined"
						class="top-item--little">
						<a href="/login" >退出</a>
					</li>
				</ul>
			</li>
			<li class="top-item-right top-item">
				<ul class="top-right" >
					<li :class="{'top-right-item--little': true,hasChild: item.list}" v-for="(item,index) in navList" :key="index" class="top-item--little site-nav-item">
						<a href="#">{{item.title}}</a>
						<ul class="child-list">
							<li class="child-item" v-for="(i,iIndex) in item.list" :key="iIndex">
								<a href="#">{{i}}</a>
							</li>
						</ul>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script> 
	export default{
		data(){
			return{
				navList: []
			}
		},
		mounted(){
			this.$http({
				methods: 'get',
				url: 'static/json/siteServiceInfo.json',
			}).then( res => {
				console.log(res)
				this.navList = res.data.serviceInfo;
			});
			console.log(this.navList)
		},
		props: ['logined']
	}
</script>

<style scoped>
@import '../../assets/css/header/topNav.css';
	*{
		text-align: center;
	}
</style>

