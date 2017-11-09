<template>
  <div class="index-banner">
    <router-link  class="btn-location"  to="/cityselect">义乌</router-link>
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
</template>
<script>
  import cityselect from '../cityselect/cityselect'

  export default {
    components: {
      'cityselect': cityselect
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../style/global";

  .index-banner{
    position: relative;
    width: 100%;
    height: 10.5rem;
    background-image: url('http://m.zuobiao.wang/images/banner.jpg');
    display: block;
    background-repeat: no-repeat;
    background-size:cover;
    .bfbzfy{
      width: 15rem;
      background-image: url('http://m.zuobiao.wang/images/slogan.png');
      height: 2.5rem;
      background-size: cover;
      position: absolute;
      top: 3rem;
      left: 50%;
      @include div-h-center;
    }
    .btn-location {
      display: block;
      width: 3rem;
      height: 1.25rem;
      line-height: 1.25rem;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.6);
      color: #fff;
      border-radius: 1rem;
      font-size: 13px;
      box-shadow: 0 2px 3px rgba(0, 0, 0, .25);
      position: absolute;
      top:0.5rem;
      left:0.5rem;
    }
    .userinfo{
      position: absolute;
      right: 0.5rem;
      top:0.5rem;
    }
    .user-icon{
      width: 1rem;
      height: 1rem;
      background-image: url('http://m.zuobiao.wang/images/user_icon.png');
      background-size: cover;
      display: block;
      margin: 0 auto;
    }
    .index-search{
      width: 90%;
      height: 2rem;
      line-height: 2rem;
      background-color: white;
      border-radius: 0.25rem;
      position: absolute;
      bottom:0.5rem;
      left: 50%;
      @include div-h-center;
      .icon-home-search{
        position: absolute;
        top: 50%;
        left: 0.5rem;
        background-image: url('http://m.zuobiao.wang/images/icon-search.png');
        width: 0.7rem;
        height: 0.7rem;
        background-size: cover;
        @include div-v-center;
      }
      input{
        position: absolute;
        top: 50%;
        left: 1.5rem;
        color: #666;
        background: rgba(255,255,255,0.9);
        height: 60%;
        border: 0;
        width: 80%;

        @include div-v-center;
      }
    }
  }
</style>
