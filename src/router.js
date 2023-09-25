import { createRouter, createWebHistory } from 'vue-router'
import Login from './view/login.vue'
import Dashboard from './view/dashboard/Dashboard.vue'
import Dashboard from './view/pos/login_cashier_orm'

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
    },
    {
        path: '/',
        name: 'login_cashier_orm',
        component: Dashboard
    },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router