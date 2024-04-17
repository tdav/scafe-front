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
import DinningOption from './view/dashboard/DinningOption.vue'
import OrderConfirmation from './view/dashboard/OrderConfirmation.vue'
import Payment from './view/dashboard/Payment.vue'
import SelectTable from './view/dashboard/SelectTable.vue'
import afitsand from './view/dashboard/afitsand.vue'
import pos_walk_in_absent from './view/reservation/pos_walk_in_absent.vue'

import UpcomingOrders from './view/pos/UpcomingOrders.vue'
///new

const routes = [
    //new

    {
        path: '/pos_walk_in_absent',
        name: 'pos_walk_in_absent',
        component: pos_walk_in_absent
    }, 

    {
        path: '/afitsand',
        name: 'afitsand',
        component: afitsand
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
        path: '/DinningOption.vue',
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