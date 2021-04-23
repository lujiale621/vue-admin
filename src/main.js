// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/iconfont/iconfont.css'
import './assets/iconfont2/iconfont.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$target = "http://localhost:3001/"; // 本地后端地址
import Axios from 'axios';
Vue.prototype.$axios = Axios;
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(ViewUI);
Vue.use(Vant);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
