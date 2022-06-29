import { reqCategoryList, reqGetBannerList, reqFloorList } from '@/api/index';

const state = {
	categoryList: [],
	bannerList: [],
	floorList: [],
};
const actions = {
	async categoryList({ commit }) {
		let result = await reqCategoryList();
		if (result.code == 200) {
			commit('CATEGORYLIST', result.data);
		}
	},
	async getBannerList({ commit }) {
		let result = await reqGetBannerList();
		console.log('banner', result);
		if (result.code == 200) {
			commit('BANNERLIST', result.data);
		}
	},
	async getFloorList({ commit }) {
		let result = await reqFloorList();
		console.log('floor', result);
		if (result.code == 200) {
			commit('FLOORLIST', result.data);
		}
	},
};
const mutations = {
	CATEGORYLIST(state, value) {
		state.categoryList = value;
	},
	BANNERLIST(state, value) {
		state.bannerList = value;
	},
	FLOORLIST(state, value) {
		state.floorList = value;
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
