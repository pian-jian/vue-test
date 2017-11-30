<template>
  <div class="list-page">
    <!-- navbar -->
    <section class="page-part" v-model="selected">
      <ul class="flex-lr navbar">
        <li class="flex-cc" :class="catindexval==0||valobj.region>0?'is-active':''" style="width: 20%" @click="setCat(name='region',catindex=0)">区域</li>
        <li class="flex-cc" :class="catindexval==1||valobj.price>0?'is-active':''" style="width: 20%" @click="setCat(name='price',catindex=1)">价格</li>
        <li class="flex-cc" :class="catindexval==2||valobj.spec>0?'is-active':''" style="width: 20%" @click="setCat(name='spec',catindex=2)">房型</li>
        <li class="flex-cc" :class="valobj.order||valobj.style||valobj.area||valobj.tags||valobj.number||catindexval==3||catindexval==4?'is-active':''" style="width: 20%" @click="setCat(name='more',catindex=3)">更多</li>
      </ul>
      <div class="hr-one"></div>
    </section>
    <!-- tabcontainer -->
    <div class="catmodal" v-if="catishide">
      <div class="catcontent">
        <div v-if=" catindexval==0">
          <ul>
            <li v-for="item in catdata.region" :class="item.isselect==1?'is-selected':''" @click="setCatitem(name='region',id=item.id)">
              <p>{{ item.text }}</p>
            <div class="hr-one"></div>
            </li>
          </ul>
        </div>
        <div v-if=" catindexval==1">
          <ul>
            <li v-for="item in catdata.price" :class="item.isselect==1?'is-selected':''" @click="setCatitem(name='price',id=item.id)">
              <p>{{ item.text }}</p>
              <div class="hr-one"></div>
            </li>
          </ul>
        </div>
        <div v-if=" catindexval==2">
          <ul>
            <li v-for="item in catdata.spec" :class="item.isselect==1?'is-selected':''" @click="setCatitem(name='spec',id=item.id)">
              <p>{{ item.text }}</p>
              <div class="hr-one"></div>
            </li>
          </ul>
        </div>
        <div v-if=" catindexval>=3">
          <div class="more">
            <ul class="catcontent" style="width: 25%;float: left;display: block;">
              <li class="flex-cc navbar" :class="catindexval==3||catindexval==4||valobj.order>0?'is-active':''" @click="setCat(name='order',catindex=4)">排序</li>
              <li class="flex-cc navbar" :class="catindexval==5||valobj.style>0?'is-active':''" @click="setCat(name='style',catindex=5)">装修</li>
              <li class="flex-cc navbar" :class="catindexval==6||valobj.area>0?'is-active':''" @click="setCat(name='area',catindex=6)">面积</li>
              <li class="flex-cc navbar" :class="catindexval==7||valobj.tags?'is-active':''" @click="setCat(name='tags',catindex=7)">标签</li>
              <li class="flex-cc navbar" :class="catindexval==8||valobj.number>0?'is-active':''" @click="setCat(name='number',catindex=8)">房源编号</li>
            </ul>
            <!-- tab-container -->
            <div v-model="action" style="width: 75%;float: left">
              <div v-if="catindexval==3||catindexval==4">
                <ul>
                  <li v-for="item in catdata.order" :class="item.isselect==1?'is-selected':''" @click="setCatitem(name='order',id=item.id)">
                    <p>{{ item.text }}</p>
                    <div class="hr-one"></div>
                  </li>
                </ul>
              </div>
              <div v-if=" catindexval==5">
                <ul>
                  <li v-for="item in catdata.style" :class="item.isselect==1?'is-selected':''" @click="setCatitem(name='style',id=item.id)">
                    <p>{{ item.text }}</p>
                    <div class="hr-one"></div>
                  </li>
                </ul>
              </div>
              <div v-if=" catindexval==6">
                <ul>
                  <li v-for="item in catdata.area" :class="item.isselect==1?'is-selected':''" @click="setCatitem(name='area',id=item.id)">
                    <p>{{ item.text }}</p>
                    <div class="hr-one"></div>
                  </li>
                </ul>
              </div>
              <div v-if=" catindexval==7">
                <ul>
                  <li v-for="item in catdata.tags" :class="item.isselect==1?'is-selected':''" @click="setCatitem(name='tags',id=item.id)">
                    <p>{{ item.text }}</p>
                    <div class="hr-one"></div>
                  </li>
                </ul>
              </div>
              <div v-if=" catindexval==8">
                fangyuanbianhao
              </div>
            </div>
          </div>
          <mt-button class="section mtop14 mbottom14" type="primary" @click="setCatitems">确定</mt-button>
        </div>
      </div>
    </div>
    <div class="list-content">
      <Esflist></Esflist>
    </div>
  </div>
</template>

<script>
  import esflist from './../../components/houselist/esfitem'
  export default {
    name: 'page-navbar',
    data () {
      return {
        selected: '',
        action: '4',
        catishide: false,
        catindexval: '',
        catdata: {
          region: [{id: 0, text: '不限', isselect: 0},
            {id: 1, text: '北苑', isselect: 0},
            {id: 2, text: '江东', isselect: 0},
            {id: 3, text: '稠城', isselect: 0},
            {id: 4, text: '稠江', isselect: 0},
            {id: 5, text: '廿三里', isselect: 0},
            {id: 6, text: '福田', isselect: 0},
            {id: 7, text: '城西', isselect: 0},
            {id: 8, text: '后宅', isselect: 0},
            {id: 9, text: '乡镇', isselect: 0},
            {id: 10, text: '周边', isselect: 0}],
          school: [{id: 0, text: '不限', isselect: 0},
            {id: 1, text: '小学', isselect: 0},
            {id: 2, text: '中学', isselect: 0}],
          price: [{id: 0, text: '不限', isselect: 0},
            {id: 1, text: '50万以下', isselect: 0},
            {id: 2, text: '50万-100万', isselect: 0},
            {id: 3, text: '100万-120万', isselect: 0},
            {id: 4, text: '120万-150万', isselect: 0},
            {id: 5, text: '120万-150万', isselect: 0},
            {id: 6, text: '150万-200万', isselect: 0},
            {id: 7, text: '200万-250万', isselect: 0},
            {id: 8, text: '250万-300万', isselect: 0},
            {id: 9, text: '300万-350万', isselect: 0},
            {id: 10, text: '350万以上', isselect: 0},
            {id: 11, text: '自定义价格', isselect: 0}],
          spec: [{id: 0, text: '不限', isselect: 0},
            {id: 1, text: '1室', isselect: 0},
            {id: 2, text: '2室', isselect: 0},
            {id: 3, text: '3室', isselect: 0},
            {id: 4, text: '4室', isselect: 0},
            {id: 5, text: '5室', isselect: 0},
            {id: 6, text: '5室以上', isselect: 0}],
          order: [{id: 0, text: '不限', isselect: 0},
            {id: 1, text: '总价由低到高', isselect: 0},
            {id: 2, text: '总价由高到低', isselect: 0}],
          style: [{id: 0, text: '不限', isselect: 0},
            {id: 1, text: '毛坯', isselect: 0},
            {id: 2, text: '简装', isselect: 0},
            {id: 3, text: '中装', isselect: 0},
            {id: 4, text: '精装', isselect: 0},
            {id: 5, text: '豪装', isselect: 0}],
          area: [{id: 0, text: '不限', isselect: 0},
            {id: 1, text: '50平以下', isselect: 0},
            {id: 2, text: '50-75平', isselect: 0},
            {id: 3, text: '75平-100平', isselect: 0},
            {id: 4, text: '100-120平', isselect: 0},
            {id: 5, text: '120-144平', isselect: 0},
            {id: 6, text: '144-160平', isselect: 0},
            {id: 7, text: '160-200平', isselect: 0},
            {id: 8, text: '200平以上', isselect: 0}],
          tags: [{id: 0, text: '不限', isselect: 0},
            {id: 1, text: '学区房', isselect: 0},
            {id: 2, text: '满二唯一', isselect: 0},
            {id: 3, text: '新上', isselect: 0},
            {id: 4, text: '独家', isselect: 0},
            {id: 5, text: '降价', isselect: 0},
            {id: 6, text: '有钥匙', isselect: 0}],
          number: ''
        },
        valobj: {}
      }
    },
    components: {
      Esflist: esflist
    },
    beforecreated () {
      this.getType()
    },
    created () {
      var that = this
      if (this.$route.query) {
        this.valobj = this.$route.query
        for (var item in this.valobj) {
          if (item === 'tags') {
            this.valobj[item].split(',').map(function (r, n) {
              that.catdata[item].map(function (c, m) {
                if (c.id === parseInt(r)) {
                  c.isselect = 1
                }
                return c
              })
            })
          } else {
            this.catdata[item].map(function (r, n) {
              if (r.id === parseInt(that.valobj[item])) {
                r.isselect = 1
              }
              return r
            })
          }
        }
      }
      // this.getType()
    },
    methods: {
      getType () {
        this.$http.get('./../../../static/type.json').then((response) => {
          this.catdata = JSON.parse(response.data)
        }, (response) => {
//          /console.log(response)
        })
      },
      setCat () {
        this.catnameval = this.name
        this.catindexval = this.catindex
        this.showModal()
      },
      setCatitem () {
        var that = this
        console.log(this.name)
        console.log(this.id)
        if (this.id === 0) {
          if (this.valobj[this.name]) {
            delete this.valobj[this.name]
          }
          this.catdata[this.name].forEach(function (item) {
            item.isselect = 0
          })
          this.hideModal()
        } else {
          switch (this.name) {
            case 'region':
              this.valobj[this.name] = this.id
              this.catdata[this.name].forEach(function (item) {
                if (item.id === that.id) {
                  item.isselect = 1
                } else {
                  item.isselect = 0
                }
              })
              this.hideModal()
              break
            case 'price':
              this.valobj[this.name] = this.id
              this.catdata[this.name].forEach(function (item) {
                if (item.id === that.id) {
                  item.isselect = 1
                } else {
                  item.isselect = 0
                }
              })
              this.hideModal()
              break
            case 'spec':
              this.valobj[this.name] = this.id
              this.catdata[this.name].forEach(function (item) {
                if (item.id === that.id) {
                  item.isselect = 1
                } else {
                  item.isselect = 0
                }
              })
              this.hideModal()
              break
            case 'tags':
              var _nindex = -1
              var _valarray = []
              if (this.valobj[this.name]) {
                _valarray = this.valobj[this.name].split(',')
                console.log(_valarray)
                _valarray.map(function (r, n) {
                  console.log('r:', r)
                  console.log('that.id:', that.id)
                  if (parseInt(r) === that.id) {
                    _nindex = n
                  }
                })
              }
              console.log(_valarray)
              if (_nindex !== -1) {
                _valarray.splice(_nindex, 1)
              } else {
                _valarray.push(this.id)
              }
              if (_valarray && _valarray.length > 0) {
                this.valobj[this.name] = _valarray.join(',')
              }
              this.catdata[this.name].forEach(function (item) {
                if (item.id === that.id) {
                  item.isselect = item.isselect === 0 ? 1 : 0
                }
              })
              break
            default:
              this.valobj[this.name] = this.id
              this.catdata[this.name].forEach(function (item) {
                if (item.id === that.id) {
                  item.isselect = 1
                } else {
                  item.isselect = 0
                }
              })
              break
          }
        }
      },
      showModal () {
        this.catishide = true
      },
      hideModal (n) {
        console.log('this.catindexval:', this.catindexval)
        this.catindexval = -1
        if (this.catindexval < 3 || n === 'y') {
          this.catishide = false
        }
      },
      setCatitems () {
        console.log(this.valobj)
        this.catindexval = 11
        this.hideModal('y')
      }
    }
    /* watch: {
      selected () {
        if (this.selected >= '0' && !this.catishide) {
          this.catishide = true
        }
      }
    } */
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../style/global";
  .page-part{
    position: fixed;
    top:0;
    width: 100%;
    background-color: white;
  }
  .catmodal{
    position: fixed;
    top:3.1rem;
    bottom:0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,.5);
    z-index: 10000;
  }
  .catcontent{
    background-color: white;
  }
  .is-active{
    height: 100%;
    border-bottom: 3px solid #26a2ff;
    color: #26a2ff;
  }
  .list-content{
    margin-top: 4rem;
  }
  .is-selected{
    color: #26a2ff;
  }
  li p{
    text-align: left;
    padding-left: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin: 0;
  }
  .more{
    .navbar{
      height: 3rem;
      border-right: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
    }
    .is-active{
      border-right: 3px solid #26a2ff;
      border-bottom: 1px solid #ddd;
      color: #26a2ff;
      margin-bottom: -3px;
    }
    .is-active:last-child{
      border-right: 3px solid #26a2ff;
      border-bottom: 1px solid #ddd;
      color: #26a2ff;
    }
    li{
      display:grid;
      border-left: 1px solid #ddd;
    }
  }
</style>
