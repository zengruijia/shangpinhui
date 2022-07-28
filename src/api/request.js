//对于axios进行二次封装
import axios from 'axios';
//引入加载进度条和样式
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
//在当前模块引入store
import store from '@/store';

//利用axios对象方法实例create,去创建一个axios实例
//request就是axios,只是处理一下
const requests = axios.create({
	//配置对象
	//基础路径，发请求的时候，路径中会出现api
	baseURL: '/api',
	//  代表请求超时时间
	timeout: 5000,
});

//请求拦截器
requests.interceptors.request.use(config => {
	if (store.state.detail.uuid_token) {
		//请求头添加字段(userTempId):和后端商量好
		config.headers.userTempId = store.state.detail.uuid_token;
	}
	//需要携带token请求服务器
	// if (store.state.user.token) {
	// 	config.headers.token = store.state.user.token;
	// }
	if (localStorage.getItem('token')) {
		config.headers.token = localStorage.getItem('token');
	}
	nprogress.start();
	return config;
});

//响应拦截器
requests.interceptors.response.use(
	res => {
		// 成功的回调函数
		nprogress.done();
		return res.data;
	},
	error => {
		//失败的回调函数
		return Promise.reject(new Error('faile'));
	}
);

export default requests;
