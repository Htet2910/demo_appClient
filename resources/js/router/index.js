	
import { createRouter, createWebHistory } from 'vue-router'
 
import ClientIndex from '../components/clients/ClientIndex.vue';
import ClientCreate from '../components/clients/ClientCreate.vue';
import ClientEdit from '../components/clients/ClientEdit.vue';
 
const routes = [
    {
        path: '/dashboard',
        name: 'clients.index',
        component: ClientIndex
    },
    {
        path: '/clients/create',
        name: 'clients.create',
        component: ClientCreate
    },
    {
        path: '/clients/:id/edit',
        name: 'clients.edit',
        component: ClientEdit,
        props: true
    },
];
 
export default createRouter({
    history: createWebHistory(),
    routes
})