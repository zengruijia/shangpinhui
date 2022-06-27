import { reqCategoryList } from '@/api/index';

const state = {
	categoryList: [],
};
const actions = {
	async categoryList({ commit }) {
		let result = await reqCategoryList();
		if (result.code == 200) {
			commit('CATEGORYLIST', result.data);
		}
	},
};
const mutations = {
	CATEGORYLIST(state, value) {
		state.categoryList = value;
	},
};
const getters = {};
export default {
	namespaced: true, //开启命名空间
	state,
	mutations,
	actions,
	getters,
};
