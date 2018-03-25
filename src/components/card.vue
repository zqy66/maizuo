<template>
	<div>
	    <mt-button type="default" size="large">default</mt-button>
		<el-button type="primary">主要按钮</el-button>
		  <el-button type="success">成功按钮</el-button>
		  <el-button type="info">信息按钮</el-button>
		  <el-alert
		     title="成功提示的文案"
		     type="success">
		   </el-alert>

		   <el-carousel :interval="4000" type="card" height="200px">
		      <el-carousel-item v-for="item in 6" :key="item">
		        <h3>{{ item }}</h3>
		      </el-carousel-item>
		    </el-carousel>


		  <el-form ref="form" :model="form" label-width="80px">
		    <el-form-item label="活动名称">
		      <el-input v-model="form.name"></el-input>
		    </el-form-item>
		    <el-form-item label="活动区域">
		      <el-select v-model="form.region" placeholder="请选择活动区域">
		        <el-option label="区域一" value="shanghai"></el-option>
		        <el-option label="区域二" value="beijing"></el-option>
		      </el-select>
		    </el-form-item>
		    <el-form-item label="活动时间">
		      <el-col :span="11">
		        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
		      </el-col>
		      <el-col class="line" :span="2">-</el-col>
		      <el-col :span="11">
		        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
		      </el-col>
		    </el-form-item>
		    <el-form-item label="即时配送">
		      <el-switch v-model="form.delivery"></el-switch>
		    </el-form-item>
		    <el-form-item label="活动性质">
		      <el-checkbox-group v-model="form.type">
		        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
		        <el-checkbox label="地推活动" name="type"></el-checkbox>
		        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
		        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
		      </el-checkbox-group>
		    </el-form-item>
		    <el-form-item label="特殊资源">
		      <el-radio-group v-model="form.resource">
		        <el-radio label="线上品牌商赞助"></el-radio>
		        <el-radio label="线下场地免费"></el-radio>
		      </el-radio-group>
		    </el-form-item>
		    <el-form-item label="活动形式">
		      <el-input type="textarea" v-model="form.desc"></el-input>
		    </el-form-item>
		    <el-form-item>
		      <el-button type="primary" @click="onSubmit">立即创建</el-button>
		      <el-button>取消</el-button>
		    </el-form-item>
		  </el-form>
	</div>
</template>

<script type="text/javascript">
import router from "../router";
	export default{
		name:'card',

		data(){
			return {
				form: {
				          name: '',
				          region: '',
				          date1: '',
				          date2: '',
				          delivery: false,
				          type: [],
				          resource: '',
				          desc: ''
				}
			}
		},

		beforeRouteEnter (to, from, next) {
		    // 在渲染该组件的对应路由被 confirm 前调用
		    // 不！能！获取组件实例 `this`
		    // 因为当守卫执行前，组件实例还没被创建
		    //
		    setTimeout(() => {
		      	if(true){
		      		next();// 可以挑战
		      	}else{
		      		next("/login") //跳转到login 组件
		      	}
		    }, 1000)
		},

		beforeMount(){

			// 验证用户是否登录？
			//
			// setTimeout(() => {
			//   	if(false){
			//   		//请求真实数据， 显示个人信息
			//   	}else{
			//   		router.push('/login');
			//   	}
			// }, 1000)
		},

		methods:{
			onSubmit() {
		        console.log('submit!',this.form);
		        // axios.post("/",this.form).then()
		    }
		}
	}
</script>

<style lang="scss" scoped>
	.el-carousel__item h3 {
	    color: #475669;
	    font-size: 14px;
	    opacity: 0.75;
	    line-height: 200px;
	    margin: 0;
	  }
	  .el-carousel__item:nth-child(2n) {
	    background-color: #99a9bf;
	  }

	  .el-carousel__item:nth-child(2n+1) {
	    background-color: #d3dce6;
	  }
</style>