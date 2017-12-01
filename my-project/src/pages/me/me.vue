<template>
  <div class="page-me">
    <div class="banner bgimg-cover flex-bottom">
      <div class="flex-cc section optbtns">
        <router-link class="whitelinebtn btnw20 flex-vc" to="/login">登录</router-link>
        <router-link class="whitelinebtn btnw20 flex-vc mleft14" to="/regist">注册</router-link>
      </div>
    </div>
    <div class="con-list">
      <div class="flex-lr group-li">
        <div class="flex-ll">
          <span class="me-icon bgimg-cover fangyuan"></span>
          <label>我关注的房源</label>
        </div>
        <span class="f-midgray mright14">></span>
      </div>
      <div class="hr-one mright14"/>
      <div class="flex-lr group-li">
        <div class="flex-ll">
          <span class="me-icon bgimg-cover xiaoqu"></span>
          <label>我关注的小区</label>
        </div>
        <span class="f-midgray mright14">></span>
      </div>
      <div class="hr-one mright14"/>
      <div class="flex-lr group-li">
        <div class="flex-ll">
          <span class="me-icon bgimg-cover xinfang"></span>
          <label>我关注的新房</label>
        </div>
        <span class="f-midgray mright14">></span>
      </div>
      <div class="hr-one mright14"/>
      <div class="flex-lr group-li">
        <div class="flex-ll">
          <span class="me-icon bgimg-cover weituo"></span>
          <label>我的委托</label>
        </div>
        <span class="f-midgray mright14">></span>
      </div>
      <div class="hr-one mright14"/>
    </div>
    <SiteFooter></SiteFooter>
  </div>
</template>
<script>
  import footer from './../../components/footer/footer'
  export default {
    components: {
      'SiteFooter': footer
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../style/global";
  .page-me{
    .banner{
      width: 100%;
      height:13rem;
      background-image: url("./../../assets/imgs/bg-login.png");
      .optbtns{
        margin-bottom: 1rem;
      }
    }
    .con-list{
      padding-left: 40px;
      .me-icon{
        position: absolute;
        left:10px;
        background-image: url("./../../assets/imgs/list-icon.png");
        width: 16px;
        height: 16px;

      }
      .fangyuan{
        background-position: 0 .375px;
      }
      .xiaoqu{
        background-position: 0 -16.375px;
      }
      .xinfang{
        background-position: 0 -33px;
      }
      .weituo{
        background-position: 0 -49.25px;
      }
    }
  }
</style>
