<template>
	<div class="my-index">
			<my-header></my-header>
			<router-view></router-view>
			<my-footer/>
	</div>
</template>

<script>
	import myHeader from '@/components/header/header'
	import myFooter from '@/components/footer/footer'
	export default {
		components: {
			myHeader,
			myFooter
		}
	}
</script>

<style>
	my-header{
		width: 100%;
	}
</style>
