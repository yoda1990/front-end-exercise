<template>
  <div>
    <!--  三级联动全局组件已经注册为全局组件，因此不需要引入-->
    <TypeNav />
    <!--  轮播图列表-->
    <ListContainer />
    <!--  今日推荐-->
    <Recommend />
    <!--  商品排行-->
    <Rank />
    <!--  猜你喜欢-->
    <Like />
    <!-- 楼层 -->
    <Floor v-for="floor in floor" :key="floor.id" :floor="floor" />
    <!--  商标-->
    <Brand />
  </div>
</template>

<script>
import TypeNav from '/src/pages/home/typeNav'
import ListContainer from '/src/pages/home/listContainer'
import Recommend from '/src/pages/home/recommend'
import Rank from '/src/pages/home/rank'
import Like from '/src/pages/home/like'
import Floor from '/src/pages/home/floor'
import Brand from '/src/pages/home/brand'

export default {
  name: 'home',
  data() {
    return {}
  },
  components: {
    TypeNav,
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  mounted() {
    // 触发vuex的异步action调用, 从mock接口请求数据到state中
    this.$store.dispatch('getBanners')
    this.$store.dispatch('getFloors')
  },

  computed: {
    ...mapState({
      floors: (state) => state.home.floors,
    }),
  },
}
</script>

<style lang="less" scoped>
</style>