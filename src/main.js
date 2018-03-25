// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'; // 引入elementui js
import 'element-ui/lib/theme-chalk/index.css'; //引入elementui css

Vue.use(ElementUI);


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App) 
})

// const name = 'kerwin'
// console.log(name)


