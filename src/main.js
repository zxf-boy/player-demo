import Vue from 'vue'
import App from './App.vue'
import Axios from "axios";
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$axios = Axios
Vue.prototype.$message = Element.Message
Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: 'small'
})

export default new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount("#app")
