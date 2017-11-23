<template>
  <div id="app">
    <router-view></router-view>
    <SiteFooter></SiteFooter>

  </div>
</template>

<script>
  import footer from './components/footer/footer'

  export default {
    components: {
      'SiteFooter': footer
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0 0 4rem 0;
}
</style>
