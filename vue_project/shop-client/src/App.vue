<template>
  <div>
    <header/>
    <router-view></router-view>
    <footer/>
  </div>
</template>

<script>
import header from './components/header'
import footer from './components/footer'

export default {
  name: 'App',
  components: {
    header,
    footer
  }
}
</script>

<style lang = "less" scoped>

</style>
