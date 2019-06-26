export default {
  namespaced: true,
  state: {

    ukey : "",
    scene : ""

  },
  mutations: {
    setUkey(state , ukey){
      state.ukey = ukey
      console.log("------------ukey------设置成功：" + ukey)
    },
    setSence(state , scene){
      state.scene = scene
      console.log("------------scene------设置成功：" + scene);
    },
  },
  actions: {},
  getters: {}
};
