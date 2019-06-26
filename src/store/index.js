import Vue from "vue";
import Vuex from "vuex";
import productCenter from "./modules/productCenter.js" 
import token from "./modules/token.js" 
import site from "./modules/site.js" 
import specifications from "./modules/specifications.js" 
import paymsg from "./modules/payMsg.js" 
import baseInfo from "./modules/baseInfo.js"
Vue.use(Vuex);


export default new Vuex.Store({
  modules :{
    token,
    productCenter,
    site,
    specifications,
    paymsg,
    baseInfo
  }
  
});
