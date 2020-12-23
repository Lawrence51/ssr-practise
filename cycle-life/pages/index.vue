<template>
  <div class="container">
    <h3>首页</h3>
    <p>{{ a }}</p>
    <h4>同域</h4>
    <p>{{ title }}</p>
    <h4>不同域</h4>
    <p>{{ data2 }}</p>
    <el-button @click="getStore">操作</el-button>
    <div>index getters:{{getNav}}</div>
    <div>index state:{{bNav}}</div>
    <div>user state: {{data}}</div>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState, mapMutations} from 'vuex'
export default {
  middleware: "auth",
  data() {
    return { a: 1 };
  },
  validate({ params, query }) {
    return true;
  },

  // 读取服务端数据
  async asyncData(parmas) {
    const { $axios } = parmas;
    let res = await $axios({ url: "/data/list.json" });
    // let res2 = await $axios({ url: "/json/data/list.json" }); //其他项目的静态文件
    let res3 = await $axios({ url: "/api/nuxttest?a=2" }); // 开启了本地的node服务用来做接口查询
    return {
      title: res.data.title,
      data2: res3.data.title,
    };
  },

  async fetch({$axios,store,error}) { // 调用时没有加载组件
    let res3 = await $axios({ url: "/api/nuxttest" }); // 开启了本地的node服务用来做接口查询
    res3.data && store.commit('home/M_UPDATE_HOME',{err:0,data:res3.data})
  },
  // created() {
  //   console.log("created server");
  // },
  // beforeCreate(){
  //   console.log("before create server", this.$axios,'===============');
  // },

  //csr
  // beforeMount(){},
  // mounted(){ console.log('mounted server', window) },
  // beforeMount(){},
  // updated(){ console.log('updated server') },
  // beforeDestroy(){ console.log('updated beforeDestroy') },
  // destroyed(){ console.log('updated destroyed') },
  methods: {
    getStore() {
      //发出actions请求给user模块
      // this.$store.dispatch("user/A_UPDATE_USER", {
      //   err: 0,
      //   msg: "登录成功",
      //   token: "xxx",
      //   data: { title: "user模块的actions提交过来的数据" },
      // });
      this.A_UPDATE_USER({err:0,msg:'登录成功',token:'假token',data:{title:"456"}})
      //发出mutation请求user模块
      // this.$store.commit('user/M_UPDATE_USER',{
      //   err: 0,
      //   msg: "登录成功",
      //   token: "xxx",
      //   data: { title: "user模块的actions提交过来的数据" },
      // })
      // this.M_UPDATE_USER({err:0,msg:'登录成功',token:'假token',data:{title:"456"}})
    },
    ...mapActions('user',['A_UPDATE_USER']),
    ...mapMutations('user',['M_UPDATE_USER'])
  },
  computed:{
    ...mapGetters(['getNav']),
    ...mapState(['bNav']),
    ...mapState('user',['data'])
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
