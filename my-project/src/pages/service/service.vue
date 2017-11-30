<template>
  <div class="service-page">
    <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="bgimg-cover flex-bottom" v-for="(item,index) in list" :class="item.class">
        <div class="bottomcont">
          <div class="wrap-p1-arrow">
            <img src="../../assets/imgs/anxinchengnuo-arrow.png">
          </div>
          <img v-bind:src="item.cont">
        </div>
        <div class="topcont" v-if="index==0">
          <img src="../../assets/imgs/zfwtext1a.png">
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
  // swiper options example:
  export default {
    name: 'carrousel',
    data () {
      return {
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        swiperOption: {
          // swiper options 所有的配置同swiper官方api配置
          autoplay: 3000,
          direction: 'vertical',
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          // pagination: '.swiper-pagination',
          paginationClickable: true,
          // prevButton: '.swiper-button-prev',
          // nextButton: '.swiper-button-next',
          // scrollbar: '.swiper-scrollbar',
          mousewheelControl: true,
          observeParents: true,
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
          debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          onTransitionStart (swiper) {
            console.log(swiper)
          }
          // more Swiper configs and callbacks...
          // ...
        },
        list: []
      }
    },
    // you can find current swiper instance object like this, while the notNextTick property value must be true
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    },
    created: function () {
      for (var i = 1; i <= 12; i++) {
        this.list.push({'class': 'slide_' + i, 'cont': require('../../assets/imgs/zfwtext' + i + '.png')})
      }
      console.log(this.list)
    },
    mounted () {
      // you can use current swiper instance object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(0, 3000, false)
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../style/global";
  .service-page{
    width: 100%;
    height: 100%;
    .swiper-container{
      width: 100%;
      height: 100%;
    }
    @for $i from 1 through 12 {
      .slide_#{$i}{
        background-image: url('./../../assets/imgs/zfwpic#{$i}.jpg')
      }
    }
    .bottomcont,.topcont{
      margin: 0 10%;
      width: 80%;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
    .bottomcont{
      margin-bottom: 3rem;
    }
    .topcont{
      margin-top: 4rem;
    }
    .wrap-p1-arrow {
      position: absolute;
      left: 50%;
      bottom: 30%;
      display: block;
      width: 28px;
      height: 27px;
      margin: -14px 0 0 -13.5px;
      background: url('../../assets/imgs/anxinchengnuo-arrow.png') 0 0 no-repeat;
      background-size: 100% 100%;
      overflow: hidden;
      -webkit-animation: tips_ani 1s ease-out infinite;
      animation: tips_ani 1s ease-out infinite;
    }
  }
</style>
