<template>
  <div>
    <IndexBanner></IndexBanner>
    <IndexTypes></IndexTypes>
    <IndexSwiper></IndexSwiper>
  </div>
</template>
<script>
  import indexbanner from './banner'
  import indextypes from './types'
  import indexswiper from './../swiper/swiper'
  export default {
    components: {
      'IndexBanner': indexbanner,
      'IndexTypes': indextypes,
      'IndexSwiper': indexswiper
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../style/global.scss";
</style>
