<template>
	<div class="my-bigImg">
		<el-carousel height="240px">
			<el-carousel-item v-for="(url,index) in imgList" :key="index">
				<a href="#">
					<img :src="url" >
				</a>
			</el-carousel-item>
		</el-carousel>
		<div class="live-hotel">
			
		</div>
		<div class="gain-new-knowledge">
			
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				imgList: [
					'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg',
					'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
					'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
				]
			}
		}
	}
</script>

<style scoped lang="scss">
	.my-bigImg {
		margin-top: 10px;
		width: 560px;
		height: 515px;
		// 消除下方两个小图片display:inline-block的间隙
		font-size: 0;
		.el-carousel {
			width: 550px;
			margin-bottom: 10px;
			.el-carousel-item{
				width: 550px;
				height: 240px;
				
			}
			a{
				display: block;
				width: 550px;
				height: 240px;
				img{
					width: 550px;
					height: 240px;
				}
			}
		}
		.live-hotel,
		.gain-new-knowledge{
			width: 270px;
			height: 165px;
			background-repeat: no-repeat;
			background-size: 270px 165px;
			display: inline-block;
			font-size: 0;
			background-position: 0 0;
			
		}
		.live-hotel{
			margin-right: 10px;
			background-image: url(http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png);
		}
		.gain-new-knowledge{
			background-image: url(http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg);
		}
	}
</style>
