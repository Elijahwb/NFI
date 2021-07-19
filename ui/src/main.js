import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import Toast from "vue-toastification";
import axios from 'axios'
import VueAxios from 'vue-axios'
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import router from './router'
import store from './store'

Vue.use(BootstrapVue);
Vue.use(Toast,{
  toastClassName: "custom-toast",
  closeOnClick: true,
  timeout: 3000,
});
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
