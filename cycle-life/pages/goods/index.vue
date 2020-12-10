<template>
  <div class="goods">
    <h3>商品</h3>
    <nuxt-link to="/goods/1?a=1&b=2">商品11</nuxt-link>
    <nuxt-link to="/goods/2?a=1&b=22">商品22</nuxt-link>
    <nuxt-link
      :to="{ name: 'goods-id', params: { id: 3 }, query: { a: 111, b: 222 } }"
      >商品22</nuxt-link
    >
    <nuxt-link to="/goods/comment">商品评价</nuxt-link>
    <nuxt />
  </div>
</template>
