<template>
    <header class="row site_header indexpage">
      <div class="col-xs-2 col-md-2 menu_top_left sitelogo"></div>
      <div class="col-xs-8 col-md-8 menu_top_center index_header_center">
          <label>搜索农家乐/活动/美食/特产...</label>
          <span class="searchicon"></span>
      </div>
      <div class="col-xs-2 col-md-2 menu_top_right" id="myinfo">登录</div>
    </header></template>
<script>
  export default {
    name: 'header',
    data () {
      return {
        msg: 'HelloWorld'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
    color:red;
  }
</style>
