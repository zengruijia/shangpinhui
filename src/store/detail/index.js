import { reqGoodsInfo } from '@/api';
const state = {
	goodsInfo: {},
};
const actions = {
	async getGoodsInfo({ commit }, skuId) {
		let result = await reqGoodsInfo(skuId);
		if (result.code == 200) {
			commit('GETGOODSINFO', result.data);
		}
	},
};
const mutations = {
	GETGOODSINFO(state, goodsInfo) {
		state.goodsInfo = goodsInfo;
	},
};
const getters = {
	categoryView(state) {
		// 如果请求回来没有数据则是undefined会报错需要返回一个空对象
		return state.goodsInfo.categoryView || {};
	},
	skuInfo(state) {
		return state.goodsInfo.skuInfo || {};
	},
};

export default {
	namespaced: true, //开启命名空间
	state,
	actions,
	mutations,
	getters,
};
