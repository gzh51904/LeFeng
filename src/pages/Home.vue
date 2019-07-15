<template>
  <div class="home">
    <!-- ---顶部固定搜索栏--- -->
    <header class="home_header_lz">
      <el-row class="nav_lz">
        <el-col :span="4" class="ico_lz"><el-avatar src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3283535744,1542820073&fm=26&gp=0.jpg"></el-avatar><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="20">
          <el-input
            placeholder="护肤套装"
            v-model="input"
            clearable>
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-col>
      </el-row>
    </header>
    <!-- ————————头部图片—————— -->
    <div class="img_lz">
      <img src="http://b.appsimg.com/upload/maappactadmin/2019/07/10/84/156272836171_750x300_60.jpg" alt="">
    </div>  
    <div>
    <!-- ---按钮导航栏---- -->
    <van-grid :border="false" :column-num="5">
      <van-grid-item v-for="item in nav" :key="item.name">
        <van-image :src="item.src" />
      </van-grid-item>
    </van-grid>
    <!-- 废弃的按钮导航栏 -->
      <!-- <div class="nav2_lz" v-for="item in nav" :key="item.name">
        <el-avatar :src="item.src"></el-avatar><span class="nav3_lz">{{item.name}}</span>
      </div> -->
      <!-- <div class="nav2_lz">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar><span class="nav3_lz">面膜</span>
      </div> -->
      <!-- <div class="nav2_lz">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar><span class="nav3_lz">保湿水乳</span>
      </div>
      <div class="nav2_lz">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar><span class="nav3_lz">眼霜</span>
      </div>
      <div class="nav2_lz">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar><span class="nav3_lz">母婴护肤</span>
      </div>
          <div class="nav2_lz">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar><span class="nav3_lz">洁面卸妆</span>
      </div>
      <div class="nav2_lz">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar><span class="nav3_lz">口红</span>
      </div>
      <div class="nav2_lz">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar><span class="nav3_lz">底妆</span>
      </div>
      <div class="nav2_lz">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar><span class="nav3_lz">洗发护发</span>
      </div>
      <div class="nav2_lz">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar><span class="nav3_lz">身体护理</span>
      </div> -->
      <div class="temai_lz">
        <p>新特卖每天早10晚8更新</p>
      </div>
    </div>
      <!-- -----特卖显示的图片---- -->
      <table>
        <tbody>
          <tr>
            <td rowspan="2" class="wenbiquan_lz"><img src="http://b.appsimg.com/upload/maappactadmin/2019/06/06/73/155980037666_248x450_70.jpg" alt=""></td>
            <td><img src="http://b.appsimg.com/upload/maappactadmin/2019/06/26/19/156153121030_248x225_70.jpg" alt=""></td>
            <td><img src="http://b.appsimg.com/upload/maappactadmin/2019/06/06/132/155979339356_246x225_70.jpg" alt=""></td>
          </tr>
          <tr>
            <td><img src="http://b.appsimg.com/upload/maappactadmin/2019/06/26/193/156153290653_248x225_70.jpg" alt=""></td>
            <td><img src="http://b.appsimg.com/upload/maappactadmin/2019/02/19/43/155054489985_246x225_70.jpg" alt=""></td>
          </tr>
        </tbody>
      </table>
      <!-- 品牌专区的可水平滑动商品列表栏 -->
      <!-- <div class="pinpai_lz">
        <p>品牌专区</p>
        <div>
        <img src="http://b.appsimg.com/upload/hhcapps/2019/06/11/84/hhc1560218746388r9v9_750x330_70.jpg" alt="">
        <div class="zhuanqu_lz">
          <a href="">
            <div>
              <img src="http://a2.vimage1.com/upload/merchandise/pdcvis/107028/2019/0507/179/66221acd-356d-4a32-a0f0-a73dc6a5acc6_420_531.jpg" alt="">
            </div>
            <p>￥111</p>
          </a>
          <a href="">
            <div>
              <img src="http://a2.vimage1.com/upload/merchandise/pdcvis/107028/2019/0430/39/0a2480e9-6f6a-4184-b594-4a9007f30d17_420_531.jpg" alt="">
            </div>
            <p>￥111</p>
          </a>
          <a href="">
            <div>
              <img src="http://a2.vimage1.com/upload/merchandise/pdcvis/107028/2019/0506/74/2c1befcf-56b9-4bb5-9c1f-7a3123ba5d13_420_531.jpg" alt="">
            </div>
            <p>￥111</p>
          </a>
          <a href="">
            <div>
              <img src="http://a2.vimage1.com/upload/merchandise/pdcvis/107028/2019/0522/153/1a2d6464-a9f3-4b78-8fe9-0210e88719f2_420_531.jpg" alt="">
            </div>
            <p>￥111</p>
          </a>
          <a href="">
            <div>
              <img src="http://a2.vimage1.com/upload/merchandise/pdcvis/107028/2019/0506/47/9b6b2c4e-135d-4cca-9a31-3086a1e3125a_420_531.jpg" alt="">
            </div>
            <p>￥111</p>
          </a>
          <a href="">
            <div>
              <img src="http://a2.vimage1.com/upload/merchandise/pdcvis/2019/05/07/121/4b7808bc-e029-4e58-8f0f-3df7556037e7_420_531.jpg" alt="">
            </div>
            <p>￥111</p>
          </a>
          <a href="">
            <div>
              <img src="http://a2.vimage1.com/upload/merchandise/pdcvis/107028/2019/0618/61/47d97ea7-88ef-4e9c-bacd-f3c1aec5a706_420_531.jpg" alt="">
            </div>
            <p>￥111</p>
          </a>
          <a href="">
            <div>
              <img src="http://a2.vimage1.com/upload/merchandise/pdcvis/107028/2019/0506/102/c34a0002-c74e-4d1b-bf65-e57b29d7c060_420_531.jpg" alt="">
            </div>
            <p>￥111</p>
          </a>
          <a href="">
            <div>
              <img src="http://a2.vimage1.com/upload/merchandise/pdcvis/107028/2019/0507/77/2247a53c-c888-4652-a57d-f0a4608d6266_420_531.jpg" alt="">
            </div>
            <p>￥111</p>
          </a>
          <a href="">
            <div>
              <img src="http://a2.vimage1.com/upload/merchandise/pdcvis/107028/2019/0523/174/cb8d82f3-e156-45b6-b954-d93064ef5bfe_420_531.jpg" alt="">
            </div>
            <p>￥111</p>
          </a>
        </div>
        </div>
      </div> -->
      <!-- 更新后的品牌专区的可水平滑动商品列表栏 -->
     <div class="pinpai_lz">
        <p>品牌专区</p>
        <img src="http://b.appsimg.com/upload/hhcapps/2019/06/11/84/hhc1560218746388r9v9_750x330_70.jpg" alt="">
        <div class="zhuanqu_lz">
          <a  v-for="item in pinpai" :key="item.name">
            <div>
              <img :src="item.canpinIMG" alt="">
            </div>
            <p>￥{{item.price}}</p>
          </a>
        </div>
        <img src="http://b.appsimg.com/upload/hhcapps/2019/06/25/194/hhc1561428469528mkzs_1125x495_80.jpg" alt="">
        <div class="zhuanqu_lz">
          <a  v-for="item in pinpai" :key="item.name">
            <div>
              <img :src="item.canpinIMG" alt="">
            </div>
            <p>￥{{item.price}}</p>
          </a>
        </div>
        <img src="http://b.appsimg.com/upload/hhcapps/2019/05/05/64/hhc1557024026605uwju_1125x495_80.jpg" alt="">
        <div class="zhuanqu_lz">
          <a  v-for="item in pinpai" :key="item.name">
            <div>
              <img :src="item.canpinIMG" alt="">
            </div>
            <p>￥{{item.price}}</p>
          </a>
        </div>
        <img src="http://b.appsimg.com/upload/hhcapps/2019/07/08/196/hhc15625717840166vv8_1125x495_80.jpg" alt="">
        <div class="zhuanqu_lz">
          <a  v-for="item in pinpai" :key="item.name">
            <div>
              <img :src="item.canpinIMG" alt="">
            </div>
            <p>￥{{item.price}}</p>
          </a>
        </div>
      </div>
      <ul class="zhuangchang_lz infinite-list" v-infinite-scroll="load">
        <li v-for="i in count" class="infinite-list-item" >
          <div v-for="item in infiniteScroll">
          <a >
            <div>
            <img :src="item.img" alt="">
            </div>
          </a>
          <p>
            <span>{{item.guanggao}}</span>{{item.name}}
          </p>
          </div>
        </li>
      </ul>
  </div>
</template>
<style>
  body{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  .home_header_lz{
    background: #fc1158;
    position:fixed;
    top: 0;
    width: 100%;
    z-index: 1;
  }
  .nav_lz{
    padding: 1%;
  }
  .ico_lz{text-align: center}
  .img_lz img{
    width: 100%;
    margin-top:1.3rem;
  }
  .nav2_lz{
    width:20%;
    display: inline-block;
    text-align:center;
  }
  .nav2_lz .nav3_lz{
    font-size: 0.3rem;
    display: block;
  }
  .temai_lz{
    text-align: center;
    height: 0.7rem;
    line-height: 0.7rem;
    font-size: 0.1rem;
    background: rgb(250, 246, 246);
  }
  .wenbiquan_lz {
    height: 2.5rem;
    width: 33.333%;
  }
  table{
    width: 100%;
  }
  td img{
    width: 100%;
  }
  .pinpai_lz>p{
    text-align: center;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.1rem;
    background: rgb(250, 246, 246);
    color:rgb(228, 114, 114);
    margin: 0;
  }
  .pinpai_lz img{
    width: 100%;
  }
  .zhuanqu_lz{
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    overflow-x: scroll;
  }
  .zhuanqu_lz a{
    width: 2rem;
    display: inline-block;
    vertical-align: top;
    margin: 0 .1rem;
  }
  .zhuanqu_lz>a>p{
    text-align: center;
    white-space: normal;
    padding: .025rem .04rem;
    font-size: .1rem;
    line-height: .01rem;
    margin: .2rem 0 .7rem;
  }
  .zhuangchang_lz>li img{
    width: 100%;
  }
  .zhuangchang_lz p{
    font-size: .125rem;
    color: #4c4c4c;
    line-height: .6rem;
    background-color: #fff;
    padding: 0 .12rem;
    height: .7rem;
    padding-left: .3rem
  }
  .zhuangchang_lz span{
    margin-right: .18rem;
    color: #fb4f89;
    font-size: .135rem;
    line-height: .29rem;
  }
</style>

<script>
import Vue from "vue";
import { Button,Grid,GridItem,Image } from "vant";
Vue.use(Button).use(Grid).use(GridItem).use(Image);
  export default {
    data() {
      return {
        input: '',
        nav:[{
          src:'http://b.appsimg.com/upload/maappactadmin/2018/10/08/143/153897980194_111x300_80.png',
          name:'护肤套装'
        },{
          src:'http://b.appsimg.com/upload/maappactadmin/2018/10/08/84/153898164659_111x300_80.png',
          name:'面膜'
        },{
          src:'http://b.appsimg.com/upload/maappactadmin/2018/10/08/139/153898172341_111x300_80.png',
          name:'保湿水乳'
        },{
          src:'http://b.appsimg.com/upload/maappactadmin/2018/10/08/180/153898178919_111x300_80.png',
          name:'眼霜'
        },{
          src:'http://b.appsimg.com/upload/maappactadmin/2018/10/08/139/153898172341_111x300_80.png',
          name:'母婴护肤'
        },{
          src:'http://b.appsimg.com/upload/maappactadmin/2018/10/08/24/153898236330_111x300_80.png',
          name:'洁面卸妆'
        },{
          src:'http://b.appsimg.com/upload/maappactadmin/2018/10/08/27/153898241993_111x300_80.png',
          name:'口红'
        },{
          src:'http://b.appsimg.com/upload/maappactadmin/2018/10/08/65/153898329114_111x300_80.png',
          name:'底妆'
        },{
          src:'http://b.appsimg.com/upload/maappactadmin/2018/10/08/29/153898336817_111x300_80.png',
          name:'洗发护发'
        },{
          src:'http://b.appsimg.com/upload/maappactadmin/2018/10/08/92/153898341256_111x300_80.png',
          name:'身体护理'
        }],
        pinpai:[{
          pinpaiIMG:'http://b.appsimg.com/upload/hhcapps/2019/06/11/84/hhc1560218746388r9v9_750x330_70.jpg',
          canpinIMG:'http://a2.vimage1.com/upload/merchandise/pdcvis/107028/2019/0507/179/66221acd-356d-4a32-a0f0-a73dc6a5acc6_420_531.jpg',
          price:'268'  
        },{
          canpinIMG:'http://a2.vimage1.com/upload/merchandise/pdcvis/107028/2019/0430/39/0a2480e9-6f6a-4184-b594-4a9007f30d17_420_531.jpg', 
          price:'169'  
        },{
          canpinIMG:'http://a2.vimage1.com/upload/merchandise/pdcvis/107028/2019/0506/74/2c1befcf-56b9-4bb5-9c1f-7a3123ba5d13_420_531.jpg', 
          price:'108'  
        },{
          canpinIMG:'http://a2.vimage1.com/upload/merchandise/pdcvis/107028/2019/0522/153/1a2d6464-a9f3-4b78-8fe9-0210e88719f2_420_531.jpg', 
          price:'168'  
        },{
          canpinIMG:'http://a2.vimage1.com/upload/merchandise/pdcvis/107028/2019/0506/47/9b6b2c4e-135d-4cca-9a31-3086a1e3125a_420_531.jpg', 
          price:'100'  
        },{
          canpinIMG:'http://a2.vimage1.com/upload/merchandise/pdcvis/2019/05/07/121/4b7808bc-e029-4e58-8f0f-3df7556037e7_420_531.jpg', 
          price:'268'  
        },{
          canpinIMG:'http://a2.vimage1.com/upload/merchandise/pdcvis/107028/2019/0618/61/47d97ea7-88ef-4e9c-bacd-f3c1aec5a706_420_531.jpg', 
          price:'169'  
        },{
          canpinIMG:'http://a2.vimage1.com/upload/merchandise/pdcvis/107028/2019/0506/102/c34a0002-c74e-4d1b-bf65-e57b29d7c060_420_531.jpg', 
          price:'283'  
        },{
          canpinIMG:'http://a2.vimage1.com/upload/merchandise/pdcvis/107028/2019/0507/77/2247a53c-c888-4652-a57d-f0a4608d6266_420_531.jpg', 
          price:'462'  
        },{
          canpinIMG:'http://a2.vimage1.com/upload/merchandise/pdcvis/107028/2019/0523/174/cb8d82f3-e156-45b6-b954-d93064ef5bfe_420_531.jpg', 
          price:'268'  
        }],
        infiniteScroll:[{
          img:'http://b.appsimg.com/upload/hhcapps/2019/05/22/154/hhc155850905023228y7_1125x495_80.jpg',
          guanggao:'喷一喷，更补水',
          name:'理肤泉热卖专场'
        },{
          img:'http://b.appsimg.com/upload/hhcapps/2019/06/26/163/hhc1561528501492axfj_1125x495_80.jpg',
          guanggao:'爆款肌底液直降',
          name:'欧莱雅护肤热卖专场'          
        },{
          img:'http://b.appsimg.com/upload/hhcapps/2019/06/24/17/hhc1561370328470lcly_1125x495_80.jpg',
          guanggao:'补水不用慌',
          name:'温碧泉补水专场'          
        },{
          img:'http://b.appsimg.com/upload/hhcapps/2019/06/15/47/hhc1560582126025vm1s_1125x495_80.jpg',
          guanggao:'经典国货',
          name:'百雀羚经典国货专场'          
        },{
          img:'http://b.appsimg.com/upload/hhcapps/2019/06/04/148/hhc1559618938310bkx2_1125x495_80.jpg',
          guanggao:'面膜低至1.5元/片',
          name:'花肌粹护肤专场'          
        },{
          img:'http://b.appsimg.com/upload/hhcapps/2019/06/11/36/hhc1560234501289d10k_1125x495_80.jpg',
          guanggao:'5.2折起',
          name:'珊珂&资生堂洗护联合专场'          
        },{
          img:'http://b.appsimg.com/upload/hhcapps/2019/06/20/177/hhc1561011000208u2ed_1125x495_80.jpg',
          guanggao:'夏日白回来',
          name:'玉兰油热卖专场'          
        },{
          img:'http://b.appsimg.com/upload/hhcapps/2019/06/24/61/hhc15613663272335ozs_1125x495_80.jpg',
          guanggao:'5折起',
          name:'兰芝热卖专场'          
        }],
        count: 0
      
      }
    },
    methods: {
      load () {
        this.count += 2
      }
    }
  }
</script>
