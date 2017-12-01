<template>
  <div class="service-page">
    <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="flex-vc" v-for="item in list">
        {{ item.title }}
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
          // direction: 'vertical',
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
        list: [{
          img: './../../assets/next1.jpg',
          title: '把房子加入待看清单',
          desc: '点击预约看房，把喜欢的房子加入到想看的清单'
        }, {
          img: './../../assets/next2.jpg',
          title: '预约看房时间',
          desc: '在待看清单中选择想看房源，并给出期望的看房时'
        }, {
          img: './../../assets/next3.jpg',
          title: '经纪人安排看房日程',
          desc: '预约看房后，经纪人会安排看房日程，全城、全程'
        }]
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
