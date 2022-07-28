//引入路由组件
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCar from '@/pages/ShopCar'

//路由配置星系
export default [
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
