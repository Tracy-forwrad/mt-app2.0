<template>
	<div class="regis-wrap">
		<header>
			<div class="site-logo">
				<a class="site-logo-lk" href="http://www.meituan.com"></a>
			</div>
			<div class="direct-log">
				<span>已有美团账号?</span>
				<a href="/login">
					<el-button>登录</el-button>
				</a>
			</div>
		</header>
		<div class="body">
			<el-form :model="registerForm" status-icon :rules="rules" ref="registerForm" label-width="100px" class="demo-ruleForm">
				<el-form-item class="input-wrap  phone-wrap" label="手机号" prop="userName">
					<el-input class="phone-box" type="text" v-model="registerForm.userName" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item class="free-code  dynamic-code">
					<el-input type='button' value="免费获取短信动态码" @click.native="getDyaCode"></el-input>
				</el-form-item>
				<el-form-item label="短信验证码" prop="inputCode">
					<el-input @input="checkCode" type="numver" v-model="inputCode"></el-input>
				</el-form-item>
				<el-form-item class="input-wrap cre-pas" label="创建密码" prop="password">
					<el-input type="password" v-model="registerForm.password" autocomplete="off" @input="input"></el-input>
					<div class="strength">
						<div :class="['bar',strengClass]"></div>
						<div class="color-show">
							<span>强</span>
							<span>中</span>
							<span>弱</span>
						</div>
					</div>
				</el-form-item>
				<el-form-item class="input-wrap certain-password" label="确认密码" prop="rePassword">
					<el-input type="password" v-model="registerForm.rePassword" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item class="agree-pro-wrap">
					<el-button class="agree-pro" @click="submitForm('registerForm')">
						<h4>同意以下协议并注册</h4>
					</el-button>
				</el-form-item>
				<div class="input-wrap protrol">
					<span><a href="#">《美团网用户协议》</a></span>
					<span><a href="#">《美团网隐私协议》</a></span>
				</div>
			</el-form>


			<!-- <div class="input-wrap  phone-wrap"><label for="phone">手机号</label>
				<input class="phone-box" id="phone" v-model="registerForm.userName" placeholder="请输入内容"></input>
				<span class="res-suc-tip">注册成功后，全美团通用</span>
				<span class="tips"><i class="el-icon-remove"></i>请输入正确的11位手机号码</span>
			</div>
			<div class="free-code"><input type='button' value="免费获取短信动态码"></input></div>
			<div class="input-wrap dynamic-code">
				<label for="dyn-code">短信动态码</label>
				<input type="text" id="dyn-code" class="dynamic-code-box">
				<span class="tips"><i class="el-icon-remove"></i>请输入正确的11位手机号码</span>
				</diedv>
				<div class="input-wrap create-password">
					<label for="cre-pas">创建密码</label>
					<input type="password" id="cre-pas" v-model="registerForm.password">
					<span class="tips"><i class="el-icon-remove"></i>请输入正确的11位手机号码</span>
				</div>
				<div class="strength">
					<div class="bar"></div>
					<div class="color-show">
						<span>强</span>
						<span>中</span>
						<span>弱</span>
					</div>
				</div>
				<div class="input-wrap certain-password">
					<label for="re-pas">确认密码</label>
					<input id="re-pas" type="password" v-model="registerForm.rePassword">
					<span class="tips"><i class="el-icon-remove"></i>请输入正确的11位手机号码</span>
				</div>
				<el-button class="agree-pro">
					<h4>同意以下协议并注册</h4>
				</el-button>
				<div class="input-wrap protrol">
					<span><a href="#">《美团网用户协议》</a></span>
					<span><a href="#">《美团网隐私协议》</a></span>
				</div>
			</div> -->
		</div>
	</div>
</template>

<script>
	export default {
		mounted() {
			// 初始化仓库中的用户信息数据
			// this.$http({
			// 	methods: 'get',
			// 	url: 'static/json/userInfo.json'
			// }).then(res => {
			// 	let newInfoArr = Array.from(res.data.userInfo);
			// 	this.$store.commit('initUser', newInfoArr)
			// 	// this.userInfo = newInfoArr;
			// })
		},
		data() {
			var validateUser = (rule, value, callback) => {
				if (value === "") {
					callback(new Error("请输入手机号"));
				} else {
					callback();
				}
			};
			var validatePass = (rule, value, callback) => {
				if (value == "") {
					console.log('密码为空')
					callback(new Error("请输入密码"));
				} else if(value.length >= 16 || value.length < 4){
					callback(new Error("密码必须为4-16的字母数组下划线组成"))
				}else{
					if (this.registerForm.rePassword !== '') {
						this.$refs.registerForm.validateField('rePassword');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if (value === "") {
					callback(new Error("请再次输入密码"));
				} else if (value !== this.registerForm.password) {
					callback(new Error("两次输入密码不一致!"));
				} else {
					callback();
				}
			};
			return {
				registerForm: {
					userName: "",
					password: "",
					rePassword: "",
				},
				code: "",
				inputCode: "",
				strengClass: "",
				rules: {
					//validator:校验器 trigger:blur是触发何时触发
					userName: [{
						validator: validateUser,
						trigger: "blur"
					}],
					password: [{
						validator: validatePass,
						trigger: "blur"
					}],
					rePassword: [{
						validator: validatePass2,
						trigger: "blur"
					}]
				}
			}
		},
		methods: {
			submitForm(formName) {
			    this.$refs[formName].validate((valid) => {
			      if (valid) {
					  var self = this;
					  console.log(self.$store.state.userInfo)
					  self.$store.commit('setUser',{
						  username: self.registerForm.userName,
						  password: self.registerForm.password
					  })
					  console.log(self.$store.state.userInfo)
					  self.$router.push('/login')
			      } else {
			        console.log('error submit!!');
			        return false;
			      }	
			    });
			},
			input() {
				var regStr = /(\w)+/g;
				var regNum = /(\d)+/g;
				var reg = /_/g;
				var strongth = this.registerForm.password.match(reg) && this.registerForm.password.match(regNum) && this.registerForm
					.password.match(regStr);
				if (this.registerForm.password.length > 20 || (this.registerForm.password.length > 6 && strongth)) {
					this.strengClass = 'strong';
				} else if (this.registerForm.password.length < 6) {
					this.strengClass = 'week';
				} else if (!this.registerForm.password) {
					this.strengClass = '';
				} else {
					this.strengClass = 'normal';
				}
			},
			getDyaCode(){
				this.code = Math.floor(Math.random() * 1000000);
				console.log(this.code)
			},
			checkCode(){
				if(this.code == this.inputCode){
					console.log('验证码输入成功')
				}
			}
		},
		
	}
</script>

<style>
	@import '../assets/css/default/register/register.css';
</style>
