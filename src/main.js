import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import 'vant/lib/index.css';
import 'lib-flexible/flexible';
import Vant from 'vant';

var VueTouch = require('vue-touch')

Vue.use(Vant);
Vue.use(VueTouch, {name: 'v-touch'});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
