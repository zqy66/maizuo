<template>
	<nav>
		<div class="left">
			 <slot></slot>
			 <span>卖座电影</span>
		</div>

		<div class="right">
			<a href="#/chengshi"><span>大连</span></a>
			<i class="iconfont icon-account"></i>
		</div>
	</nav>
</template>

<script type="text/javascript">
	export default{
		name:'navbar',

		data(){
			return {

			}
		}
	}

</script>

<style lang="scss" scoped>
	nav{
		position:fixed;
		left:0px;
		top:0px;
		width:100%;
		height:50px;
		background:black;
		color:white;
		line-height:50px;
		z-index:999999;
		.left{
			float:left;
			i{
				padding: 0 10px;
			}
		}


		.right{
			float:right;
			i{
				padding: 0 10px;
			}
		}
	}
</style>