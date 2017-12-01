<template>
  <div class="page-show">
    <Swiper></Swiper>
    <mt-cell title="标题文字" icon="more" value="带 icon"></mt-cell>
  </div>
</template>
<script>
    /* eslint-disable */
    import swiper from './../swiper/swiper'
    export default {
      data () {
        return {
          swiperdata:[{
            img: '../../assets/imgs/home_banner1.jpg'
          }, {
            img: '../../assets/imgs/home_banner2.jpg'
          }]
        }
      },
      components:{
        Swiper:swiper
      }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../../style/global";
</style>
