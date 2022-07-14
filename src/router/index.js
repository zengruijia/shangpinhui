//配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/routers';

//使用插件
Vue.use(VueRouter);

//配置路由
export default new VueRouter({
	routes,
	//路由滚动配置
	scrollBehavior(to, from, savedPosition) {
    // y=0代表滚动条为在最顶部
		return { y: 0 };
	},
});
