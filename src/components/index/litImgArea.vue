<template>
	<div class="my-litImg">
		<div class="top-img"></div>
		<div class="bottom-img"></div>
	</div>
</template>

<script>
</script>

<style scoped lang="scss">
	.my-litImg{
		background: #ddd;
		width: 150px;
		margin: 10px 10px 0;
		.top-img,
		.bottom-img{
			width: 100%;
			background-repeat: no-repeat;
			background-size: cover;
		}
		.top-img{
			height: 240px;
			background-image: url(http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg);
		}
		.bottom-img{
			margin-top: 10px;
			background-image: url(http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg);
			width: 100%;
			height: 165px;
		}
	}
</style>
