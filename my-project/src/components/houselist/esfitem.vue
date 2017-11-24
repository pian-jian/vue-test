<template>
  <div class="olderhouse">
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <li v-for="item in list">
        <div class="group-list flex-lr section mtop14 mbottom14">
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
        </div>
        <div class="hr-one"></div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
      }
    },
    methods: {
      loadMore () {
        console.log(12132132)
        this.loading = true
        setTimeout(() => {
          let last = this.list[this.list.length - 1]
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i)
          }
          this.loading = false
        }, 2500)
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
