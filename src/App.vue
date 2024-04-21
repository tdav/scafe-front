<template>

    <div v-if="TokenService.isAutorize()">

        <header class="p-3 bg-dark text-white fixed-top bg-dark ">
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
                                <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1" style="overflow-x: auto; max-height: 300px;">
                                    <li><a class="dropdown-item" href="/AddNote">AddNote</a></li>
                                    <li><a class="dropdown-item" href="/Dashboard">Dashboard</a></li>
                                    <li><a class="dropdown-item" href="/OrderConfirmation">OrderConfirmation</a></li>
                                    <li><a class="dropdown-item" href="/SelectTable">SelectTable</a></li>
                                    <li><a class="dropdown-item" href="/Payment">Payment</a></li>
                                    <li><a class="dropdown-item" href="/Dashboard_add_note">Dashboard_add_note</a></li>
                                    <li><a class="dropdown-item" href="/TipAmount">TipAmount</a></li>
                                    <li><a class="dropdown-item" href="/afitsand">afitsand</a></li>
                                    <li><a class="dropdown-item" href="/pos_walk_in_absent">pos_walk_in_absent</a></li>
                                    <li><a class="dropdown-item"
                                            href="/POS_walk_in_login_cashier">POS_walk_in_login_cashier</a></li>
                                    <li><a class="dropdown-item" href="/Reservation_list">Reservation_list</a></li>
                                    <li><a class="dropdown-item" href="/Pos_new_reservation">Pos_new_reservation</a>
                                    </li>
                                    <b>Pos</b>
                                    <hr class="m-0">
                                    <li><a class="dropdown-item" href="/UpcomingOrders">UpcomingOrders</a></li>
                                    <hr>
                                    <hr>
                                    <li><a class="dropdown-item" href="#">Settings</a></li>
                                    <li><a class="dropdown-item" href="#">Profile</a></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                                </ul>
                            </div>
                        </div>

                        <div v-if="!TokenService.isAutorize()">
                            <button type="button" class="btn btn-outline-light me-2">Логин</button>
                            <button type="button" class="btn btn-warning">Рўйхатдан ўтиш</button>
                        </div>

                        <!-- <div class="dropdown drop">
                        <div style="float: right;">
                            <div style="display: inline-block;">
                            </div>
                            <button class="active" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false" style="border: white; background-color: rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))!important;"
                                :class="setSelectMenuItem == 1 ? 'my-active' : ''" @click="mySetSelect(1)">
                                <img class="rotate" style="float: right; height: 40px; width: 40px;"
                                    src="../assets/images/nav/Nav_Profile.png" alt="rasm">
                            </button>
                            <ul class="dropdown-menu" style="height: 250px; width: 210px;">
                                <p class="p-3">cuhqwboebwiosdacboq
                                    uiwebhjdcopvm[3wmev
                                    ee;rkfm [olewrmkc[o
                                    oekmv[wkermkfv[c[ie
                                    ;k;jwfw;oefmqfrferrw
                                    evcervcercercre3ecrf
                                    [pemr[pvmolubhnqocu
                                    dbynwqouibcdheouiqB
                                    NXOUIQWBECAOUIBQW</p>
                            </ul>
                        </div>
                    </div> -->
                    </div>
                </div>
            </div>
        </header>




        <!-- <div class="container-fluid p-0">
            <div class="row">
                
                <div class="col-2">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-4">
                                <img src="../assets/images/nav/Nav_Vector.png" style="height: 40px; width: 40px;"
                                    alt="">
                            </div>
                            <div class="col-8">
                                <div class="container-flud">
                                    <div class="row " style="float: left;">
                                        <b class="Nav_bold-style">Walk-In</b><br>
                                    </div>
                                    <div class="row " style="width: 131px; font-size: 12px;">
                                        <p class="Nav_Coca_coffeetalk-style">Coca coffeetalk</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-9">
                    <div class="mt-2 ms-5" style="width: 499px; float: right;">
                        <img src="../public/assets/images/nav/Nav_home.png" class="me-1" alt="">
                        <router-link class="router-link me-3 btn-1" to="/home">Home</router-link>
                        <img src="../assets/images/nav/Nav_note.png" class="me-1" alt="">
                        <router-link class="router-link me-3 btn-1" to="/order">Order</router-link>
                        <img src="../assets/images/nav/Nav_clock.png" class="me-1" alt="">
                        <router-link class="router-link me-3 btn-1" to="/History">History</router-link>
                        <img src="../assets/images/nav/Nav_receipt.png" class="me-1" alt="">
                        <router-link class="router-link me-3 btn-1" to="/Bill">Bill</router-link>
                        <button style="border: none; background-color: white;">
                            <DinningOption v-bind:isShow="dinningOptionIsShow"></DinningOption>
                        </button>
                    </div>
                </div>
                <div class="col-1 p-0">
                    <div class="dropdown drop">
                        <div style="float: right;">
                            <div style="display: inline-block;">
                                <p class="mb-2" style="display: inline-block;">Derektor</p>
                            </div>
                            <button class="btn btn-#fff active" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false" style="border-color: #fff;"
                                :class="setSelectMenuItem == 1 ? 'my-active' : ''" @click="mySetSelect(1)">
                                <img class="rotate" style="float: right; height: 40px; width: 40px;"
                                    src="../assets/images/nav/Nav_Profile.png" alt="rasm">
                            </button>
                            <ul class="dropdown-menu" style="height: 250px; width: 210px;">
                                <p class="p-3">cuhqwboebwiosdacboq
                                    uiwebhjdcopvm[3wmev
                                    ee;rkfm [olewrmkc[o
                                    oekmv[wkermkfv[c[ie
                                    ;k;jwfw;oefmqfrferrw
                                    evcervcercercre3ecrf
                                    [pemr[pvmolubhnqocu
                                    dbynwqouibcdheouiqB
                                    NXOUIQWBECAOUIBQW</p>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </div> -->



        <router-view style="margin-top: 74px;"></router-view>
    </div>

    <div v-if="!TokenService.isAutorize()">
        <router-view></router-view>
    </div>

</template>


<script setup>
import { ref } from 'vue';
// import DinningOption from './components/dinningoption.vue';
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import TokenService from "./services/token.service";

let dinningOptionIsShow = ref(false);
let myDateTime = ref(new Date())

function mySetSelect(i) {
    this.setSelectMenuItem = i
}

const route = useRoute();
const path = computed(() => route.path)


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