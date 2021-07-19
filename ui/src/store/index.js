import Vuex from 'vuex';
import Vue from 'vue'
import router from '../router'
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store(
  {
    state: {
      authenticated: false,
      accessToken: null,
      loggingIn: false,
      loginError: null,
      username: null,
      fullname: null,
      email: null,
      phone: null,
      password: null,
      accessLevel: null,
    },
    mutations: {
      loginStart: state => state.loggingIn = true,
      loginStop: (state, errorMessage) => {
        state.loggingIn = false;
        state.loginError = errorMessage;
      },
      setAuthentication: (state, status) => {
        state.authenticated = status;
      },
      setUsername: (state, name) => {
        state.username = name;
      },
      setFullname: (state, fullname) => {
        state.fullname = fullname;
      },
      setEmail: (state, email) => {
        state.email = email;
      },
      setPhone: (state, phone) => {
        state.phone = phone;
      },
      setPassword: (state, password) => {
        state.password = password;
      },
      setAccessLevel: (state, level) => {
        state.accessLevel = level;
      },
      updateAccessToken: (state, accessToken) => {
        state.accessToken = accessToken;
      },
      logout: (state) => {
          state.authenticated = false
          state.accessToken = null
          state.username = null
          state.accessLevel = null
      }
    },
    actions: {
        login({commit}, loginCredentials){
            commit('loginStart');

            axios.post('http://127.0.0.1:8000/api/login', {...loginCredentials})

            .then(response => {
                commit('loginStop', null)

                let data = response.data

                if(!data.error){
                  commit('updateAccessToken', data.token);

                  commit('setAuthentication', true);

                  commit('setUsername', data.username)
                  commit('setFullname', data.fullname)
                  commit('setPassword', data.password)
                  commit('setEmail', data.email)
                  commit('setPhone', data.phone)

                  commit('setAccessLevel', data.level)
                  
                  router.push('/dashboard');

                  Vue.$toast(`Welcome: ${this.state.username}`);
                }
                else{
                  commit('loginStop', data.error)

                  Vue.$toast.error(`${this.state.error}`);
                }
            })
            .catch(err => {
                commit('loginStop', err)

                commit('updateAccessToken', null)

                Vue.$toast.error(`${err}`);
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