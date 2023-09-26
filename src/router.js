import { createRouter, createWebHistory } from 'vue-router'
import Login from './view/login.vue'
import Dashboard from './view/dashboard/Dashboard.vue'
import AddNote from './view/dashboard/add _note.vue'
import AdditonalOrder from './view/dashboard/additonal_order.vue'
import DinningOption from './view/dashboard/dinning_option.vue'
import OrderConfirmation from './view/dashboard/order_confirmation.vue'
import Payment from './view/dashboard/payment.vue'
import SelectTable from './view/dashboard/select_table.vue'
import TipAmount from './view/dashboard/tip_amount.vue'
import LoginCashierOrm from './view/pos/login_cashier_orm.vue'
import LoginCashier from './view/pos/login_cashier.vue'
import UpcomingOrders from './view/pos/upcoming_orders.vue'
import WalkInAbsent from './view/pos/walk_in_absent.vue'
import WalkInLoginCashier from './view/pos/walk_in_login_cashier.vue'

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
        path: '/AddNote',
        name: 'AddNote',
        component: AddNote
    },   
    {
        path: '/AdditonalOrder',
        name: 'AdditonalOrder',
        component: AdditonalOrder
    },
    {
        path: '/DinningOption',
        name: 'DinningOption',
        component: DinningOption
    },
    {
        path: '/OrderConfirmation',
        name: 'OrderConfirmation',
        component: OrderConfirmation
    },
    {
        path: '/Payment',
        name: 'Payment',
        component: Payment
    },
    {
        path: '/SelectTable',
        name: 'SelectTable',
        component: SelectTable
    },
    {
        path: '/TipAmount',
        name: 'TipAmount',
        component: TipAmount
    },
    {
        path: '/LoginCashierOrm',
        name: 'LoginCashierOrm',
        component: LoginCashierOrm
    },
    {
        path: '/LoginCashier',
        name: 'LoginCashier',
        component: LoginCashier
    },
    {
        path: '/UpcomingOrders',
        name: 'UpcomingOrders',
        component: UpcomingOrders
    },
    {
        path: '/WalkInAbsent',
        name: 'WalkInAbsent',
        component: WalkInAbsent
    },
    {
        path: '/WalkInLoginCashier',
        name: 'WalkInLoginCashier',
        component: WalkInLoginCashier
    },
]

const router = createRouter({ history: createWebHistory(), routes })
export default router