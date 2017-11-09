import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import CitySelect from '@/components/cityselect/cityselect'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/index',
      name: 'Index',
      component: Index
    }, {
      path: '/cityselect',
      name: 'cityselect',
      component: CitySelect
    }
  ]
})
