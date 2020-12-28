import Axios from 'axios';
Axios.defaults.validateStatus = () => true;

/* const authData = {
   email: 'apiTest1Kamaz@kamaz.ru',
   password: 'Test_123',
}; */

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

      async fetchAuth({ commit }) {
         if (
            localStorage.getItem('jwt') &&
            localStorage.getItem('jwt').trim().length
         ) {
            commit('updateAuth', true);
         }

         commit('updateAuth', false);
      },

      async fetchPointers({ commit }, data) {
         const _pointers = [];

         Axios.defaults.baseURL = process.env.VUE_APP_POINTER_BASE_URL;

         const res = await Axios.post('/Itis/position', data, {
            headers: {
               Authorization: `Bearer ${localStorage.getItem('jwt_token')}`,
            },
         });

         for (let key in res.data) {
            res.data[key].Lat = Number(res.data[key].Lat.replace(',', '.'));
            res.data[key].Lon = Number(res.data[key].Lon.replace(',', '.'));
            _pointers.push({ key, ...res.data[key] });
         }
         commit('updatePointers', _pointers);
      },

      async Logout({ commit }) {
         Axios.defaults.baseURL = process.env.VUE_APP_POINTER_AUTH_URL;

         await Axios.post('/tokens/delete', {
            sKey: localStorage.getItem('jwt_token'),
         });

         commit('updateAuth', false);
      },

      async Login({ commit }, data) {
         Axios.defaults.baseURL = process.env.VUE_APP_POINTER_AUTH_URL;

         const res = await Axios.post('/auth', {
            username: data.email,
            password: data.password,
         });

         if (res.status === 200) {
            commit('updateAuth', res.data);
            return true;
         }

         commit('updateAuth', false);
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
         if (auth) {
            localStorage.setItem('jwt_token', auth);
            state.auth = true;

            return true;
         }

         localStorage.removeItem('jwt_token');
         state.auth = false;
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
