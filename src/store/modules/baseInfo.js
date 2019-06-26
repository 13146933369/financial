export default {
    namespaced: true,
    state: {
        memberInfo : null,
        shopname : '测试店铺'
    },
    mutations: {
        updateMemberInfo(state , user){
            if(user!=null){
                state.memberInfo = {...user}
            }
        },
        updateShopName(state , name){
            if(name!=null){
                state.shopname = name
            }
        }
    },
    actions: {
        updateMemberInfo(context, user){
            context.commit('updateMemberInfo' ,user)
        }
    },
    getters: {
        memberInfo(){
            return state.memberInfo
        }
    }
  };
  