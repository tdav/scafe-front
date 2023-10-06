import { createRouter, createWebHistory } from 'vue-router'
import Login from './view/login.vue'
import Dashboard from './view/dashboard/Dashboard.vue'
import PosWalkInAbsent from './view/pos/PosWalkInAbsent.vue'
import loginCashier from './view/pos/LoginCashier.vue'
import AddNote from './view/dashboard/AddNote.vue'
import DinningOption from './view/dashboard/DinningOption.vue'
import OrderConfirmation from './view/dashboard/OrderConfirmation.vue'
import Payment from './view/dashboard/Payment.vue'
import SelectTable from './view/dashboard/SelectTable.vue'
import TipAmount from './view/dashboard/TipAmount.vue'
import UpcomingOrders from './view/pos/UpcomingOrders.vue'
import NewReservation from './view/reservation/NewReservation.vue'
import GuestDetail from './view/reservation/GuestDetail.vue'
import List from './view/reservation/List.vue'

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
        path: '/DinningOption',
        name: 'DinningOption',
        Commenend: DinningOption
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
        path: '/WalkInLoginCashier',
        name: 'WalkInLoginCashier',
        Commenend: WalkInLoginCashier
    },
    {
        path: '/NewReservation',
        name: 'NewReservation',
        Component: NewReservation
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
    },

]

const router = createRouter({ history: createWebHistory(), routes })
export default router