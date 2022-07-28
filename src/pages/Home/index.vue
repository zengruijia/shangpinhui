<template>
	<div>
		<TypeNav></TypeNav>
		<ListContainer />
		<Recommend />
		<Rank />
		<Like />
		<Floor v-for="floor in floorList" :key="floor.id" :list="floor" />
		<Brand />
	</div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer';
import Recommend from '@/pages/Home/Recommend';
import Rank from '@/pages/Home/Rank';
import Like from '@/pages/Home/Like';
import Floor from '@/pages/Home/Floor';
import Brand from '@/pages/Home/Brand';
import { mapState } from 'vuex';

export default {
	name: 'Home',
	components: {
		ListContainer,
		Recommend,
		Rank,
		Like,
		Floor,
		Brand,
	},
	methods: {},
	computed: {
		...mapState('home', ['floorList']),
	},
	async mounted() {
		//通知vuex请求数据
		this.$store.dispatch('home/getFloorList');
		try{
			//获取用户信息
			await this.$store.dispatch('user/getUserInfo');
		}catch(error){
			console.log(error.message);
		}
	},
};
</script>

<style></style>
