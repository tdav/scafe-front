import { createRouter, createWebHistory } from 'vue-router'
import Login from './view/login.vue'
import List from './view/reservation/List.vue'
import Order from './view/Order/order_list.vue'
import History from './view/History/list.vue'
import Bill from './view/Bill/list.vue'
import FoodList from './view/home/FoodList.vue'

//new
import AddNote from './view/dashboard/AddNote.vue'
import Dashboard from './view/dashboard/Dashboard.vue'
import OrderConfirmation from './view/dashboard/OrderConfirmation.vue'
import Payment from './view/dashboard/Payment.vue'
import SelectTable from './view/dashboard/SelectTable.vue'
import afitsand from './view/dashboard/afitsand.vue'
import ConfirmOrder from './view/Order/ConfirmOrder.vue'
import TipAmount from './view/dashboard/TipAmount.vue'
import UpcomingOrders from './view/pos/UpcomingOrders.vue'
import Reservation_list from './view/dashboard/Reservation_list.vue'
import Pos_new_reservation from './view/dashboard/Pos_new_reservation.vue'
import POS_walk_in_login_cashier from './view/dashboard/POS_walk_in_login_cashier.vue'
import pos_walk_in_absent from './view/reservation/pos_walk_in_absent.vue'
import Dashboard_add_note from './view/dashboard/Dashboard_add_note.vue'

import PromoCodeType from './view/spr/promoCodeType.vue'
import region from './view/new/region.vue'
import Appversion from './view/spr/Appversion.vue'
import SmsStatus from './view/dashboard/SmsStatus.vue'

///new

const routes = [
    {
        path: '/Appversion',
        name: 'Appversion',
        component: Appversion
    }, 

    {
        path: '/promoCodeType',
        name: 'promoCodeType',
        component: PromoCodeType
    }, 
    {
        path: '/region',
        name: 'region',
        component: region
    }, 
    {
        path: '/SmsStatus',
        name: 'SmsStatus',
        component: SmsStatus
    },

   
    {
        path: '/Reservation_list',
        name: 'Reservation_list',
        component: Reservation_list
    }, 

    {
        path: '/Pos_new_reservation',
        name: 'Pos_new_reservation',
        component: Pos_new_reservation
    }, 

    {
        path: '/POS_walk_in_login_cashier',
        name: 'POS_walk_in_login_cashier',
        component: POS_walk_in_login_cashier
    }, 

    {
        path: '/TipAmount',
        name: 'TipAmount',
        component: TipAmount
    }, 

    {
        path: '/pos_walk_in_absent',
        name: 'pos_walk_in_absent',
        component: pos_walk_in_absent
    }, 

    {
        path: '/Dashboard_add_note',
        name: 'Dashboard_add_note',
        component: Dashboard_add_note
    }, 

    {
        path: '/afitsand',
        name: 'afitsand',
        component: afitsand
    }, 

    {
        path: '/ConfirmOrder',
        name: 'ConfirmOrder',
        component: ConfirmOrder
    }, 

    {
        path: '/TipAmount',
        name: 'TipAmount',
        component: TipAmount
    }, 


    {
        path: '/UpcomingOrders',
        name: 'UpcomingOrders',
        component: UpcomingOrders
    }, 

    {
        path: '/AddNote',
        name: 'AddNote',
        component: AddNote
    }, 
    {
        path: '/Dashboard',
        name: 'Dashboard',
        component: Dashboard
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
    ///new



    {
        path: '/',
        name: 'Login',
        component: Login
    }, 
    
    {
        path: '/home',
        name: 'FoodList',
        component: FoodList
    },        

    {
        path: '/order',
        name: 'Order',
        component: Order
    },

    {
        path: '/history',
        name: 'History',
        component: History
    },

    {
        path:'/Bill',
        name:  'Bill',
        component: Bill
    },

    {
        path: '/List',
        name: 'List',
        component: List
    },

]

const router = createRouter({ history: createWebHistory(), routes })
export default router