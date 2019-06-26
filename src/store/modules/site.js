export default {
    namespaced: true,
    state: {
      //页面显示隐藏
        //siteCfhoose 选择地址
        //site  编辑地址
        //topDialog 提交订单
      siteState: '',
      //选择地址传递给提交订单
      compileSite: '',
    },
    mutations: {
      siteState(state, ret){
          state.siteState = ret;
      },
      compileSite(state, ret){
        state.compileSite = ret;
      }
    },
    actions: {},
    getters: {}
  };
  