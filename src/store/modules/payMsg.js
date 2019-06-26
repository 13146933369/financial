export default {
  namespaced: true,
  state: {
    //支付信息
    pay: {},
      //页面显示隐藏
      //siteCfhoose 选择地址
      //site  编辑地址
      //topDialog 提交订单
      //price 支付方式
      showState: "",
      // 购物车组件浮层
      popshow:false,
  },
  mutations: {
    //显示购物车页面各种弹窗
    showState(state, ret) {
      state.showState = ret;
    },
    //更改某个属性
    pay(state, obj) {
      state.pay[obj.key] = obj.value;
      console.log(state, obj);
    },
    //置空
    payEmpty(state, attribute) {
      state.pay = attribute;
    },
    //显示隐藏购物车组件浮层
    popShowSet(state,ret){
      state.popshow = ret;
    }
  },
  actions: {},
  getters: {}
};
