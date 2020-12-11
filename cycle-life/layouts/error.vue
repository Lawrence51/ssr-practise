<template>
  <div>
    <h1 v-if="error.statusCode">页面不存在{{ error.message }}</h1>
    <h1 v-lese>应用发送异常</h1>
    <button @click="$router.replace('/')">跳转到首页</button>
  </div>
</template>
<script>
export default {
  props: ["error"],
  created(){
  }
};
</script>