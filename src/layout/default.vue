<template>
	<div class="default-page">
		<router-view>
			
		</router-view>
		<div class="copyright">
			<p>
				©2019 <router-link :to="{name: 'index'}">美团网团购</router-link> meituan.com &nbsp;&nbsp;&nbsp;&nbsp;京ICP证070791号 &nbsp;&nbsp;京公网安备11010502025545号
			</p>
		</div>
	</div>
</template>

<script>
	export default {
	}
</script>

<style>
	.copyright {
		text-indent: 13em;
		padding: 15px 10px;
		color: #999;
		font-size: 12px;
		text-align: left;
		font-family: initial;
	}
	
	a {
		text-decoration: none;
		color: #999;
	}
</style>
