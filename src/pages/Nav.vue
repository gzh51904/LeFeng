<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@2.10.1/lib/index.js"></script>


<template>
<div id="app">
  <el-input id="top_fenlei_cw" v-model="input" placeholder="爽肤水"></el-input>

  <ul id="nav_fenlei_cw">
    <li v-for="item in navs"><a href="#"></a></li>   
  </ul>
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

</script>
 
<style>
@import url(../css/fenlei.css);
</style>


