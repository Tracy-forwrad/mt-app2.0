<template>
	<div class="wrap">
		<div class="inner-wrap my-scene-inner my-scene-inner-youhui">
			<dl class="scene-header scene-header-youhui">
				<!-- 这次我们采用头部部分由父级传入，每个dd绑定属性data-type判断传入的值是否符合相应的date-type决定，活跃的dd -->
				<dt class="scene-cate scene-cate-youhui">{{youhuiInfo.totalTitle && youhuiInfo.totalTitle}}</dt>
				<dd class="scene-every-cate" :class="{active: index == 0}" :data-type="litTit.cate" @mouseenter=setYouhuiDom($event,litTit)
				 v-for="(litTit,index) in youhuiInfo.content" :key="index">{{litTit && litTit.text}}</dd>
				<!-- <dt class="scene-cate scene-cate-youhui">{{youhuiTabs && youhuiTabs.totalTitle}}</dt>
				<dd v-for="(item,index) in youhuiTabs.list"  :data-type="item.type" :class="{active: kind == item.type}"
				:key="index">{{item.text}}</dd> -->
			</dl>
			<div class="scene-body-youhui">
				<ul class="scene-list-youhui clearfix">
					<li class="scene-item-youhui" v-for="(item,index) in youhuiCurrentDom.data" :key="index">
						<!-- 这个部分发送axios，传入固定的值-->
						<a href="" class="scene-item-lk-youhui">
							<img :src="item.imgUrl" alt="">
							<p class="title-youhui">{{item.title}}</p>
							<p class="sub-title-youhui">{{item.subTitle}}</p>
							<p class="tag-youhui-wrap"><span class="tag-youhui">改签</span></p>
							<p v-if="!item.isSold" class="price">
								<span class="symbol">¥</span>
								<span class="new-price-youhui">{{item.priceInfo.newPrice}}</span>
								<span class="old-price-youhui price">门市价¥{{item.priceInfo.oldPrice}}</span>
								<span class="sold-num-youhui">已售{{item.priceInfo.remainNum}}</span>
							</p>
							<p v-else="item.isSold" class="price">卖光了</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				youhuiCurrentDom: {},
				flag: 0
			}
		},
		props: ['youhuiInfo'],
		beforeUpdate(){
			if(this.flag == 0){
				let youhuiInfoArr =  Array.from(this.youhuiInfo.content);
				this.youhuiCurrentDom = youhuiInfoArr[0];
				this.flag = 1;
			}
			
		},
		mounted() {
			
		},
		methods: {
			setYouhuiDom(e, val) {
				this.youhuiCurrentDom = val;
				let dom = e.target;
				$('.active').removeClass('active');
				$(dom).addClass('active');
			},
		}
	}
</script>

<style lang="scss" scoped>
	.inner-wrap.my-scene-inner.my-scene-inner-youhui {
		dl.scene-header {
			background: linear-gradient(to right, rgb(255, 113, 74) 2%, rgb(252, 66, 66) 97%);

			dd {
				padding: 0 5px;
				line-height: 50px;
				font-size: 15px;
				position: relative;

				&.active::after {
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

		.scene-body-youhui {
			width: 1190px;
			height: auto;
			background: #fff;
			box-sizing: border-box;
			padding: 10px;

			ul.scene-list-youhui {
				li.scene-item-youhui {
					float: left;
					padding: 10px 8px 30px;
					width: 218px;
					height: 240px;

					img {
						margin-left: 2px;
						width: 213px;
						height: 120px;
						border-radius: 4px;
						margin-bottom: 10px;
					}

					p.title-youhui {
						font-size: 16px;
						height: 22px;
						line-height: 22px;
						margin-bottom: 6px;
						color: #222;
					}

					p.sub-title-youhui {
						// margin-bottom: 30px;
					}

					.tag-youhui {
						display: inline-block;
						height: 18px;
						line-height: 18px;
						margin-right: 5px;
						margin-top: 6px;
						text-align: center;
						border: 1px solid #d8d8d8;
						padding: 0 3px;
					}

					.price {
						margin-top: 15px;
						height: 27px;
						line-height: 27px;

						.symbol,
						.new-price-youhui {
							color: #FF6600;
							font-family: numbers;
						}

						.symbol {
							font-weight: 500;
							font-size: 14px;
						}

						.new-price-youhui {
							font-size: 22px;
							letter-spacing: -0.8px;
							margin-left: -5px;
						}

						.old-price-youhui {
							text-decoration: line-through;
						}

						.sold-num-youhui {
							float: right;
							margin-right: 10px;
						}
					}

					&:hover {
						background: #F4F4F4;
					}
				}
			}
		}
	}
</style>
