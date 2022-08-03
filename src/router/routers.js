//引入一级路由组件
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCar from '@/pages/ShopCar';
import Trade from '@/pages/Trade';
import Pay from '@/pages/Pay';
import PaySuccess from '@/pages/PaySuccess';
import Center from '@/pages/Center';
//引入二级路由组件
import myOrder from '@/pages/Center/myOrder';
import groupOrder from '@/pages/Center/groupOrder';

//路由配置星系
export default [
	{
		path: '/center',
		component: Center,
		mate: { show: true },
		//二级路由
		children: [
			{
				path: 'myorder',
				component: myOrder,
			},
			{
				path: 'grouporder',
				component: groupOrder,
			},
			{
				path: '/center',
				redirect: '/center/myorder',
			},
		],
	},
	{
		path: '/paysuccess',
		component: PaySuccess,
		mate: { show: true },
		//路由独享守卫
		beforeEnter: (to, from, next) => {
			if (from.path == 'pay') {
				next();
			} else {
				next(false); //从哪来回哪去
			}
		},
	},
	{
		path: '/pay',
		component: Pay,
		mate: { show: true },
		//路由独享守卫
		beforeEnter: (to, from, next) => {
			if (from.path == 'trade') {
				next();
			} else {
				next(false); //从哪来回哪去
			}
		},
	},
	{
		path: '/trade',
		component: Trade,
		mate: { show: true },
		//路由独享守卫
		beforeEnter: (to, from, next) => {
			if (from.path == 'shopcar') {
				next();
			} else {
				next(false); //从哪来回哪去
			}
		},
	},
	{
		name: 'shopcar',
		path: '/shopcar',
		component: ShopCar,
		meta: { show: true },
	},
	{
		name: 'addcartsuccess',
		path: '/addcartsuccess',
		component: AddCartSuccess,
		meta: { show: true },
	},
	{
		path: '/home',
		component: Home,
		meta: { show: true }, //路由元信息,用来判断是否显示footer
	},
	{
		name: 'search',
		path: '/search/:keyword?',
		component: Search,
		meta: { show: true },
	},
	{
		path: '/login',
		component: Login,
		meta: { show: false },
	},
	{
		path: '/register',
		component: Register,
		meta: { show: true },
	},
	{
		path: '/detail/:skuid', //params占位
		component: Detail,
		meta: { show: true },
	}, //商品详情路由
	//重定向:用户第一次访问网站页面("/根目录"首页)时，地址栏里边没有“#锚点”的信息，也就没有对应的组件用于显示，用户体验不好，现在可以通过重定向实现一种效果，即当浏览器没有任何 #锚点信息时，默认也给显示一个组件。
	{
		path: '*',
		redirect: '/home',
	},
];
