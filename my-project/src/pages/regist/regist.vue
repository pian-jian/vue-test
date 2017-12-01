<template>
  <div class="page-login">
    <mt-header title="用户注册">
      <router-link to="/login" slot="right">
        <mt-button title="注册1">登录</mt-button>
      </router-link>
    </mt-header>
    <form class="mtop14 section" name="form-login">
      <div class="flex-lr">
        <mt-field placeholder="请输入手机号" type="tel" v-model="phone" :state="phonestate" v-on:input="inputPhone"></mt-field>
        <span @click="getCode">获取验证码</span>
      </div>
      <div class="hr-one"/>
      <mt-field placeholder="请输入验证码" type="number" v-model="code" :state=" codestate " v-on:input="inputCode"></mt-field>
      <div class="hr-one"/>
      <mt-field placeholder="请输入新密码（最少8位）" type="password" v-model="password" :state=" passwordstate " v-on:input="inputPassword"></mt-field>
      <div class="hr-one mbottom14"/>
      <mt-button class="btnw100 mtop14" type="primary" @click.native="registClick">提交</mt-button>
    </form>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        phone: '',
        code: '',
        password: '',
        phonestate: '',
        codestate: '',
        passwordstate: ''
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
      inputPassword () {
        console.log(this.password)
        if (this.password && this.password.length >= 8) {
          this.passwordstate = 'success'
        } else {
          this.passwordstate = 'error'
        }
      },
      registClick () {
        console.log(this.codestat)
        if (this.phonestate !== 'success' || this.codestate !== 'success' || this.passwordstate !== 'success') {
          this.$toast('填写正确信息')
          if (this.phonestate !== 'success') {
            this.phonestate = 'error'
          } else if (this.codestate !== 'success') {
            this.codestate = 'error'
          } else {
            this.passwordstate = 'error'
          }
        } else {
          this.$toast('正在注册')
        }
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../style/global";
</style>
