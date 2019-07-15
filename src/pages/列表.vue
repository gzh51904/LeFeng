<script>
    import { Header } from 'mint-ui';
    Vue.component(Header.name, Header);
</script>
<template>
    <mt-header fixed title="固定在顶部"></mt-header>
    <mt-header title="类别">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
</template>
