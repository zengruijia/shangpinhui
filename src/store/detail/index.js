import { reqGoodsInfo, reqAddOrUpdateShopCart } from '@/api';
const state = {
	goodsInfo: {},
};
const actions = {
	//请求产品信息
	async getGoodsInfo({ commit }, skuId) {
		let result = await reqGoodsInfo(skuId);
		if (result.code == 200) {
			commit('GETGOODSINFO', result.data);
		}
	},
	//向购物车发送数据
	async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
		let result = await reqAddOrUpdateShopCart(skuId, skuNum);
		if(result.code == 200){
      return '成功'
    }else{
      //加入失败
      return Promise.reject(new Error('faile'))
    }
	},
};
const mutations = {
	GETGOODSINFO(state, goodsInfo) {
		state.goodsInfo = goodsInfo;
	},
	// ADDORUODATESHOPCART(state,value){

	// }
};
const getters = {
	categoryView(state) {
		// 如果请求回来没有数据则是undefined会报错需要返回一个空对象
		return state.goodsInfo.categoryView || {};
	},
	skuInfo(state) {
		return state.goodsInfo.skuInfo || {};
	},
	spuSaleAttrList() {
		return state.goodsInfo.spuSaleAttrList || [];
	},
};

export default {
	namespaced: true, //开启命名空间
	state,
	actions,
	mutations,
	getters,
};
