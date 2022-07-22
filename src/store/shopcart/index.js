import { reqGetShopCarList, reqDeleteCartById } from '@/api';
const state = {
	cartList: [],
};
const actions = {
	//获取购物车数据
	async getCartList({ commit }) {
		let result = await reqGetShopCarList();
		if (result.code == 200) {
			commit('GETCARTLIST', result.data);
		}
	},
	//删除购物车某一产品
	async deleteCartById({ commit }, skuId) {
		let result = await reqDeleteCartById(skuId);
		if (result.code == 200) {
			return 'ok';
		} else {
			return Promise.reject(new Error('fail'));
		}
	},
};
const mutations = {
	GETCARTLIST(state, cartList) {
		state.cartList = cartList;
	},
};
const getters = {
	cartList(state) {
		return state.cartList[0] || {};
	},
};

export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters,
};
