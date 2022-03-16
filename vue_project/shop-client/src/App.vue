<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter" />
  </div>
</template>

<script>
import Header from '/src/components/header/index'
import Footer from '/src/components/footer/index'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang = "less" scoped>
</style>
