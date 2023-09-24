import { createRouter, createWebHistory } from 'vue-router'
import Login from './view/login.vue'
import Dashboard from './view/dashboard/Dashboard.vue'


const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/Dashboard',
        name: 'Dashboard',
        component: Dashboard
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router