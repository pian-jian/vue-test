<template>
  <div id="app">
    <v-index></v-index>
  </div>
</template>

<script>
  import index from './components/index/index'

  export default {
    components: {
      'v-index': index
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
  padding: 0;
}
</style>
