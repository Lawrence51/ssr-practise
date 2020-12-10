<template>
  <nav>
    <!-- 跳转 声明式跳转 router-link nuxt路由是约定的 -->
    <nuxt-link to="/index" exact-active-class="app_header--active">首页</nuxt-link>
    <nuxt-link to="goods" active-class="app_header--active">商品</nuxt-link>
    <nuxt-link to="/user" active-class="app_header--active">用户</nuxt-link>
    <nuxt-link to="/reg" active-class="app_header--active">注册</nuxt-link>
    <nuxt-link to="/login">登录</nuxt-link>
  </nav>
</template>
<style scoped>
.app_header--active{
  background: #399;
  color: #fff;
}
</style>