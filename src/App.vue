
<template>
  <div id="app">
    <!-- <mt-tabbar >
      <mt-tab-item  v-for="item in pages" :key="item.name">
        <img slot="icon" src="./assets/temai.jpg"> -->
        <!-- <i slot="icon" class="el-icon-timer"></i> -->
        <!-- <router-link :to="item.path">{{item.title}}</router-link>
      </mt-tab-item>
    </mt-tabbar> -->
    <mt-tabbar class="tabbar_lz">
      <mt-tab-item  v-for="item in pages" :key="item.name" @click.native="goto(item.name)" >
        <!-- <img slot="icon" src="./assets/temai.jpg"> -->
        <i slot="icon" :class="item.ico"></i>
        <span>{{item.title}}</span>
      </mt-tab-item>
    </mt-tabbar>

    <!-- 路由配置匹配后，渲染对应的组件到router-view -->
    <router-view/>
  </div>
</template>

  <script>
  import Vue from 'vue';
  import ElementUI from 'element-ui';
  import 'element-ui/lib/theme-chalk/index.css';
  import Mint from 'mint-ui';
  import 'mint-ui/lib/style.css'
  Vue.use(ElementUI);
  Vue.use(Mint);
 
  
  export default {
    name: 'app',
    data(){
      return {
        navs:[{
          title:'分类',
          content:'分类'
        },{
          title:'品牌',
          content:'品牌'
        }],
        pages:[{
          title:'特卖',
          path:'/home',
          name:'Home',
          ico:'el-icon-timer'
        },{
          title:'分类',
          path:'/nav',
          name:'Nav',
          ico:'el-icon-date'
        },{
          title:'商城',
          path:'/mall',
          name:'Mall',
          ico:'el-icon-shopping-bag-1'
        },{
          title:'购物车',
          path:'/cart',
          name:'Cart',
          ico:'el-icon-shopping-cart-1'
        },{
          title:'我的蜂巢',
          path:'/mine',
          name:'Mine',
          ico:'el-icon-user'
        },
        ]
      }
    },
    // 利用路由传参把整个底部标签变为可点击
    methods:{
      goto(name){
        this.$router.push({name})
      }
    }
  }
  </script>
  <style>
     .mint-tabbar{
      position: fixed;
      bottom: 0;
      z-index: 1;
    } 
    body{
    margin: 0;
    padding: 0;
    width: 100%;
  }
  a{text-decoration: none;color: rgb(54, 51, 51);}
  .tabbar_lz .mint-tab-item-icon>i{
    font-size: .65rem;
    color: rgb(54, 51, 51);
  }
  .tabbar_lz span{
    color: rgb(54, 51, 51);
  }
  </style>

  
