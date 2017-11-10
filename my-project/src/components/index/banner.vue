<template>
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
</template>
<script>
  export default {

  }
</script>
<style lang="scss" rel="stylesheet/scss">
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
</style>
