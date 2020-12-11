<template>
  <div class="container">
    <h3>首页</h3>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return { a: 1 };
  },
  validate({ params, query }) {
    return true;
  },

  // 读取服务端数据
  asyncData(context) {
    console.log("asyncData");
    return {
      b: 2,
    };
  },

  // 度无数据， vuex
  fetch({ store }) {
    console.log("fetch");
  },
  created(){
    console.log('created server')
  },

  //csr
  beforeMount(){},
  mounted(){ console.log('mounted server', window) },
  beforeMount(){},
  updated(){ console.log('updated server') },
  beforeDestroy(){ console.log('updated beforeDestroy') },
  destroyed(){ console.log('updated destroyed') },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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
