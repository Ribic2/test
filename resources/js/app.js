require('./bootstrap');

window.Vue = require('vue');



import App from './App.vue'

import Store from './App/Service/Vuex'
import Vuetify from './App/Service/Vuetify'
import Router from './App/Service/Router'

// Resets token
Store.dispatch('attempt', localStorage.getItem('authToken'))

const app = new Vue({
    el: '#app',
    store: Store,
    vuetify: Vuetify,
    router: Router,
    render: h => h(App)
});
