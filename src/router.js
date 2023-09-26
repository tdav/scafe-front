import { createRouter, createWebHistory } from 'vue-router'
import Login from './view/login.vue'
import Dashboard from './view/dashboard/Dashboard.vue'
import LoginCashierOrm from './view/pos/login_cashier_orm.vue'
import GuestDetail from './view/reservation/guest_detail.vue'
import List from './view/reservation/list.vue'

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
        path: '/LoginCashierOrm',
        name:'LoginCashierOrm',
        component: LoginCashierOrm 
    },
    {
        path: '/GuestDetail',
        name: 'GuestDetail',
        component: GuestDetail
    },
    {
        path: '/List',
        name: 'List',
        component: List
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router