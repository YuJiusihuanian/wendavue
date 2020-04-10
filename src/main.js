//vue.js
import Vue from 'vue'
//首页模块
import App from './App.vue'
//状态管理器
import store from './store'
//路由管理器
import router from './router'
//ui组件库
import Mint from 'mint-ui'
//异步请求器
import axios from 'axios';
//过滤器
import filters from './filters';
//ui组件样式
import 'mint-ui/lib/style.css';

//设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
//使用mint
Vue.use(Mint);
//使用axios 挂载到$ajax
Vue.prototype.$ajax = axios;
// 将对象的键值取出并挂载到vue的过滤器中，实例化Vue的filter
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));


//创建vue实例挂载结点上
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
