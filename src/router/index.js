import Vue from 'vue'
import Router from 'vue-router'

import Home from "../components/home";
import Film from "../components/film";
import Card from "../components/card";
import Login from "../components/login";

import Nowplaying from "../components/nowplaying";
import Comingsoon from "../components/comingsoon";
import Detail from "../components/detail";
import Detail2 from "../components/detail2";
import Chengshi from "../components/chengshi";
import Cinema from "../components/cinema";
import Wode from "../components/wode";
import Mzk from "../components/mzk";
import Shangcheng from "../components/shangcheng";

Vue.use(Router) //安装路由功能

// 路由配置， /home .home组件  /film 加载fiim组件
const router =  new Router({
  mode:"hash",

  routes: [
    {
    	path:"/home",

    	component:Home
    },
    {
    	path:"/film",
    	component:Film,
    	children:[
    		{
    			path:"nowplaying",
    			component:Nowplaying
    		},
    		{
    			path:"comingsoon",
    			component:Comingsoon
    		},
    		{
		    	path:"/",
		    	redirect:"/film/nowplaying"
		    }
    	]
    },
    {
    	path:"/card",
    	name:"kerwincard", //命名路由
    	component:Card,
        meta:{
            kerwinRequired:true
        }
    },
    {
        path:"/login",
        // name:"kerwincard", //命名路由
        component:Login
    },
    {
    	name:"detail",
    	path:"/detail/:id",
    	component:Detail
    },
    {
    	name:"detail2",
    	path:"/detail2",
    	component:Detail2
    },
    {
        name:"home",
    	path:"*", //通配符
    	redirect:"/home"
    },
    {
        path:"/chengshi",
        component:Chengshi
    },
    {
        path:"/cinema",
        component:Cinema
    },
    {
        path:"/wode",
        component:Wode
    },
    {
        path:"/mzk",
        component:Mzk
    },
    {
        path:"/shangcheng",
        component:Shangcheng
    },
  ]
})
//全局 拦截需要配合路由源信息
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.kerwinRequired)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!auth.loggedIn()) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next() // 确保一定要调用 next()
//   }
// })


export default router;



// app.use("/home",home);
// app.use("/list",list)