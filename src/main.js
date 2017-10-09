import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'


Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes     // ---> could also be routes: routes, routes only is used in ES6
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
