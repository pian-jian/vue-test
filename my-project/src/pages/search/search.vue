<template>
  <div class="page-search group-li">
    <mt-search
      v-model="value"
      cancel-text="取消"
      placeholder="请输入小区或者区域名称"
      v-on:input="inputValue">
    </mt-search>
    <div class="mtop14 section">{{ result }}</div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: '',
        result: ''
      }
    },
    methods: {
      inputValue () {
        console.log(this.value)
        this.result = '没结果'
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../style/global";
  .mint-search,.mint-search .mint-searchbar{
    height: 100%;
  }
</style>
