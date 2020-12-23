<template>
  <div class="goods">
    <h3>用户</h3>
  </div>
</template>
<script>
export default {
  middleware({ store, route, redirect, params, query, req, res }) {
    //context服务端上下文
    //全局守卫业务
    // store 状态数信息
    // route 一条目标路由信息
    // redirect 强制跳转
    // params, query 路由信息校验参数合理性
    console.log("middleware nuxt.config outside------");
  },
};
</script>
