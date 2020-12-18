<template>
  <div class="goods">
    <h3>登录</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  methods: {
    logon() {
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
            this.$cookies.set("user", res.data);
            if (
              !this.$route.query.path ||
              /login|reg/.test(this.$route.query.path)
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
  mounted() {
    console.log(this.$axios, "======");
  },
};
</script>

<style>
</style>