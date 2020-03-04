<template>
	<div class="wrap">
		<header>
			<router-link :to="{name: 'index'}" class="logo">
				<img src="../assets/img/logo.png" alt="美团网">
			</router-link>
		</header>
		<div class="middle after">
			<div class="promotion-banner">
				<img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt="美团网">
			</div>
			<div class="form">
				<div class="log-on-using clearfix">
					<div v-if="!error">
						<span class="account-log">账号登录</span>
						<span class="dynamic-code-log">手机动态码登录
							<i class="el-icon-mobile-phone"></i>
						</span>
					</div>
					<div v-else="error" class="tips">
						<i class="el-icon-remove"></i>{{error}}
					</div>
				</div>
				<div class="inner-form">
					<div class="input-box">
						<p class="coun">
							<span class="phone-tips">+86<i class='el-icon-arrow-right'></i></span>
							<span>手机号</span></p>
						<input type="text32" v-model="username"></input>
					</div>
					<div class="input-box">
						<p><i class="lock"></i>密码</p>
						<input v-model="password">
						</input>
					</div>
				</div>
				<p class="forget-pass"><a href="/index">忘记密码?</a></p>
				<el-button class="login-btn" @click="submit">
					<h4>登录</h4>
				</el-button>
				<p class="free-register">还没有账号？<router-link class="register-lk" :to="{name: 'register'}">免费注册</router-link>
				</p>
				<div class="other-log-way">
					<h4 class="log-way-title">
						<span>用合作网站账号登录</span>
					</h4>
					<div class="oauth">
						<span class="oauth-tencent"></span>
						<span class="oauth-weibo"></span>
					</div>
				</div>
			</div>
		</div>
		<footer>
			<ul class="site-info-nav after">
				<li>
					<router-link to="/">关于美团</router-link>
				</li>
				<li>
					<router-link to="/">加入我们</router-link>
				</li>
				<li>
					<router-link to="/">商家入驻</router-link>
				</li>
				<li>
					<router-link to="/">帮助中心</router-link>
				</li>
				<li>
					<router-link to="/">美团手机版</router-link>
				</li>
			</ul>
		</footer>
	</div>
</template>

<script>
	export default {
		mounted() {
			this.userInfo = this.$store.state.userInfo;
			console.log(this.userInfo)
		},
		data() {
			return {
				username: '',
				password: '',
				error: '',
				userInfo: []
			}
		},
		methods: {
			submit() {
				//用正则表达式匹配第一个是1，第二个是(3.4.5.8)中任意一个数字，剩下9位是数字的一串数字
				let reg = /^1[3|4|5|8][0-9]{9}$/;
				const matchReg = new RegExp(reg);
				// console.log(matchReg)
				if (!this.username) {
					this.error = "请输入用户名";
				} else if (!(matchReg.test(this.username))) {
					this.error = "请输入正确的手机号";
				} else if (!this.password) {
					this.error = "请输入密码";
				} else {
					console.log(this.userInfo);
					this.userInfo.forEach((ele, index) => {
						if (ele.username == this.username && ele.password == this.password) {
							this.$store.commit( 'setLoginUser', {
								userName: this.username,
								password: this.password
							})
							console.log(this.$store.state.loginInfo)
							alert('登录成功，确定跳转到首页吗?');
							this.$router.push('/')
						} else {
							console.log(1)
							this.error = "用户名或密码不正确，请重新输入";
						}
					})

				}
			}
		}
	}
</script>

<style scoped>
	@import '../assets/css/default/login/login.css';
</style>
