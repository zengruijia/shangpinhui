<template>
	<div class="swiper-container" ref="cur">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(slide, index) in skuImageList" :key="slide.id">
				<img :src="slide.imgUrl" :class="{ active: currentIndex == index }" @click="currentChange(index)" />
			</div>
		</div>
		<div class="swiper-button-next"></div>
		<div class="swiper-button-prev"></div>
	</div>
</template>

<script>
import Swiper from 'swiper';
export default {
	name: 'ImageList',
	data() {
		return {
			currentIndex: 0,
		};
	},
	props: ['skuImageList'],
	watch: {
		//监听数据；可以保证数据ok,但不能保证页面结构加载完成
		skuImageList(newValue, oldValue) {
			//结构更新完成
			this.$nextTick(() => {
				new Swiper(this.$refs.cur, {
					// 一页显示几个图片
					slidesPerView: 3,
					//一次滚动几个slide
					slidesPerGroup: 1,
					// 如果需要前进后退按钮
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
				});
			});
		},
	},
	methods: {
		currentChange(index) {
			this.currentIndex = index;
			//通知放大镜组件当前索引
			this.$bus.$emit('getIndex', this.currentIndex);
		},
	},
};
</script>

<style lang="less" scoped>
.swiper-container {
	height: 56px;
	width: 412px;
	box-sizing: border-box;
	padding: 0 12px;

	.swiper-slide {
		width: 56px;
		height: 56px;

		img {
			width: 100%;
			height: 100%;
			border: 1px solid #ccc;
			padding: 2px;
			width: 50px;
			height: 50px;
			display: block;

			&.active {
				border: 2px solid #f60;
				padding: 1px;
			}
		}
	}

	.swiper-button-next {
		left: auto;
		right: 0;
	}

	.swiper-button-prev {
		left: 0;
		right: auto;
	}

	.swiper-button-next,
	.swiper-button-prev {
		box-sizing: border-box;
		width: 12px;
		height: 56px;
		background: rgb(235, 235, 235);
		border: 1px solid rgb(204, 204, 204);
		top: 0;
		margin-top: 0;
		&::after {
			font-size: 12px;
		}
	}
}
</style>
