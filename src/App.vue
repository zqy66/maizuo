<template>
  <div>
<!--       <ul>
        <li><a href="#/home">首页</a></li>
        <li><a href="#/film">film</a></li>
        <li><a href="#/card">card</a></li>
      </ul> -->

     <navbar>
       <i class="iconfont icon-category" @click="isShow=!isShow"></i>
     </navbar>

     <sidebar :myshow="isShow" @event="isShow=false"></sidebar>

     <section>
      <router-view></router-view>
     </section>
  </div>
</template>

<script>
import sidebar from "./components/common/sidebar"
import navbar from "./components/common/navbar"
export default {
  name: 'App',

  data(){
    return {
      isShow:false
    }
  },

  components:{
    sidebar,
    navbar
  }
}
</script>

<style>
  .kerwinactive{
    background: red;
  }

  *{
    margin: 0px;
    padding: 0px;
  }

  li{
    list-style: none;
  }

  html,body{
    width: 100%;
    height: 100%;
  }

  section{
    top: 50px;
    position: relative;
  }

</style>
