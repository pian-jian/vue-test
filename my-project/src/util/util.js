export default{
  install (Vue, options) {
    Vue.prototype.testphone = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/
    Vue.prototype.getData = function () {
      console.log('我是插件中的方法')
    }
  }
}
