import { createRouter, createWebHistory } from 'vue-router'
import Login from './view/login.vue'
import Dashboard from './view/dashboard/Dashboard.vue'
import PosWalkInAbsent from './view/pos/walk_in_absent.vue'
import WalkInLognCashier from './view/pos/login_cashier_orm.vue'
import loginCashier from './view/pos/login_cashier.vue'
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
        path: '/PosWalkInAbsent',
        name: 'PosWalkInAbsent',
        Commenend: PosWalkInAbsent
    },
    {
        path: '/WalkInLognCashier',
        name: 'WalkInLognCashier',
        Commenend: WalkInLognCashier
    },

    {
        path: '/loginCashier',
        name: 'loginCashier',
        Commenend: loginCashier
    },
    {
        path: '/AddNote',
        name: 'AddNote',
        Commenend: AddNote
    },
    {
        path: '/AdditonalOrder',
        name: 'AdditonalOrder',
        Commenend: AdditonalOrder
    },
    {
        path: '/DinningOption',
        name: 'DinningOption',
        Commenend: DinningOption
    },
    {
        path: '/OrderConfirmation',
        name: 'OrderConfirmation',
        Commenend: WalkInLognCashier
    },
    {
        path: '/OrderConfirmation',
        name: 'OrderConfirmation',
        Commenend: OrderConfirmation
    },
    {
        path: '/Payment',
        name: 'Payment',
        Commenend: Payment
    },
    {
        path: '/SelectTable',
        name: 'SelectTable',
        Commenend: SelectTable
    },
    {
        path: '/TipAmount',
        name: 'TipAmount',
        Commenend: TipAmount
    },
    {
        path: '/LoginCashierOrm',
        name: 'LoginCashierOrm',
        Commenend: LoginCashierOrm
    },
    {
        path: '/LoginCashier',
        name: 'LoginCashier',
        Commenend: LoginCashier
    },
    {
        path: '/UpcomingOrders',
        name: 'UpcomingOrders',
        Commenend: UpcomingOrders
    },
    {
        path: '/WalkInAbsent',
        name: 'WalkInAbsent',
        Commenend: WalkInAbsent
    },
    {
        path: '/WalkInLoginCashier',
        name: 'WalkInLoginCashier',
        Commenend: WalkInLoginCashier
    },

]

const router = createRouter({ history: createWebHistory(), routes })
export default router