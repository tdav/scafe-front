<template>
    <div v-if="TokenService.isAutorize()" style="max-height: 100vh;">
        <header v-if="isShowNavBar" class="p-3 bg-dark text-white fixed-top bg-dark ">
            <div class="container-fluid ">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start ">
                    <a href="/" class="col-1 d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img src="../assets/images/nav/Nav_Vector.png" style="height: 40px; width: 40px;" alt="">
                    </a>

                    <ul class="nav col-4  mb-2 justify-content-start  ">
                        <div class="mt-2" style="width: 499px; float: right;">
                            <img src="../public/assets/images/nav/Nav_home.png" class="me-1" alt="">
                            <router-link class="router-link me-3 btn-1 text-white " to="/home">Home</router-link>
                            <img src="../assets/images/nav/Nav_note.png" class="me-1" alt="">
                            <router-link class="router-link me-3 btn-1 text-white " to="/order">Order</router-link>
                            <img src="../assets/images/nav/Nav_clock.png" class="me-1" alt="">
                            <router-link class="router-link me-3 btn-1 text-white " to="/History">History</router-link>
                            <img src="../assets/images/nav/Nav_receipt.png" class="me-1" alt="">
                            <router-link class="router-link me-3 btn-1 text-white " to="/Bill">Bill</router-link>
                        </div>
                    </ul>

                    <form class="col-2 justify-content-center">
                        <input style="width: 300px;" type="search" class="form-control fc-dark" placeholder="Излаш..."
                            aria-label="Search">
                    </form>



                    <div class="col-5 text-end">
                        <div v-if="TokenService.isAutorize()">
                            <div class="dropdown d-inline-block">
                                <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle"
                                    id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="/public/assets/images/person.jpg" alt="mdo" width="32" height="32"
                                        class="rounded-circle">
                                </a>
                                <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1"
                                    style="overflow-x: auto; max-height: 300px;">
                                    <li><a class="dropdown-item" href="#" @click="openBillModal">Bill</a></li>
                                    <li><a class="dropdown-item" href="#" @click="openAddNoteModal">AddNote</a></li>
                                    <li><a class="dropdown-item" href="#" @click="openDashboardModal">Dashboard</a></li>
                                    <li><a class="dropdown-item" href="#" @click="openOrderConfirmationModal">OrderConfirmation</a></li>
                                    <li><a class="dropdown-item" href="/SelectTable">SelectTable</a></li>
                                    <li><a class="dropdown-item" href="#" @click="openPaymentModal">Payment</a></li>
                                    <li><a class="dropdown-item" href="#" @click="openDashboard_add_noteModal">Dashboard_add_note</a></li>
                                    <li><a class="dropdown-item" href="#" @click="openTipAmountModal">TipAmount</a></li>
                                    <li><a class="dropdown-item" href="#" @click="openReservation_listModal">Reservation_list</a></li>
                                    <li><a class="dropdown-item" href="/afitsand">afitsand</a></li>
                                    <li><a class="dropdown-item" href="/pos_walk_in_absent">pos_walk_in_absent</a></li>
                                    <li><a class="dropdown-item" href="/POS_walk_in_login_cashier">POS_walk_in_login_cashier</a></li>
                                    <li><a class="dropdown-item" href="/Pos_new_reservation">Pos_new_reservation</a>
                                    </li>
                                    <li><a class="dropdown-item" href="/UpcomingOrders">UpcomingOrders</a></li>
                                    <hr>
                                    <li><a class="dropdown-item" href="#">Settings</a></li>
                                    <li><a class="dropdown-item" href="#">Profile</a></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><a class="dropdown-item" href="#" @click="openModal">Sign out</a></li>
                                </ul>
                            </div>
                        </div>

                        <div v-if="!TokenService.isAutorize()">
                            <button type="button" class="btn btn-outline-light me-2">Логин</button>
                            <button type="button" class="btn btn-warning">Рўйхатдан ўтиш</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>


        <Modal v-model="modal" closeable header="My Modal" maxwidth="300px">
            <p>You can close this modal using the close button on the top right corner</p>
        </Modal>
        <Modal v-model="modalBill" closeable header="My Modal" maxwidth="500px">
            <Bill></Bill>

        </Modal>
        <Modal v-model="modalAddNote" closeable header="My Modal" maxwidth="800px">
            <AddNote></AddNote>
        </Modal>
        <Modal v-model="modalDashboard" closeable header="My Modal" maxwidth="800px">
            <Dashboard></Dashboard>
        </Modal>
        <Modal v-model="modalOrderConfirmation" closeable header="My Modal" maxwidth="800px">
            <OrderConfirmation></OrderConfirmation>
        </Modal>
        <Modal v-model="modalPayment" closeable header="My Modal" maxwidth="800px">
            <Payment></Payment>
        </Modal>
        <Modal v-model="modalDashboard_add_note" closeable header="My Modal" maxwidth="800px">
            <Dashboard_add_note></Dashboard_add_note>
        </Modal>
        <Modal v-model="modalTipAmount" closeable header="My Modal" maxwidth="800px">
            <TipAmount></TipAmount>
        </Modal>
        <Modal v-model="modalReservation_list" closeable header="My Modal" maxwidth="800px">
            <Reservation_list></Reservation_list>
        </Modal>



        <router-view style="margin-top: 74px;"></router-view>
    </div>

    <div v-if="!TokenService.isAutorize()">
        <router-view></router-view>
    </div>

</template>


<script setup>
import { ref } from 'vue';
import DinningOption from './components/DinningOption.vue';
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import TokenService from "./services/token.service";
import Modal from './dialogs/Modal.vue'

import Bill from './view/Bill/list.vue'
import AddNote from './view/dashboard/AddNote.vue'
import Dashboard from './view/dashboard/Dashboard.vue'
import OrderConfirmation from './view/dashboard/OrderConfirmation.vue'
import Payment from './view/dashboard/Payment.vue'
import Dashboard_add_note from './view/dashboard/Dashboard_add_note.vue'
import TipAmount from './view/dashboard/TipAmount.vue'
import Reservation_list from './view/dashboard/Reservation_list.vue'

let dinningOptionIsShow = ref(false);
let myDateTime = ref(new Date())
let isShowNavBar = ref(true)

function mySetSelect(i) {
    this.setSelectMenuItem = i
}

const route = useRoute();
const path = computed(() => route.path)

if (path == "afitsand" || path == "home")
    isShowNavBar = false
else
    isShowNavBar = true



const closeableModal = ref(false);

//
const modal = ref(false);
function openModal() {
    modal.value = true;
}

const modalReservation_list = ref(false);
function openReservation_listModal() {
    modalReservation_list.value = true;
}

const modalBill = ref(false);
function openBillModal() {
    modalBill.value = true;
}

const modalTipAmount = ref(false);
function openTipAmountModal() {
    modalTipAmount.value = true;
}

const modalDashboard_add_note = ref(false);
function openDashboard_add_noteModal() {
    modalDashboard_add_note.value = true;
}

const modalAddNote = ref(false);
function openAddNoteModal() {
    modalAddNote.value = true;
}

const modalDashboard = ref(false);
function openDashboardModal() {
    modalDashboard.value = true;
}

const modalOrderConfirmation = ref(false);
function openOrderConfirmationModal() {
    modalOrderConfirmation.value = true;
}

const modalPayment = ref(false);
function openPaymentModal() {
    modalPayment.value = true;
}


//

</script>

<style>
.fc-dark {
    color: #fff !important;
    background-color: var(--bs-dark) !important;
    border-color: var(--bs-gray) !important;
}

.fc-dark::-webkit-input-placeholder {
    color: rgb(108, 117, 125) !important;
}

.dis {
    display: inline-block;
    width: 210px;
    background-color: #F8F9FD;
    border-radius: 40px;
    height: 36px;
    width: 215px;
}

.disd {
    display: inline-block;
}

.tim {
    height: 15px;
    width: 30px;
    font-size: 14px;
}

.active:active {
    border-color: #ffffff;
}

.drop {
    float: right;
    width: 130px;
}

/* Start */
/*nav*/
.my-active {
    color: #FFAB18 !important;
    gap: 8px !important;
    width: 77px;
    height: 78px;
    padding: 8px, 6px, 8px, 6px;
    border-radius: 8px;
    gap: 8px;
}

.Nav_button-divHover:hover {
    background-color: #f0f0f0;
}

.btn-1:active {
    color: #FFAB18;
    gap: 8px;
    width: 77px;
    height: 78px;
    padding: 8px, 6px, 8px, 6px;
    border-radius: 8px;
    gap: 8px;
}

.hhha {
    text-align: center;
    height: 46px;
}

.Nav_bold-style {
    text-align: start;
}

.Nav_Coca_coffeetalk-style {
    text-align: start;
    color: #828487;
    font-size: 13px;
    text-align: start;
}

.router-link {
    text-decoration: none;
    color: #828487;
}

.Nav_cass_date {
    background-color: #F8F9FD;
    border-radius: 30px;
    height: 36px;
    width: 241px;
}

.Nav_date {
    background-color: #F8F9FD;
    border: 0px;
    font-size: 17px;
    font-weight: bold;
    width: 100px;
    margin-left: 1rem;
    margin-right: 1rem;
}

input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
}

.Nav_div2 {
    float: left;
}

.Nav_container-fluir2 {
    display: inline-block;
    width: 317px;
    height: 46px;
}

.Nav_chap-menu-div {
    float: left;
}

.Nav-container-fluit {
    width: 317px;
    height: 76px;
}

.Nav_ADNOC-Al-Dar-Sharj {
    font-size: 14px;
}

.Nav_button-div {
    height: 36px;
    width: 36px;
    border-radius: 50px;
    border: solid 1px;
    background-color: white;
}

.Nav_button-Dinning-Option {
    color: #ff6a00;
    background-color: #FFF5EE;
    border: none;
    border-radius: 30px;
    margin-right: 1rem;
}

.clock .time {
    display: flex;
    font-size: 1rem;
    font-weight: bold;
    color: #1a202c;
}

.separator {
    margin: 0 0.5rem;
}

.hours,
.minutes,
.seconds {
    display: inline-block;
    width: 1.5rem;
    text-align: center;
    color: #333;
    border-radius: 0.5rem;
    margin: 0 0.25rem;
    padding: 0.25rem;
}

.Nav_widht {
    height: 46px;
    width: 46px;
}

.Nav_imgs-arrow-left {
    height: 20px;
    width: 20px;
    float: right;
}

.Nav_button {
    height: 36px;
    width: 36px;
    border-radius: 50px;
    background-color: white;
    border-style: solid;
    border-width: 1px;
    float: left;
}

.Nav_inline_divlar {
    display: inline-block;
}

.Nav_div1 {
    height: 78px;
    text-align: right;
}

*/
/*/Nav*/

/* THE END */

.btn-#fff {
    border-color: #ffffff;
}
</style>