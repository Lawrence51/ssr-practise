export default function ({ $axios, redirect, route, store }) {
  // 基本配置
  $axios.defaults.timeout = 10000;

  //请求拦截
  $axios.onRequest(config => {
    config.headers.token = 'xxx'; // 配置token
    return config;
  })
  //响应拦截
  $axios.onResponse(res => {
    if (res.data.err === 2 && route.fullPath !== '/login') { // 路由拦截
      redirect('/login?path=' + route.fullPath)
    }

    return res;
  })
  //错误处理
  $axios.onError(error=>{
    // 处理
    return error;
  })
}