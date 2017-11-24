<template>
  <div>
    <div class="index-banner">
      <router-link  class="btn-location" to="/cityselect">义乌</router-link>
      <div class="userinfo f10 white">
        <span class="user-icon"></span>
        登录/注册
      </div>
      <div class="bfbzfy">
      </div>
      <div class="index-search">
        <span class="icon-home-search"></span>
        <input type="text" class="" placeholder="请输入城区、商圈或学区房名...">
      </div>
    </div>
    <div class="index-types">
      <div class="bgs-list row">
        <router-link  class="w-25" to="/oldhouselist">
            <i class="bgs menu-1"></i>
            <p>二手房</p>
        </router-link>
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
    <IndexSwiper></IndexSwiper>

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
    <div class="section group-li flex-ll fsize16">
      热门房源
    </div>
    <div class="hr-one"></div>
    <Esflist></Esflist>

  </div>
</template>
<script>
  import indexswiper from '../swiper/swiper'
  import esflist from './../../components/houselist/esfitem'

  export default {

    components: {
      'IndexSwiper': indexswiper,
      'Esflist': esflist
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../style/global";
  .index-banner{
    position: relative;
    width: 100%;
    height: 16rem;
    background-image: url('http://m.zuobiao.wang/images/banner.jpg');
    display: block;
    background-repeat: no-repeat;
    background-size:cover;
    .bfbzfy{
      width: 18rem;
      background-image: url('http://m.zuobiao.wang/images/slogan.png');
      height: 4.5rem;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      top: 5rem;
      left: 50%;
      @include div-h-center;
    }
    .btn-location {
      display: block;
      width: 5rem;
      height: 2rem;
      line-height: 2rem;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.6);
      color: #fff;
      border-radius: 1.5rem;
      font-size: 13px;
      box-shadow: 0 2px 3px rgba(0, 0, 0, .25);
      position: absolute;
      top:1rem;
      left:1rem;
    }
    .userinfo{
      position: absolute;
      right: 1rem;
      top:1rem;
    }
    .user-icon{
      width: 2rem;
      height: 2rem;
      background-image: url('http://m.zuobiao.wang/images/user_icon.png');
      background-size: cover;
      display: block;
      margin: 0 auto 0.5rem auto;
    }
    .index-search{
      width: 90%;
      height: 2rem;
      line-height: 2rem;
      background-color: white;
      border-radius: 0.25rem;
      position: absolute;
      bottom:2rem;
      left: 50%;
      @include div-h-center;
      .icon-home-search{
        position: absolute;
        top: 50%;
        left: 0.5rem;
        background-image: url('http://m.zuobiao.wang/images/icon-search.png');
        width: 1rem;
        height: 1rem;
        background-size: cover;
        @include div-v-center;
      }
      input{
        position: absolute;
        top: 50%;
        left: 2rem;
        color: #666;
        background: rgba(255,255,255,0.9);
        height: 60%;
        border: 0;
        width: 80%;
        @include div-v-center;
      }
    }
  }
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
