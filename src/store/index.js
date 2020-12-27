import Vue from 'vue';
import Vuex from 'vuex';

import pointer from './pointer';

Vue.use(Vuex);

export default new Vuex.Store({
   modules: {
      pointer,
   },
});
