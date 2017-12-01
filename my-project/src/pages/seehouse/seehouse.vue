<template>
  <div class="service-page flex-vc">
    <div class="swipercon">
      <mt-swipe>
        <mt-swipe-item  class="flex-vc" v-for="item in list">
          <div>
          <img class="mbottom14" :src="item.img">
          <p class="fsize20 mtop14">{{ item.title }}</p>
          <label class="f-midgray">{{ item.desc }}</label>
            </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <mt-button class="btnw50" type="primary" style="margin-top: 5rem">去预约</mt-button>
    <SiteFooter></SiteFooter>
  </div>
</template>
<script>
  import footer from './../../components/footer/footer'
  export default {
    name: 'carrousel',
    data () {
      return {
        list: [{
          img: require('../../assets/imgs/next1.jpg'),
          title: '把房子加入待看清单',
          desc: '点击预约看房，把喜欢的房子加入到想看的清单'
        }, {
          img: require('../../assets/imgs/next2.jpg'),
          title: '预约看房时间',
          desc: '在待看清单中选择想看房源，并给出期望的看房时'
        }, {
          img: require('../../assets/imgs/next3.jpg'),
          title: '经纪人安排看房日程',
          desc: '预约看房后，经纪人会安排看房日程，全城、全程'
        }]
      }
    },
    components: {
      'SiteFooter': footer
    },
    computed: {
    },
    created: function () {
    },
    mounted () {
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../style/global";
  .service-page{
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;
    .swipercon{
      width: 20rem;
      height: 26rem;
      img{
        width: 13rem;
        height: 13rem;
      }
    }
  }
</style>
