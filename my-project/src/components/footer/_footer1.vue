<template>
  <div class="site-footer">
    <router-link to="/index">
      <!--<div class="w-25" :class="localhref=='/index'?'footer-icon-on-01':'footer-icon-01'">-->
      <div class="w-25">
        首页
      </div>
    </router-link>
    <router-link to="/service">
      <!--<div class="w-25" :class="localhref=='/service'?'footer-icon-on-02':'footer-icon-02'">-->
      <div class="w-25">
        服务
      </div>
    </router-link>
    <router-link to="/seehouse">
      <!--<div class="w-25" :class="localhref=='/seehouse'?'footer-icon-on-03':'footer-icon-03'">-->
      <div class="w-25">
        看房
      </div>
    </router-link>
    <router-link to="/me">
      <!--<div class="w-25" :class="localhref=='/me'?'footer-icon-on-04':'footer-icon-04'">-->
      <div class="w-25">
        我
      </div>
    </router-link>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        localhref: this.$route.path
      }
    },
    beforeCreate () {
      console.log('beforeCreate:', this.$route.path)
    },

    created: function () {
      // 从Web Storage取值
      console.log('this.$route.path:', this.$route.path)
      this.selected = this.$route.path
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../style/global";
  .site-footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 4rem;
    background-color: white;
    z-index: 10000;
    .w-25{
      height: 100%;
      float: left;
      line-height: 6rem;
    }
    @for $i from 1 through 4{
      .footer-icon-0#{$i}{
        background-image: url('../../assets/imgs/nav_0#{$i}.png');
        background-position: center 10%;
        background-repeat: no-repeat;
        background-size: 2rem;
        color:$midgrey-color;
      }
      .footer-icon-on-0#{$i}{
        background-image: url('../../assets/imgs/navcur_0#{$i}.png');
        background-position: center 10%;
        background-repeat: no-repeat;
        background-size: 2rem;
        color:$blue;
      }
    }
    .router-link-active{
      color:blue
    }
  }
</style>
