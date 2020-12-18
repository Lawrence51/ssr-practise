// 主模块
export const state = () => ({
  bNav: false,
  bLoading: false
});

// mutation
export const mutaitions = {
  M_UPDATE_NAV(state, payload) {
    state.nNav = payload;
  },
  M_UPDATE_LOADING(state, payload) {
    state.bLoading = payload;
  }
}
//actions
export const actions = {
  nuxtServerInit(store, {app:{$cookies}}) {
    // 初始化东西到store中
    console.log('生命周期nuxtServerInit ')
    let user = $cookies.get('user') ? $cookies.get('user') : {err:2, msg:'未登录',token:''};
    store.commit('user/M_UPDATE_USER',user)
  }
}

// getters
export const getters = {
  getNav(state){
    return state.bNav ? '显示' : '隐藏'
  }
}