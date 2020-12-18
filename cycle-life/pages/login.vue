<template>
  <div class="goods">
    <h3>登录</h3>
    <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      username: "viccccc",
      password: "333333",
    };
  },
  methods: {
    login() {
      this.$axios({
        url: "/api/login",
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
};
</script>

<style>
</style>