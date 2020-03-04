<template>
	<div class="my-scene">
		<div class="inner-wrap">
			<!-- 做成插件，styleInfo传入，
			 this.setDom($event,litTit) => this.$emit('setDom',{$event,litTit})-->
			<!-- 有格调 -->
			<every-scene :styleInfo="styleInfo" />
			<!-- 成功地引入了两个组件，且完美的实现了功能切换 -->
			<every-scene :styleInfo="testInfo" />
			<!-- 很优惠 -->
			<little-every-scene :youhuiInfo="youhuiInfo" />
			<!-- 猜你喜欢 -->
			<guess-you-like />
		</div>
	</div>
</template>

<script>
	import everyScene from '@/components/index/everyScene.vue'
	import littleEveryScene from '@/components/index/littleEveryScene.vue'
	import guessYouLike from '@/components/index/guessYouLike.vue'
	export default {
		// 接下来模拟一下axios请求，请求本地的json文件
		data() {
			return {
				styleInfo: [],
				testInfo: [],
				youhuiInfo: {},
				kind: 'all',
				youhuiTabs: {
					totalTitle: '很优惠',
					list: [{
						text: '全部',
						type: 'all'
					}, {
						text: '美食',
						type: 'meishi'
					}, {
						text: '休闲',
						type: 'xiuxian'
					}]
				}
			}
		},
		methods: {
			// 1.根据父级传过来的数据设置每个模块的头部
			//2.模块内容中的信息通过发送不同的axios请求得到数据进行渲染

		},
		mounted() {
			this.$http.get('../../../static/json/SceneStyleInfo.json')
				.then((res) => {
					this.styleInfo = res.data.sceneInfo;
					console.log('SceneStyleInfo6000')
				}).then((err) => {});
			this.$http.get('../../../static/json/SceneYouhuiInfo.json')
				.then(res => {
					console.log(res)
					this.youhuiInfo = res.data.sceneInfo;
				}).then(() => {
					// alert('加载中...，请稍等')
				});
			//测试数据
			this.$http.get('../../../static/json/SceneStyleInfo.json')
				.then((res) => {
					console.log(res)
					this.testInfo = res.data.sceneInfo;
				}).then((err) => {
					// console.log(err)
				});
		},
		components: {
			everyScene,
			littleEveryScene,
			guessYouLike
		}
	}
</script>

<style lang="scss">
	@font-face {
		font-family: numbers;
		src: url('~@/assets/font/numbers.woff') format('woff');
	}

	a {
		&:hover {
			color: #999 !important;
		}
	}

	.inner-wrap.my-scene-inner {
		margin-top: 40px;

		dl.scene-header {
			width: 100%;
			border-top-left-radius: 5px;
			border-top-right-radius: 5px;
			height: 44px;
			background-color: rgb(190, 164, 116);
			background-image: linear-gradient(to right, rgb(194, 176, 142) 3%, rgb(190, 164, 116) 100%);

			dt,
			dd {
				height: 44px;
				color: #fff;
				float: left;
			}

			dt {
				margin: 0 10px;
				line-height: 44px;
				font-size: 18px;
				font-family: "MFShangHei-Regular" !important;
			}

			dd {
				padding: 0 5px;
				line-height: 50px;
				font-size: 15px;
				position: relative;

				&.cate-active::after {
					position: absolute;
					content: '';
					width: 0;
					height: 0;
					border: 5px solid transparent;
					border-bottom: 7px solid #fff;
					bottom: 0;
					left: 50%;
				}
			}
		}

	}
</style>
