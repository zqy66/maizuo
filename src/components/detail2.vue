<template>
	<div>
		detail2
	</div>
</template>

<script type="text/javascript">

	export default{
		name:'detail2',

		data(){
			return {

			}
		},

		mounted(){

			// 获取query 方式传参
			console.log(this.$route.query);
			//ajax
		}
	}
</script>

<style lang="scss" scoped>

</style>