<template>
  <div class="index-types">
    <div class="bgs-list row">
      <div class="w-25">
          <i class="bgs menu-1"></i>
          <p>二手房</p>
      </div>
      <div class="w-25">
          <i class="bgs menu-2"></i>
          <p>新房</p>
      </div>
      <div class="w-25">
          <i class="bgs menu-3"></i>
          <p>租房</p>
      </div>
      <div class="w-25">
          <i class="bgs menu-4"></i>
          <p>卖房</p>
      </div>
    </div>
    <div class="bgs-list row">
      <div class="w-25">
          <i class="bgs menu-9"></i>
          <p>坐标金融</p>
      </div>
      <div class="w-25">
          <i class="bgs menu-6"></i>
          <p>查成交</p>
      </div>
      <div class="w-25">
          <i class="bgs menu-7"></i>
          <p>学区房</p>
      </div>
      <div class="w-25">
          <i class="bgs menu-5"></i>
          <p>地图找房</p>
      </div>
    </div>
    <div class="hr"></div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../style/global.scss";
  .index-types{
    width: 100%;
    height: 16rem;
    display: block;
    .bgs-list{
      margin-top: 1rem;
      height: 7rem;
      .w-25{
        text-align: center;
        float: left;
      }
    }
    .bgs{
      display: block;
      width: 4rem;
      height: 4rem;
      margin: 0 auto 0.3rem;
      -webkit-background-size: 100% 100%;
      background-size: 100% 100%;
    }
    @for $i from 1 through 7{
      .menu-#{$i}{
        background-image: url('../../assets/imgs/index-menu-#{$i}.png');
      }
    }
    .menu-9{
      background-image: url('../../assets/imgs/jr_03.png');
    }
  }
</style>
