<template>
  <div class="olderhouse">
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <li v-for="item in list" @click="itemClick(id = item)">
        <router-link class="group-list flex-lr section mtop14 mbottom14" to="/oldhouse-show">
          <div class="group-lh">
            <div class="thumb" style="background-image: url('http://apmcdn.eallcn.com/app_yun/2017-02/D19/5197/fyimg/1487467906404.jpg')">
              <text class="esf-tag fsize12">优选</text>
            </div>
          </div>
          <div class="group-lb textalignl">
            <div class="fsize16 bold">天龙南国名城 3室2厅 170万</div>
            <div class="flex-lr">
              <div class="fsize12 f-midgray">
                <div>3室2厅 130.5m² 南北</div>
                <div>江南{{ item }}</div>
              </div>
              <div class="fsize18 red">
                170万
              </div>
            </div>
            <div class="flex-auto fsize10">
              <div class="item-tag1">满两年</div>
              <div class="item-tag2">满两年12</div>
            </div>
          </div>
        </router-link>
        <div class="hr-one"></div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        list: ['1_01', '2_01', '3_01', '4_01', '5_01', '6_01', '7_01', '8_01', '9_01', '10_01', '11_01', '12_01', '13_01']
      }
    },
    methods: {
      loadMore () {
        console.log(12132132)
        this.loading = true
        setTimeout(() => {
          let last = this.list[this.list.length - 1]
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i + '_01')
          }
          this.loading = false
        }, 2500)
      },
      itemClick () {
        console.log(this.id)
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../style/global";
  .olderhouse{
    width: 100%;
    height: auto;
  }

</style>
