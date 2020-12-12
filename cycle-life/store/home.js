export const state = () => ({
  err: 1,
  data: {}
})

// 这里的更改只针对home自己
export const mutations = {
  M_UPDATE_HOME(state,payload){
    state.err=payload.err;
    state.data=payload.data;
  }
}

// action
export const actions = {
  A_UPDATE_HOME({commit,state},payload){
    // 异步处理
    commit('M_UPDATE_HOME',{err:0,data:{title:"home模块 action所传递的数据"}})
  }
}
