<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@2.10.1/lib/index.js"></script>


<template>
<div id="app">
  <mt-header title="类别">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
<div>全场满99元包邮</div>
<mt-tab-container v-model="active">
  <!-- <mt-tab-container-item id="tab-container1">
    <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="tab-container2">
    <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="tab-container3">
    <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
  </mt-tab-container-item> -->
</mt-tab-container>
  <el-input id="top_fenlei_cw" v-model="input" placeholder="爽肤水"></el-input>

  <mt-navbar v-model="selected">
  <mt-tab-item id="1">分类</mt-tab-item>
  <mt-tab-item id="2">品牌</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<!-- <mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <mt-cell v-for="n in 10" :title="'内容 ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell v-for="n in 4" :title="'测试 ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <mt-cell v-for="n in 6" :title="'选项 ' + n" />
  </mt-tab-container-item>
</mt-tab-container> -->
  <div id="content_cw">

  </div>
</div>

</template>


<script>
  
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
    
  };
import { Navbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';
  import Vue from 'vue';
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  import Mint from 'mint-ui';
  import 'mint-ui/lib/style.css'
  Vue.use(ElementUI);
  Vue.use(Mint);
  Vue.component(Navbar.name, Navbar);
  Vue.component(TabItem.name, TabItem);
  Vue.component(TabContainer.name, TabContainer);
  Vue.component(TabContainerItem.name, TabContainerItem);
</script>

<style>
@import url(../css/fenlei.css);
</style>


