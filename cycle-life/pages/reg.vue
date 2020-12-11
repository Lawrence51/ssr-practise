<template>
  <div class="goods">
      <h3>注册</h3>
  </div>
</template>
<script>
export default {
  // 局部路由跳转守卫
  beforeRouteLeave(to,from,next){
    let bl = window.confirm('是否要离开');
    next(bl);
  }
}
</script>