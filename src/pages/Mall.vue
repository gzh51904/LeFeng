<template>
  <div class="mall">
    <a href=""
      ><img
        class="img"
        src="http://b.appsimg.com/upload/maappactadmin/2019/07/10/84/156272836171_1125x450_80.jpg"
        alt=""
    /></a>
    <van-grid :border="false" :column-num="4">
      <van-grid-item v-for="item in onelist" :key="item.title">
        <van-image :src="item.src" />
      </van-grid-item>
    </van-grid>
    <span class="span"></span>
    <h3>护肤攻略</h3>
    <van-grid :border="false" :column-num="2">
      <van-grid-item v-for="item in towlist" :key="item.title" border>
        <van-image :src="item.src" />
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import Vue from "vue";
import { Button,Grid,GridItem,Image } from "vant";
Vue.use(Button).use(Grid).use(GridItem).use(Image);
export default {
  data(){
    return{
      onelist:[
        {src:'http://b.appsimg.com/upload/maappactadmin/2018/10/08/143/153897980194_111x300_80.png',title:'保湿'},
        {src:'http://b.appsimg.com/upload/maappactadmin/2018/10/08/84/153898164659_111x300_80.png',title:'洁面'},
        {src:'http://b.appsimg.com/upload/maappactadmin/2018/10/08/139/153898172341_111x300_80.png',title:'彩妆'},
        {src:'http://b.appsimg.com/upload/maappactadmin/2018/10/08/180/153898178919_111x300_80.png',title:'面膜'},
        {src:'http://b.appsimg.com/upload/maappactadmin/2018/09/06/196/153622192174_111x300_80.png',title:'洗护'},
        {src:'http://b.appsimg.com/upload/maappactadmin/2018/10/08/24/153898236330_111x300_80.png',title:'卸妆'},
        {src:'http://b.appsimg.com/upload/maappactadmin/2018/10/08/27/153898241993_111x300_80.png',title:'香氛'},
        {src:'http://b.appsimg.com/upload/maappactadmin/2018/10/08/65/153898329114_111x300_80.png',title:'防嗮'},
      ],
      towlist:[
        {src:'http://b.appsimg.com/upload/maappactadmin/2018/10/08/143/153897980194_111x300_80.png',title:'保湿'},
        {src:'http://b.appsimg.com/upload/maappactadmin/2018/10/08/143/153897980194_111x300_80.png',title:'保湿1'},
        {src:'http://b.appsimg.com/upload/maappactadmin/2018/10/08/143/153897980194_111x300_80.png',title:'保湿2'},
        {src:'http://b.appsimg.com/upload/maappactadmin/2018/10/08/143/153897980194_111x300_80.png',title:'保湿3'},
        {src:'http://b.appsimg.com/upload/maappactadmin/2018/10/08/143/153897980194_111x300_80.png',title:'保湿4'},
        {src:'http://b.appsimg.com/upload/maappactadmin/2018/10/08/143/153897980194_111x300_80.png',title:'保湿5'}
      ]
    }
  }
};
</script>

<style scoped>
.mall .img {
  height: 5rem;
  width: 100%;
}
.mall .van-grid-item__content{
  padding: 0rem;
}
.mall .span{
  height: .3125rem;
  border-top: .1525rem solid rgb(230, 230, 230);
  display: block;
}
.mall h3{
  color: rgb(250, 133, 152);
  font-size: .5375rem;
  text-align: center;
}
</style>


