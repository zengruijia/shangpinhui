import Vue from 'vue';
import App from './App.vue';
//引入路由
import router from './router';

//引入全局组件
import TypeNav from './components/TypeNav';
import Carousel from './components/Carousel';
import Pagination from './components/Pagination';

//引入vuex
import store from './store';

import { reqCategoryList } from '@/api';
import { reqGetSearchInfo } from '@/api';

//引入mock
import '@/mock/mockServer';

//swiper
import 'swiper/css/swiper.css';

//统一接口API文件夹里面的全部请求接口
//统一引入
import * as API from '@/api';

//element-ui
import { Button, MessageBox } from 'element-ui';

reqCategoryList();
console.log(reqGetSearchInfo({}));

//关闭报错提示
Vue.config.productionTip = false;

//注册三级联动全局组件
Vue.component(TypeNav.name, TypeNav);
Vue.component('Carousel', Carousel);
Vue.component(Pagination.name, Pagination);
Vue.component(Button.name, Button);

new Vue({
	router,
	store,
	render: h => h(App),
	//全局事件总线
	beforeCreate() {
		Vue.prototype.$bus = this;
		Vue.prototype.$API = API; //全局挂在API
		Vue.prototype.$msgbox = MessageBox;
		Vue.prototype.$alert = MessageBox.alert;
	},
	mounted() {
		console.log(this);
	},
}).$mount('#app');
