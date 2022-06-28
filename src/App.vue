<template>
  <div id="app">
    <Header></Header>
    <!-- 路由组件出口 -->
    <router-view></router-view>
    <Footer v-if="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  mounted(){
    //通知vuex请求typenav的数据
    this.$store.dispatch('home/categoryList')
  }
}
</script>

<style>

</style>
