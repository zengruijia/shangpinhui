import Vue from 'vue';
import App from './App.vue';
//引入路由
import router from './router';

//引入全局组件
import TypeNav from './components/TypeNav';
import Carousel from './components/Carousel';
import Pagination from './components/Pagination'

//引入vuex
import store from './store';

import { reqCategoryList } from '@/api';
import { reqGetSearchInfo } from '@/api';

//引入mock
import '@/mock/mockServer';

//引入swiper样式
import 'swiper/css/swiper.css';

reqCategoryList();
console.log(reqGetSearchInfo({}));

//关闭报错提示
Vue.config.productionTip = false;

//注册三级联动全局组件
Vue.component(TypeNav.name, TypeNav);
Vue.component('Carousel', Carousel);
Vue.component(Pagination.name, Pagination)

new Vue({
	router,
	store,
	render: h => h(App),
	//全局事件总线
	beforeCreate() {
		Vue.prototype.$bus = this;
	},
	mounted() {
		console.log(this);
	},
}).$mount('#app');
