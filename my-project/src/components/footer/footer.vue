<template>
  <div class="site-footer">
    <section @click="gotoAddress({path:'/index'})">
      <div class="w-25" :class="$route.path.indexOf('index') !=-1?'footer-icon-on-01':'footer-icon-01'">
        首页{{$router.path}}
      </div>
    </section>
    <section @click="gotoAddress({path:'/service'})">
      <div class="w-25" :class="$route.path.indexOf('service') !=-1?'footer-icon-on-02':'footer-icon-02'">
        服务
      </div>
    </section>
    <section @click="gotoAddress({path:'/seehouse'})">
      <div class="w-25" :class="$route.path.indexOf('seehouse') !=-1?'footer-icon-on-03':'footer-icon-03'">
        看房
      </div>
    </section>
    <section @click="gotoAddress({path:'/me'})">
      <div class="w-25" :class="$route.path.indexOf('me') !=-1?'footer-icon-on-04':'footer-icon-04'">
        我
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    beforeCreate () {
    },
    created: function () {
    },
    methods: {
      gotoAddress (path) {
        this.$router.push(path)
      }
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
      text-align: center;
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
  }
</style>
