import './bootstrap';
 
import Alpine from 'alpinejs';
 
window.Alpine = Alpine;
 
Alpine.start();
 

import { createApp } from 'vue/dist/vue.esm-bundler.js';
import router from './router'
 
import ClientIndex from './components/clients/ClientIndex.vue';
 
createApp({
    components: {
        ClientIndex
    }
}).use(router).mount('#app')