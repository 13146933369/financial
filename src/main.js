import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'amfe-flexible'
import axios from 'axios'
import './components/css/common.css'
import './assets/icon/iconfont.css'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
axios.defaults.baseURL = '/apis/';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
