import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Settings from '../views/Settings.vue'

const routes = [
    {
        path: '/',
        redirect: {
            name: 'login'
        }
    },
    {
        path: '*',
        redirect: {
            name: 'login'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            if(store.state.authenticated){
                next();
            }
            else{
                next('/login');
            }
        }
    },
    {
        path: '/collection',
        name: 'collection',
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            if(store.state.authenticated){
                next();
            }
            else{
                next('/login');
            }
        }
    },
    {
        path: '/loans',
        name: 'loans',
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            if(store.state.authenticated){
                next();
            }
            else{
                next('/login');
            }
        }
    },
    {
        path: '/collaterals',
        name: 'collaterals',
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            if(store.state.authenticated){
                next();
            }
            else{
                next('/login');
            }
        }
    },
    {
        path: '/borrowers',
        name: 'borrowers',
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            if(store.state.authenticated){
                next();
            }
            else{
                next('/login');
            }
        }
    },
    {
        path: '/payrol',
        name: 'payrol',
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            if(store.state.authenticated){
                next();
            }
            else{
                next('/login');
            }
        }
    },
    {
        path: '/expenses',
        name: 'expenses',
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            if(store.state.authenticated){
                next();
            }
            else{
                next('/login');
            }
        }
    },
    {
        path: '/other-income',
        name: 'other Income',
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            if(store.state.authenticated){
                next();
            }
            else{
                next('/login');
            }
        }
    },
    {
        path: '/reports',
        name: 'reports',
        component: Dashboard,
        beforeEnter: (to, from, next) => {
            if(store.state.authenticated){
                next();
            }
            else{
                next('/login');
            }
        }
    },
    {
        path: '/settings',
        name: 'settings',
        component: Settings,
        beforeEnter: (to, from, next) => {
            if(store.state.authenticated){
                next();
            }
            else{
                next('/login');
            }
        }
    },
]

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView();
    }
  });
  
  export default router