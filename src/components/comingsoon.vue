<template>
	<div>
		<ul

			v-infinite-scroll="loadMore"
			  infinite-scroll-disabled="loading"
			  infinite-scroll-distance="0"
			  infinite-scroll-immediate-check= "false"
		>
			<li v-for="data in datalist" @click="handleClick(data.id)" :key="data.id">
				<img :src="data.poster.origin"/>

				<div>
					<h3>{{data.name}}</h3>
					<p>{{data.intro}}</p>
				</div>
			</li>
		</ul>
		<p>{{loadingText}}</p>
	</div>
</template>

<script type="text/javascript">
import axios from "axios";
import router from "../router";
	export default{
		name:'comingsoon',

		data(){
			return {
				datalist:[],
				loading:false,
				current:1,
				total:0,
				loadingText:"正在加载中..."
			}
		},
		mounted(){
			axios.get("v4/api/film/coming-soon?page=1&count=7").then(res=>{
				this.datalist =res.data.data.films

				this.total = res.data.data.page.total;//总页数
			})
		},

		methods:{
			handleClick(id){

				router.push(`/detail/${id}`);

			},
			loadMore(){
				this.current++;

				if(this.current>this.total){

					this.loading = true;
					this.loadingText= "所有的数据加载完成";
					return;
				}
				axios.get(`/v4/api/film/coming-soon?page=${this.current}&count=7`).then(res=>{
					this.datalist = [...this.datalist,...res.data.data.films]
				})
			}

		}
	}
</script>

<style lang="scss" scoped>
	ul{
		li{
			padding:5px;
			overflow:hidden;
			img{
				float:left;
				width:100px;
			}
		}
	}
</style>