<template>
  <div class="mine">
    <header>
      <div class="header_lz">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <p><span>登录/</span><span>注册</span></p>
      </div>  
      <div class="dingdan_lz">
        <span>我的订单</span><span>全部订单<i class="el-icon-arrow-right"></i></span>
      </div>
      <div class="zhifu_lz">
        <div><i class="el-icon-s-finance"></i><span>待支付</span></div>
        <div><i class="el-icon-sold-out"></i><span>待收货</span></div>
        <div><i class="el-icon-s-order"></i><span>待评价</span></div>
        <div><i class="el-icon-sell"></i><span>退货</span></div>
      </div>
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" >
        <el-menu-item index="1">
          <i class="el-icon-s-ticket"></i>
          <span slot="title">我的优惠券</span>
        </el-menu-item>
          <el-menu-item index="2">
          <i class="el-icon-s-custom"></i>
          <span slot="title">我的花粉</span>
        </el-menu-item>
          <el-menu-item index="3">
          <i class="el-icon-bank-card"></i>
          <span slot="title">我的银行卡</span>
        </el-menu-item>
          <el-menu-item index="4">
          <i class="el-icon-star-off
      "></i>
          <span slot="title">我的收藏</span>
        </el-menu-item>
          <el-menu-item index="5">
          <i class="el-icon-view"></i>
          <span slot="title">浏览记录</span>
        </el-menu-item>
          <el-menu-item index="6">
          <i class="el-icon-chat-dot-square"></i>
          <span slot="title">意见反馈</span>
        </el-menu-item>
          <el-menu-item index="7">
          <i class="el-icon-phone-outline
      "></i>
          <span slot="title">联系客服</span>
        </el-menu-item>
          <el-menu-item index="8">
          <i class="el-icon-s-help"></i>
          <span slot="title">关于乐峰</span>
        </el-menu-item>
      </el-menu>
    </header>
  </div>
</template>
<style>
  header>.header_lz{
    height: 2.2rem;
    background:url(../assets/mine.png);
    background-size:100% 100%;
  } 
  header>.header_lz .el-avatar{
    width: 1.5rem;
    height: 1.5rem;
    margin: .4rem 0 0 .5rem;
  }
  header>.header_lz>p{
    display: inline-block;
    font-size:.45rem;
    margin-left:.5rem;
    vertical-align:top
  }
  header>.header_lz>p>span{
    line-height: 2.5rem;
  }
  .mine_ico_lz{
    display: block;
    float:right;
 
  }
  .dingdan_lz{
    height: 1.2rem;
    line-height: 1.2rem;
    border-top: .001rem solid rgb(202, 202, 202);
    border-bottom: .001rem solid rgb(202, 202, 202);
  }
  .dingdan_lz span:first-child {
    font-size: .4rem;
    padding-left: .3rem;
  }
  .dingdan_lz span:last-child{
    float:right;
    color: rgb(180, 178, 178);

  }
  .dingdan_lz span:last-child>i{
    margin-left: .2rem;
  }
  .zhifu_lz>div{
    margin: 0 auto;
    width: 25%;
    text-align:center;
    display: inline-block;
    border-bottom:.001rem solid rgb(202,202,202)
  }
  .zhifu_lz>div>i{
    font-size: .7rem;
    color:rgb(250, 151, 151);
    padding-top: .3rem
  }
  .zhifu_lz>div>span{
    display: block;
    padding-top:.1rem;
    padding-bottom:.3rem;
  }
  .el-menu-vertical-demo{
    margin-bottom: 2rem;
  }
</style>
// <script>
//   export default {
//     data() {
//       return {
//         isCollapse: true
//       };
//     },
//     methods: {
//       handleOpen(key, keyPath) {
//         console.log(key, keyPath);
//       },
//       handleClose(key, keyPath) {
//         console.log(key, keyPath);
//       }
//     }
//   }
// </script>
