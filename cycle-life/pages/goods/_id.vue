<template>
  <div class="details">
    <h3>详情页</h3>
    <div v-for="item in dataList" :key="item.name">
      <div>发布时间:{{item.time | date}}</div>
      <div>发布时间:{{4 | fillzero}}</div>
      <div>发布名称:{{item.name}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name:'goods-detail',
  validate({params,query}){
    return typeof params.id === 'number'
  },
  transition:'test',
  head(){
    return this.$seo('详情1',this.dataList[0].name,[{}])
  },
  asyncData({query,params,$axios}){
    return $axios({
      url:'/api/goods/goods-list',
      method:'post'
    }).then(res=>{
      console.log('res=====', res)
      let list = res.data;

      return {dataList: list};
    })
  }
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