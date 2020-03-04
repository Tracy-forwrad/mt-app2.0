<template>
	<el-header style="padding: 0" height="" >
		<top-nav :logined="$store.state.logined" ></top-nav>
		<sub-header/>
	</el-header>
</template>

<script>
import topNav from '@/components/header/topNav';
import subHeader from '@/components/header/subHeader';
	export default{
		components: {
			topNav,
			subHeader
		}
	}
</script>

<style scoped>
	.el-header{
		width: 100% !important;
		box-sizing: border-box;
	}
</style>
