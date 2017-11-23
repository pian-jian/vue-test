<template>
  <div class="index-helps">
    <div class="hr"></div>
    <div class="bgs-list row">
      <div class="w-20">
        <i class="bgs help-icon-03"></i>
        <p>问答</p>
      </div>
      <div class="w-20">
        <i class="bgs help-icon-05"></i>
        <p>百科</p>
      </div>
      <div class="w-20">
        <i class="bgs help-icon-07"></i>
        <p>查学校</p>
      </div>
      <div class="w-20">
        <i class="bgs help-icon-09"></i>
        <p>房价</p>
      </div>
      <div class="w-20">
        <i class="bgs help-icon-11"></i>
        <p>估价</p>
      </div>
    </div>
    <div class="bgs-list row">
      <div class="w-20">
        <i class="bgs help-icon-13"></i>
        <p>经纪人</p>
      </div>
      <div class="w-20">
        <i class="bgs help-icon-15"></i>
        <p>坐标云算</p>
      </div>
    </div>
    <div class="hr"></div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../style/global";
  .index-helps{
    width: 100%;
    height: 14rem;
    display: block;
    .bgs-list{
      margin-top: 1rem;
      height: 5rem;
      .w-20{
        text-align: center;
        float: left;
      }
    }
    .bgs{
      display: block;
      width: 2.5rem;
      height: 2.5rem;
      margin: 0 auto 0.3rem;
      -webkit-background-size: 100% 100%;
      background-size: 100% 100%;
    }

    $iconsno:('03','05','07','09','11','13','15');
    @each $i in $iconsno{
      .help-icon-#{$i}{
        background-image: url('../../assets/imgs/toolico_#{$i}.jpg');
      }
    }
  }
</style>
