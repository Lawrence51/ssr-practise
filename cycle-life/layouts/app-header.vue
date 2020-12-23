<template>
    <!-- 跳转 声明式跳转 router-link nuxt路由是约定的 -->
  <el-menu
    :default-active="activeIndex"
    @select="handleSelect"
    active-text-color="#399"
    mode="horizontal"
  >
    <el-menu-item
      v-for="(item, index) of navs"
      :key="index"
      :index="index + ''"
      >{{ item.title }}</el-menu-item
    >
  </el-menu>
</template>
<script>
export default {
  data(){
    return {
      activeIndex:"-1",
      navs:[
        {path:'/index',title:'首页'},
        {path:'/goods',title:'商品'},
        {path:'/user',title:'用户'},
      ]
    }
  },
  methods:{
    handleSelect(key,keyPath){
      this.$router.push(this.navs[key].path)
    }
  },
  watch:{
    $route:{
      immediate:true,
      handler(route){
        let find=false;
        this.navs.map((item,index)=>{
          if (item.path=='/') this.$router.push({name:'root'})
          if (route.path==item.path) {
            this.activeIndex=index+'';
            find=true
          }
          if(!find) this.activeIndex="-1";
        })
      }
    }
  }
}
</script>
<style scoped>
/* .app_header--active {
  background: #399;
  color: #fff;
} */
</style>