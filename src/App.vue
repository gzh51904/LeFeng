
<template>
  <div id="app">
    
    <mt-tabbar >
      <mt-tab-item id="外卖" v-for="item in pages" :key="item.name">
        <img slot="icon" src="./assets/temai.jpg">
        <!-- <i slot="icon" class="el-icon-timer"></i> -->
        <router-link :to="item.path">{{item.title}}</router-link>
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
        pages:[{
          title:'特卖',
          path:'/home',
          name:'Home',
          src:'./assets/temai.jpg'
        },{
          title:'分类',
          path:'/nav',
          name:'Nav'
        },{
          title:'商城',
          path:'/mall',
          name:'Mall'
        },{
          title:'购物车',
          path:'/cart',
          name:'Cart'
        },{
          title:'我的蜂巢',
          path:'/mine',
          name:'Mine'
        }
        ]
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
    a{text-decoration: none;color: rgb(54, 51, 51);}
  </style>
  
