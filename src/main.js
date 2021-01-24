import Vue from 'vue'
import App from './App.vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

//import vue-axios and axios
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);            

//import vue-router
import router from './router';

//import vue-cookies
import VueCookies from 'vue-cookies';
Vue.use(VueCookies);
Vue.use(require('vue-cookies'));


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
