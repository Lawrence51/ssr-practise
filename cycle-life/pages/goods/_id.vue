<template>
  <div class="details">
    <h3>详情页</h3>
  </div>
</template>
<script>
export default {
  name:'goods-detail',
  validate({params,query}){
    return typeof params.id === 'number'
  },
  transition:'test'
}
</script>
<style scoped>
/* .test-enter-active,.test-leave-active{
  transition: .5s ease all ;
}
.test-enter, .test-leave-active{
    margin-left: -1000px;
  } */
</style>