<template>
	<div>
		<div class="inner-wrap my-scene-inner" v-for="(style,index) in styleInfo" :key="index" v-if="styleInfo">
			<dl class="scene-header clearfix">
				<dt class="scene-cate">{{style.totalTitle}}</dt>
				<dd class="scene-every-cate" :class="{'cate-active': index == 0}" :data-type="litTit.cate" @mouseenter=setDom($event,litTit)
				 v-for="(litTit,index) in style.content" :key="index">{{litTit.text}}</dd>
			</dl>
			<div class="scene-body clearfix">
				<ul class="scene-list clearfix">
					<li class="scene-item" v-for="(con,index) in currentDom.data" :key="index">
						<a href="" class="scene-link">
							<img :src="con.imgUrl">
							<p class="title">{{con.title}}</p>
							<p class="subTitle">{{con.subTitle}}</p>
							<p v-if="con.hasPriceInfo" class="price">
								<span class="symbol">￥</span>
								<span class="new-price">{{con.priceInfo.newPrice}}</span>
								<span class="old-price">门市价¥{{con.priceInfo.oldPrice}}</span>
							</p>
							<p class="pos">{{con.pos}}</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['styleInfo'],
		data() {
			return {
				currentDom: {},
				flag: 0
			}
		},
		beforeUpdate(){
			console.log('SceneStyleUpdate')
			if(this.flag == 0){
				let styleInfoArr = Array.from(this.styleInfo);
				// 默认的数据显示
				// 获取到所有的兄弟元素，移走他们的‘cate-active’类名
				this.currentDom = styleInfoArr[0].content[0];
				console.log('beforeUpdate');
				this.flag = 1;
			}
		},
		mounted() {
			console.log('SceneStyleMounted')
			// 在子组件里面，mounted和created拿不到父组件传过来的值
			// 远方的苟且:
			// 父组件获取到数据是要一段时间的
			
			// 远方的苟且:
			// 当获取完之后，子组件已经渲染完毕

		},
		methods: {
			setDom(e, val) {
				this.currentDom = val;
				let dom = e.target;
				$(dom).siblings('dd').removeClass('cate-active');
				$(dom).addClass('cate-active');
			},
		}
	}
</script>

<style scoped lang="scss">
	.scene-body {
		width: 1190px;
		// height: 300px;
		background: #fff;
		box-sizing: border-box;
		padding: 15px 20px;

		.scene-list {
			width: 100%;

			.scene-item {
				position: relative;
				float: left;
				width: 33%;
				height: 314px;
				padding: 10px;
				box-sizing: border-box;

				a {
					display: block;

					img {
						width: 100%;
						height: 208px;
						border-radius: 10px;
					}

					p.title {
						font-size: 16px;
						height: 22px;
						line-height: 22px;
						color: #222;
						margin-top: 10px;
						margin-bottom: 8px;
						white-space: no-wrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}

					p.subTitle {
						font-size: 12px;
						color: #999;
						height: 20px;
						line-height: 20px;
					}

					p.price {
						display: block;
						height: 27px;
						line-height: 38px;

						.symbol {
							font-size: 14px;
							color: #BE9E4D;
							font-weight: 500
						}

						.new-price {
							margin-left: -2px;
							color: #BE9E4D;
							font-size: 20px;
							font-family: "numbers" !important;
						}

						.old-price {
							text-decoration: line-through;
							font-size: 12px;
							color: #999;
						}
					}

					.pos {
						position: absolute;
						bottom: 3px;
						right: 3px;
						float: right;

						&:hover {
							color: #999;
						}
					}
				}

				&:hover {
					background: #F4F4F4;
					border-radius: 4px;
				}
			}
		}
	}
</style>
