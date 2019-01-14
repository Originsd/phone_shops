<template>
  <div id="main">
    <div class="main-top">
        <div class="logo">
            <img src="https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/logo.png?max_age=19830212&d=20151105145423" alt="">
        </div>
        <div class="user">
            下载app
        </div>
    </div>
    <div class="show-main">
        <mt-navbar class="page-part" v-model="selected">
            <mt-tab-item id="1" >选项一</mt-tab-item>
            <mt-tab-item id="2" >选项二</mt-tab-item>
            <mt-tab-item id="3" >选项三</mt-tab-item>
        </mt-navbar>
        <div>
         <mt-cell class="page-part" title="当前选中">{{ selected }}</mt-cell>
        </div>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell v-for="n in 20" :key='n' :title="'内容 ' + n"></mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 4" :key='n' :title="'测试 ' + n"></mt-cell>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <mt-cell v-for="n in 6" :key='n' :title="'选项 ' + n"></mt-cell>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
    <mt-tabbar >
        <mt-tab-item>
            <img src="../../assets/phone-img/main-02.png" slot="icon" alt="首页">
            首页
        </mt-tab-item>
        <mt-tab-item>
            <img src="../../assets/phone-img/shop-01.png" slot="icon" alt="商店">
            商店
        </mt-tab-item>
        <mt-tab-item>
            <img src="../../assets/phone-img/order-01.png" slot="icon" alt="订单">
            订单
        </mt-tab-item>
        <mt-tab-item>
            <img src="../../assets/phone-img/mine-01.png" slot="icon" alt="我的">
            我的
        </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'mains',

  data () {
    return {
        selected: '1'
    }
  },

  methods: {}
}
</script>

<style lang='sass' >
@import 'main.scss'
</style>
