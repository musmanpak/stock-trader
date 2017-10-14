import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueResource from 'vue-resource';

import { routes } from './routes'
import  store  from './store/store';


Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://stock-trader-vuejs-26259.firebaseio.com/';

Vue.filter('currency', (value) => {
    return 'Rs. ' + value.toLocaleString();
});

const router = new VueRouter({
    mode: 'history',
    routes     // ---> could also be routes: routes, routes only is used in ES6
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
