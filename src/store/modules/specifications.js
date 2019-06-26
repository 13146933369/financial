export default {
    namespaced: true,
    state: {
      specifications: [],
      price:0,
      priceUuid:'',
    },
    mutations: {
      specifications(state, ret){
          state.specifications = ret;
      },
      price(state,ret){
          state.price = ret;
      },
      priceUuid(state,ret){
        state.priceUuid = ret;
      }
    },
    actions: {},
    getters: {}
  };
  