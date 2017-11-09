<template>
  <div>
    <IndexBanner></IndexBanner>
  </div>
</template>
<script>
  import indexbanner from './banner'
  export default {
    components: {
      'IndexBanner': indexbanner
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../style/global.scss";
</style>
