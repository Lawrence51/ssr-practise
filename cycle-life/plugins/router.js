export default({app,redirect})=>{
    // console.log('插件')
    app.router.beforeEach((to,from,next)=>{
        // 全局前置的守卫， 插件
        //next(true) next('/login')
        // console.log('插件配置 全局前置', to)
        // if (to.name =='login' || to.name=='reg') {
        //     next()
        // }else{
        //     redirect({name:'login'})
        // }
        next();
    })
    app.router.afterEach((to,from)=>{
        // console.log('插件全局后置守卫',to)
    })
}