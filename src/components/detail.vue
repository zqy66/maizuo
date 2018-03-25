<template>
	<div v-if="filminfo">
		<img :src="filminfo.cover.origin"/>
		<h3>影片简介</h3>
		<p>
			导演：{{filminfo.director}}
		</p>
		<p>地区语言：{{filminfo.nation}}{{filminfo.language}}</p>
		<p>类型 ：{{filminfo.category}}</p>
		<p>
			{{filminfo.synopsis}}
		</p>
	</div>
</template>

<script type="text/javascript">
import axios from "axios";

	export default{
		name:'detail',

		data(){
			return {
				filminfo:null
			}
		},

		mounted(){
			//接受动态路由的传参
			console.log(this.$route.params);
			//ajax
			axios.get(`/v4/api/film/${this.$route.params.id}?__t=1521184460762`).then(res=>{
				console.log(res.data);
				this.filminfo = res.data.data.film
			})
		}
	}
</script>

<style lang="scss" scoped>
	img{
		width:100%;
	}
	p{
		line-height:30px;
	}
</style>