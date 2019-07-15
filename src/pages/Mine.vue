<template>
  <div class="mine">
    <header>
      <div class="header_lz">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <p><span>登录/</span><span>注册</span></p>
      </div>
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">我的优惠券</span>
  </el-menu-item>
    <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">我的花粉</span>
  </el-menu-item>
    <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">我的银行卡</span>
  </el-menu-item>
    <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">我的收藏</span>
  </el-menu-item>
    <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">浏览记录</span>
  </el-menu-item>
    <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">意见反馈</span>
  </el-menu-item>
    <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">联系客服</span>
  </el-menu-item>
    <el-menu-item index="4">
    <i class="el-icon-setting"></i>
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
  .el-avatar{
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
    /* position: relative; */
 
  }
</style>

