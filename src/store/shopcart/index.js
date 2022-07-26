import { reqGetShopCarList, reqDeleteCartById, reqUpdateCheckedById } from '@/api';
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
	//修改某个商品勾选状态
	async updateCheckedById({ commit }, { skuId, isChecked }) {
		let result = await reqUpdateCheckedById(skuId, isChecked)
		if (result.code == 200) {
			return 'ok'
		} else {
			return Promise.reject(new Error('fail'))
		}
	}
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
