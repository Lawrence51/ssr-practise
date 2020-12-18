export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: process.env.npm_package_name || 'cycle-life',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_name || 'cycle-life' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    middleware: 'auth', // 约定在middleware文件夹下
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'root',
        path: '/index',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },

  // 定义系统默认loading效果，或者指定一loading组件
  //loading:{ color:'#399',height:'3px' },
loading: '@/components/loading.vue',
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'assets/css/transition.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src:'@/plugins/element-ui', // 不支持ssr的插件只会在客户端运行不要给true
      ssr: true,
      // mode:'server'
    },
    '@/plugins/router',
    {
      src:'@/plugins/axios',
      ssr:true//服务端
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [ // nuxt所需的模块要添加到这里
    '@nuxtjs/axios',
    'cookie-universal-nuxt'
  ],

  axios: {
    proxy: true, // 开启axios跨域
  },

  proxy: {
    '/json': {
      target: 'http://localhost:61078', // 代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/json': ''
      },
    },
    '/api': {
      target: 'http://localhost:3001', // 代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      },
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],//打包 element-ui  开头的元素展示出来
  }
}
