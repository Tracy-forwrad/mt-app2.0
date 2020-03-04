<template>
	<div class="my-subHeader">
		<div class="inner-wrap">
			<div class="logo-area">
				<img src="../../assets/img/header/logo.png" alt="">
			</div>
			<div class="search-area">
				<div class="search-box">
					<div class="search-box-wrap">
						<div class="input-box">
							<input type="text" class="search-box" placeholder="搜索商家或地点">
							<button class="search-btn">
								<span class="el-icon-search"></span>
							</button>
							<div class="hide-list">
								<ul class="lastS-list  clearfix">
									<li class="first-li"><span class="last">最近搜索</span><span class="del">删除搜索历史</span></li>
									<li class="item"><a>中影星美</a></li>
								</ul>
								<ul class="hotS-list clearfix">
									<li><a  class="hot" >乐汤洗浴汗蒸生活馆</a></li>
									<li><a >快活泉洗浴</a></li>
									<li><a >圣鲸美食汇</a></li>
									<li><a >呷哺呷哺</a></li>
									<li><a >SOHO天空影城</a></li>
									<li><a >有拈头成都市井火锅</a></li>
									<li><a >德得轩自助烤肉餐厅</a></li>
								</ul>
							</div>
						</div>
						
					</div>
					<ul class="hot-list">
						<li><router-link  class="hot" :to="{name: 'detail', params: {name: item}}">乐汤洗浴汗蒸生活馆</router-link></li>
						<li><router-link :to="{name: 'detail', params: {name: item}}">快活泉洗浴</router-link></li>
						<li><router-link :to="{name: 'detail', params: {name: item}}">圣鲸美食汇</router-link></li>
						<li><router-link :to="{name: 'detail', params: {name: item}}">呷哺呷哺</router-link></li>
						<li><router-link :to="{name: 'detail', params: {name: item}}">SOHO天空影城</router-link></li>
						<li><router-link :to="{name: 'detail', params: {name: item}}">有拈头成都市井火锅</router-link></li>
						<li><router-link :to="{name: 'detail', params: {name: item}}">德得轩自助烤肉餐厅</router-link></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="scss">
	@import '../../assets/css/header/subHeader.scss';
</style>
