import Vuex from 'vuex';
import Vue from 'vue'
import router from '../router'
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store(
  {
    state: {
      endpoints: {
        'dev': 'http://127.0.0.1:8000/ap/',
        'prod': 'https://pacodasug.org/backend/public/api/'
      },
      loading: false,
      authenticated: false,
      accessToken: null,
      loggingIn: false,
      loginError: null,
      user: null,
    },
    mutations: {
      loadingStart: state => state.loading = true,
      loadingStop: state => state.loading = false,
      loginStart: state => state.loggingIn = true,
      loginStop: (state, errorMessage) => {
        state.loggingIn = false;
        state.loginError = errorMessage;
      },
      setAuthentication: (state, status) => {
        state.authenticated = status;
      },
      setUser: (state, user) => {
        state.user = user;
      },
      updateAccessToken: (state, accessToken) => {
        state.accessToken = accessToken;
      },
      logout: (state) => {
          state.authenticated = false
          state.accessToken = null
          state.user = null
      }
    },
    actions: {
        // updateMails({commit}){
        //   axios.get('http://soft-desk.nl/backendv2/public/api/v1/allmails')
        //   .then(response => {
        //     console.log(response.data)
        //     commit('setMails', response.data);
        //     Vue.$toast('Mails have been updated');
        //   })
        //   .catch(() =>{
        //     Vue.$toast('Network issues')
        //   })
        // },
        updateUsernamePassword({commit}, newUserInfo){
          commit('loadingStart');

          axios.post(`${this.state.endpoints.prod}updateusernamepassword`, {...newUserInfo})
          .then(response => {
            commit('loadingStop');
            let data = response.data

            console.log(data)

            commit('setUser', data.user)

            Vue.$toast(`User information updated!`);
          })
          .catch(err => {
            commit('loadingStop')

            Vue.$toast.error(`Caught error: ${err}`);
          })
        },
        login({commit}, loginCredentials){
            commit('loginStart');
            commit('loadingStart');

            axios.post(`${this.state.endpoints.prod}login`, {...loginCredentials})

            .then(response => {
                commit('loginStop', null)
                commit('loadingStop');

                let data = response.data

                console.log(data)

                if(!data.error){
                  commit('updateAccessToken', data.token);

                  commit('setAuthentication', true);

                  commit('setUser', data.user)
                  
                  router.push('/dashboard');

                  Vue.$toast(`Welcome: ${this.state.user.username}`);
                }
                else{
                  commit('loginStop', data.error)
                  commit('loadingStop')

                  Vue.$toast.error(`${this.state.loginError}`);
                }
            })
            .catch(err => {
                commit('loginStop', err)
                commit('loadingStop')

                commit('updateAccessToken', null)

                Vue.$toast.error(`Caught error: ${err}`);
            })
        },
        logout({commit}){
            commit('logout');
            router.push('/login')
            Vue.$toast.info('Logged out!')
        }
    }
  }
);

export default store;