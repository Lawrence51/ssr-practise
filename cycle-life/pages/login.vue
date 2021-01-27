<template>
  <div class="login">
    <h3>登录</h3>
    <el-divider></el-divider>
    <input v-foucs1="fff" class="direct-class" />
    <el-input v-model="username" placeholder="请输入" class="mb">
      <template slot="prepend">用户</template>
    </el-input>
    <el-input type="password" v-model="password" placeholder="请输入" class="mb">
      <template slot="prepend">密码</template>
    </el-input>
    <div class="error">{{message}}</div>
    <el-button type="primary" @click="login">登录</el-button>
    <el-button @click="$router.push('/reg')">注册</el-button>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      message: "",
      username: "viccccc",
      password: "333333",
      fff:'~~~~'
    };
  },
  methods: {
    login() {
      this.$axios({
        url: "/api/users/login",
        method: "post",
        data: {
          username: this.username,
          password: this.password,
        },
      })
        .then((res) => {
          if (res.data.err == 0) {
            this.$cookies.set("user", res.data); // 设置cookie
            this.$store.commit("user/M_UPDATE_USER", res.data);
            if (
              !this.$route.query.path ||
              /login|reg/.test(this.$route.query.path) // 地址无效或者在登录注册页 跳转到用户页面
            ) {
              this.$router.replace("/user");
            } else {
              this.$router.replace(this.$route.query.path);
            }
          } else {
            this.message = res.data.msg;
          }
        })
        .catch((err) => {});
    },
  },
  mounted(){
    this.$show();
  }
};
</script>

<style scoped>
.login{
  width:35%;
  height:auto;
  position: absolute;
  left:50%;top:50%;
  margin-left:-17%;
  transform: translateY(-50%)
}
.mb{
  margin-bottom: 20px;
}
.error{
  color:red
}
.direct-class{
  /* padding-left: 12px; */
}
</style>