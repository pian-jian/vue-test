import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import CitySelect from '@/components/cityselect/cityselect'
import Service from '@/pages/service/service'
import SeeHouse from '@/pages/seehouse/seehouse'
import Me from '@/pages/me/me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    }, {
      path: '/index',
      component: Index
    }, {
      path: '/cityselect',
      component: CitySelect
    }, {
      path: '/service',
      component: Service
    }, {
      path: '/seehouse',
      component: SeeHouse
    }, {
      path: '/me',
      component: Me
    }]
})
