import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuelidate from 'vuelidate';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';

Vue.config.productionTip = false;
Vue.use(Vuelidate);

new Vue({
   router,
   store,
   render: (h) => h(App),
}).$mount('#app');
