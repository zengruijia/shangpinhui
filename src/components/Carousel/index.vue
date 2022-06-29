<template>
	<div class="swiper-container" ref="cue">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="carouse in list.carouselList" :key="carouse.id">
				<img :src="carouse.imgUrl" />
			</div>
		</div>
		<!-- 如果需要分页器 -->
		<div class="swiper-pagination"></div>

		<!-- 如果需要导航按钮 -->
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>
	</div>
</template>

<script>
export default {
	name: 'carousel',
	props: ['list'], //接收home传过来的数据
	watch: {
		list: {
			immediate: true, //开启立即监听
			handler() {
				this.$nextTick(() => {
					var mySwiper = new Swiper(this.$refs.cur, {
						loop: true, // 循环模式选项
						// 如果需要分页器
						pagination: {
							el: '.swiper-pagination',
							clickable: true,
						},
						// 如果需要前进后退按钮
						navigation: {
							nextEl: '.swiper-button-next',
							prevEl: '.swiper-button-prev',
						},
					});
				});
			},
		},
	},
};
</script>

<style></style>
