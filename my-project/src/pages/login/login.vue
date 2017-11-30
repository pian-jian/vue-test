<template>
  <div class="page-login">
    <mt-header title="手机快捷登录">
      <router-link to="/" slot="right">
        <mt-button title="注册1">注册</mt-button>
      </router-link>
    </mt-header>
    <div class="f-midgray textalignl fsize12 section mbottom14 mtop14">未注册过的手机号码将自动创建坐标网账号,经纪人不会看到您的手机号</div>

    <form class="mtop14 section" name="form-login">
      <div class="flex-lr">
        <mt-field placeholder="请输入手机号" type="tel" v-model="phone" :state="phonestate" v-on:input="inputPhone"></mt-field>
        <span @click="getCode">获取验证码</span>
      </div>
      <div class="hr-one"/>
      <mt-field placeholder="请输入验证码" type="number" v-model="code" :state=" codestate " v-on:input="inputCode"></mt-field>
      <div class="hr-one mbottom14"/>
      <mt-button class="btnw100 mtop14" type="primary" @click.native="loginClick">登录</mt-button>
    </form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        phone: '',
        code: '',
        phonestate: '',
        codestate: ''
      }
    },
    methods: {
      getCode () {
        this.getData()
        this.$toast('验证码发送成功')
      },
      inputPhone () {
        console.log(this.phone)
        if (this.testphone.test(this.phone)) {
          this.phonestate = 'success'
        } else {
          this.phonestate = 'error'
        }
      },
      inputCode () {
        console.log(this.code)
        if (this.code && this.code.length === 4) {
          this.codestate = 'success'
        } else {
          this.codestate = 'error'
        }
      },
      loginClick () {
        console.log(this.codestat)
        if (this.phonestate !== 'success' || this.codestate !== 'success') {
          this.$toast('填写正确信息')
          if (this.phonestate !== 'success') {
            this.phonestate = 'error'
          } else {
            this.codestate = 'error'
          }
        } else {
          this.$toast('正在登录')
        }
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../style/global";
</style>
