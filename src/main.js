import Vue from 'vue';
import { MdCard, MdField, MdButton, MdSnackbar } from 'vue-material/dist/components';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.config.productionTip = false;

Vue.use(MdCard);
Vue.use(MdField);
Vue.use(MdButton);
Vue.use(MdSnackbar);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
