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
		let result = await reqUpdateCheckedById(skuId, isChecked);
		if (result.code == 200) {
			return 'ok';
		} else {
			return Promise.reject(new Error('fail'));
		}
	},

	//删除全部勾选的产品
	deleteAllCheckedCart({ dispatch, getters }) {
		let PromiseAll = [];
		//context:小仓库 commit dispatch state getters
		getters.cartList.cartInfoList.forEach(item => {
			let promise = item.isChecked == 1 ? dispatch('deleteCartById', item.skuId) : '';
			PromiseAll.push(promise);
		});
		//只有全部promise返回成功，最终结果才是成功，有一个失败，返回的就是失败
		return Promise.all(PromiseAll);
	},

	//修改全部产品选中状态
	updateAllCartIschecked({ dispatch, state }, isChecked) {
		let PromiseAll = [];
		state.cartList[0].cartInfoList.forEach(item => {
			let promise = dispatch('updateCheckedById', { skuId: item.skuId, isChecked });
			PromiseAll.push(promise);
		});
		//只有全部promise返回成功，最终结果才是成功，有一个失败，返回的就是失败
		return Promise.all(PromiseAll);
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
