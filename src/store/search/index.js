import { reqGetSearchInfo } from '@/api';

const state = {
	searchList: {},
};
const actions = {
	//获取search数据
	async getSearchList({ commit }, params = {}) {
		let result = await reqGetSearchInfo(params);
		if (result.code == 200) {
			commit('GETSEARCHLIST', result.data);
			console.log(result.data);
			
		}
	},
};
const mutations = {
	GETSEARCHLIST(state, value) {
		state.searchList = value;	
	},
};
//计算属性
const getters = {
	goodsList() {
		return state.searchList.goodsList||[];
	},
	trademarkList() {
		return state.searchList.trademarkList;
	},
	attrsList() {
		return state.searchList.attrsList;
	},
};
export default {
	namespaced: true, //开启命名空间
	state,
	mutations,
	actions,
	getters,
};
