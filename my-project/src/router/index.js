import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import CitySelect from '@/components/cityselect/cityselect'
import Service from '@/pages/service/service'
import SeeHouse from '@/pages/seehouse/seehouse'
import Me from '@/pages/me/me'
import Login from '@/pages/login/login'
import Regist from '@/pages/regist/regist'
import Search from '@/pages/search/search'
import Oldhouselist from '@/pages/oldhouse/list'
import Oldhouseshow from '@/pages/oldhouse/show'

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
    }, {
      path: '/regist',
      component: Regist
    }, {
      path: '/login',
      component: Login
    }, {
      path: '/search',
      component: Search
    }, {
      path: '/oldhouselist',
      component: Oldhouselist
    }, {
      path: '/oldhouse-show',
      component: Oldhouseshow
    }]
})
