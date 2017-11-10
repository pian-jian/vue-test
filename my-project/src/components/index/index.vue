<template>
  <div>
    <IndexBanner></IndexBanner>
    <indexTypes></indexTypes>
  </div>
</template>
<script>
  import indexbanner from './banner'
  import indextypes from './types'
  export default {
    components: {
      'IndexBanner': indexbanner,
      'indexTypes': indextypes
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../style/global.scss";
</style>
