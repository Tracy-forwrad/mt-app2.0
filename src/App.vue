<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'App',
		mounted() {}
	}
</script>

<style>
	a:hover {
		cursor: pointer;
		color: #fe8c00 !important;
	}

	html,
	body {
		width: 100%;
		background: #f8f8f8;
	}

	#app {
		width: 100%;
	}

	* {
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}

	.after::after {
		display: block;
		content: '';
		clear: both;
		height: 1px;
		width: 1200px;
		background: #eee;
	}

	.clearfix::after {
		clear: both;
		width: 0px;
		height: 3px;
		background: transparent;
		display: block;
		content: '';
	}

	/* 这里设置公共类名,实现控制 */
	.inner-wrap {
		width: 1190px;
		margin: 0 auto;
	}

	#app {
		font-size: 12px;
		font-color: #666;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}

	a {
		text-decoration: none;
		color: #999;
	}
</style>
