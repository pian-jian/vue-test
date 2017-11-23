import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  number: 1
}

// 实例化一个vuex实例调用Store方法，把状态压入仓库
export default new Vuex.Store({
  state
})
