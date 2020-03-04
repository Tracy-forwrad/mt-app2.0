<template>
	<div class="my-user-info">
		<div class="self">
			<a href="" class="avatar">
				<img src="../../assets/img/index/avatar.jpg" alt="">
			</a>
				<p class="welcome">Hi！你好</p>
			<div class="btn-area">
				<button class="reg-btn">注册</button>
				<button class="login-btn">立即登录</button>
			</div>
		</div>
		<div class="qr-code">
			<div class="code">
				<img src="../../assets/img/index/download-qr.png" alt="二维码">
			</div>
			<p class="phone">美团APP手机版</p>
			<p class="play">
				<span class="red">1元起</span>
				<span class="gary">吃喝玩乐</span>
			</p>
		</div>
	</div>
</template>

<script>
</script>

<style scoped lang="scss">
	.my-user-info{
		width: 228px;
		height: 417px;
		margin-top: 10px;
		box-sizing: border-box;
		.self,
		.qr-code{
			width: 228px;
			border: 1px solid #e5e5e5;
			background: #fff;
		}
		.self{
			height: 238px;
			a.avatar{
				display: inline-block;
				width: 100%;
				height: 59px;
				margin-top: 30px;
				text-align: center;
				img{
					width: 55px;
					height:55px;
					border-radius: 50%;
				}
			}
			p.welcome{
				line-height: 28px;
				text-align: center;
				font-size: 16px;
				color: #333;
			}
			.btn-area{
				width: 100%;
				position: relative;
				button{
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
					background: #fff;
					outline: none;
					border: 1px solid #e5e5e5;
					display: inline-block;
					width: 118px;
					line-height: 38px;
					margin: 10px auto 10px auto;
					font-size: 14px;
					border-radius: 40px;
					text-align: center;
					&:hover{
						background-color: #f6f6f6;
						transition: background-color 0.5s;
					}
				}
				.login-btn{
					top: 50px;
				}
			}
		}
		.qr-code{
			height: 165px;
			margin-top: 10px;
			text-align: center;
			padding: 10px 0;
			box-sizing: border-box;
			.code{
				img{
					width: 95px;
					height: 95px;
				}
			}
			.phone{
				font-size: 16px;
				color: #333;
				line-height: 24px;
			}
			.play{
				.red{
					color: #EC5330;
					margin-right: 5px;
				}
			}
		}
	}
</style>
