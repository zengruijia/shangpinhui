import Vue from 'vue';
import App from './App.vue';
//引入路由
import router from './router'
import TypeNav from './pages/Home/TypeNav/index.vue'

//引入vuex
import store from './store'

import { reqCategoryList } from '@/api'
reqCategoryList()
//关闭报错提示
Vue.config.productionTip = false;

//注册三级联动全局组件
Vue.component(TypeNav.name, TypeNav)


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
