<template>
	<div class="my-category"  @mouseleave="hideCon">
		<div class="c-title">全部美食</div>
		<li class="c-item" v-for="(lineData,index) in cate" :key="index" @mouseenter="setDom(lineData)" >
			<div class="c-item-showarea"><span class="r-icon" :class="lineData.class"></span>
				<span class="r-title">
					<span class="r-title-innerwrap" v-for="(title,index) in lineData.title" :key="index">
						<a href>{{title.titleSplit}}</a>
						<span :class="{hot: lineData.class == 'icon-hotelNew' }" v-if="lineData.class == 'icon-hotelNew' ">HOT</span>
						<span v-if="title.notLast">/</span>
					</span>
				</span>
				<span class="el-icon-arrow-right"></span>
			</div>
			<div class="c-item-hidearea" v-if="currentDom" @mouseenter="showCon" @mouseleave="alsoHide">
				<div class="hidearea-wrap">
					<div class="hidearea-con">
						<dl class="hidearea-list" v-for="list in currentDom.content" :key="list.id">
							<dt class="hidearea-title">
								<a href="">{{list.conTitle}}</a>
								<span>更多<i class="el-icon-arrow-right"></i></span>
							</dt>
							<dd class="hidearea-content" v-for="item in list.list" :key="item.id"><a href="">{{item.name}}</a></dd>
						</dl>
					</div>
				</div>
			</div>
		</li>
	</div>
</template>
<!-- 1.直接动态写入类名 -->
<!-- 2.尝试使用一个变量，渲染的时候自动给这个变量赋值，当 这个变量== hotelNew 时，加上元素 -->
<script>
	export default {
		props: ['cate'],
		mounted() {
			var hideList = document.getElementsByClassName('c-item-hidearea');
			console.log(hideList)
		},
		data() {
			return {
				timer: null,
				currentDom: null
			}
		},
		methods: {
			// 设置主列表鼠标离开时延长时间消失
			hideCon(){
				var self = this;
				self.timer = setTimeout(function() {
					self.currentDom = null;
				}, 1000);
			},
			//设置进入详情区延时器消失
			showCon(){
				this.timer = null;
			},
			//如果鼠标出了详情区也消失
			alsoHide(){
				this.currentDom = null;
			},
			setDom(val){
				this.currentDom = val;
			}
		},
		computed: {
		}
	}
</script>

<style scoped lang="scss">
	@import '../../assets/css/index/category.scss';
</style>
