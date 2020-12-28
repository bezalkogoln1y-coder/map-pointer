import Axios from 'axios';

Axios.defaults.baseURL = process.env.VUE_APP_POINTER_BASE_URL;

const authData = {
   email: 'apiTest1Kamaz@kamaz.ru',
   password: 'Test_123',
};

export default {
   state: {
      layout: '',
      pointers: [],
      auth: false,
   },
   actions: {
      /**
       *
       * @param {String} layout Устанавливаем layout
       */
      setLayout({ commit }, layout) {
         commit('updateLayout', layout);
      },

      fetchAuth({ commit }) {
         Axios.defaults.baseURL = process.env.VUE_APP_POINTER_AUTH_URL;

         commit('updateAuth', false);
      },

      fetchPointers({ commit }, pointers) {
         const _pointers = [];
         for (let key in pointers) {
            _pointers.push({ key, ...pointers[key] });
         }
         commit('updatePointers', _pointers);
      },

      Logout({ commit }) {
         commit('updateAuth', false);
      },

      Login({ commit }, data) {
         commit(
            'updateAuth',
            data.email === authData.email && data.password === authData.password
         );
      },
   },
   mutations: {
      updateLayout(state, layout) {
         state.layout = layout;
      },
      updatePointers(state, pointers) {
         state.pointers = pointers;
      },
      updateAuth(state, auth) {
         state.auth = auth;
      },
   },
   getters: {
      Layout(state) {
         return state.layout;
      },
      Pointers(state) {
         return state.pointers;
      },
      Auth(state) {
         return state.auth;
      },
   },
};
