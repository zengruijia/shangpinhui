//配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/routers';
import store from '@/store';

//使用插件
Vue.use(VueRouter);

//配置路由
let router = new VueRouter({
	routes,
	//路由滚动配置
	scrollBehavior(to, from, savedPosition) {
		// y=0代表滚动条为在最顶部
		return { y: 0 };
	},
});

//路由前置守卫
router.beforeEach(async (to, from, next) => {
	//to:可以获取到你要跳转到哪个路由信息
	//from:获取从哪里来
	//next:放行函数 next() next(path) next(false)

	let token = store.state.user.token;
	let name = store.state.user.userInfo.name;

	//已经登陆过就不能跳到login路由
	if (token) {
		if (to.path == '/login' || to.path == '/register') {
			//登陆过想去login不放行
			next('/home');
		} else {
			if (name) {
				next();
			} else {
				//没有用户信息情况
				try {
					//有token获取用户信息
					await store.dispatch('user/getUserInfo');
					next();
				} catch (error) {
					//有token但是过期了
					store.dispatch('user/logOut');
					next('/login');
				}
			}
		}
	} else {
		//未登录不能去交易相关页面，不能去个人中心
		if (to.path == '/trade' || to.path == '/pay' || to.path == '/center/myorder') {
			next('/login?redirect='+to.path);  //未登录时没有去成的信息存在路径中
		} else {
			next();
		}
	}
});

export default router;
