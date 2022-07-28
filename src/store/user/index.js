import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo } from '@/api';
//登陆与注册
const state = {
	code: '',
	token: '',
	userInfo: {},
};
const actions = {
	//获取验证码
	async getCode({ commit }, phone) {
		let result = await reqGetCode(phone);
		if (result.code == 200) {
			commit('GETCODE', result.data);
		} else {
			return Promise.reject(new Error('faile'));
		}
	},

	//用户注册
	async userRegister({ commit }, user) {
		console.log('user', user);
		let result = await reqUserRegister(user);
		if (result.code == 200) {
			return 'ok';
		} else {
			return Promise.reject(new Error('faile'));
		}
	},

	//用户登录获取token
	async userLogin({ commit }, data) {
		let result = await reqUserLogin(data);
		console.log(result);
		if (result.code == 200) {
			commit('USERLOGIN', result.data.token);
      localStorage.setItem('token', result.data.token);
			return 'ok';
		} else {
			return Promise.reject(new Error('faile'));
		}
	},

	//获取用户信息
	async getUserInfo({ commit }) {
		let result = await reqUserInfo();
		if (result.code == 200) {
			commit('GETUSERINFO', result.data);
			return 'ok';
		} else {
			return Promise.reject(new Error('faile'));
		}
	},
};
const mutations = {
	GETCODE(state, code) {
		state.code = code;
	},
	USERLOGIN(state, token) {
		state.token = token;
	},
	GETUSERINFO(state, userInfo) {
		state.userInfo = userInfo;
	},
};
const getters = {};
export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters,
};
