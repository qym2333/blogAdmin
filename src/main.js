import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/mavon-editor'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/global.css'
import axios from 'axios'
import moment from 'moment'
import store from './store/index'
// 引入axios
Vue.prototype.$axios = axios
// 引入moment
moment.locale('zh-cn') // 设置语言 或 moment.lang('zh-cn');
Vue.prototype.$moment = moment // 赋值使用
Vue.config.productionTip = false
// axios配置
axios.defaults.baseURL = 'http://127.0.0.1:3000/admin/api/'
axios.interceptors.request.use(config => {
  config.headers.Authorization = 'Bearer ' + sessionStorage.getItem('token')
  return config
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
