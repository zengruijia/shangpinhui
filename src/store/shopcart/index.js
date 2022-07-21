import { reqGetShopCarList } from '@/api';
const state = {};
const actions = {
	//获取购物车数据
	async getCartList({ commit }) {
		let result = await reqGetShopCarList();
		console.log(result);
	},
};
const mutations = {};
const getters = {};

export default { 
  namespaced: true,
  state, 
  actions, 
  mutations, 
  getters 
};
