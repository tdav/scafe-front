<template >
    <div class="border-button p-3" style="padding: 0px;">
        <!--chap menyu-->
        <div class="container-fluid">
            <div class="row">
                <div class="col-1 p-0" style="border-right: 1px solid ; text-align: center; height: 46px;">
                    <button type="button" class="mt-1" style="border-radius: 35px; border: none; width:40px; height: 40px;">
                        <img src="../assets/images/nav/Nav_arrow-left.png" alt="">
                    </button>
                </div>
                <div class="col-2">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-4">
                                <img src="../assets/images/nav/Nav_Vector.png" style="height: 40px; width: 40px;" alt="">
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
                <div class="col-7">
                    <div class="mt-1" style="width: 499px; float: right;">
                        <!--chap menyu-->
                        <!--asosiy menyu-->
                        <img src="../public/assets/images/nav/Nav_home.png" class="me-1" alt="">
                        <router-link class="router-link me-3 btn-1"  to="/home" >Home</router-link>
                        <img src="../assets/images/nav/Nav_note.png" class="me-1"  alt="">
                        <router-link class="router-link me-3 btn-1"  to="/order" >Order</router-link>
                        <img src="../assets/images/nav/Nav_clock.png" class="me-1"  alt="">
                        <router-link class="router-link me-3 btn-1"  to="/History" >History</router-link>  
                        <img src="../assets/images/nav/Nav_receipt.png" class="me-1"  alt="">
                        <router-link class="router-link me-3 btn-1"  to="/Bill" >Bill</router-link>
                        <button style="border: none; background-color: white;">
                            <DinningOption v-bind:isShow="dinningOptionIsShow"></DinningOption>
                        </button>
                    </div>
                </div>
                <div class="col-2 p-0">
                    <div class="dropdown drop">
                        <div>
                            <p id="output">{{ output }}</p>
                            <p>Azizbek Devoloper</p>
                            <p>Jasur Dev</p>
                            <p id="date">{{ date }}</p>
                        </div>
                        <button class="btn btn-#fff active" type="button"  data-bs-toggle="dropdown" aria-expanded="false" style="border-color: #fff;" :class="setSelectMenuItem == 1 ? 'my-active' : ''" @click="mySetSelect(1)">
                            <img class="rotate" style="float: right; height: 40px; width: 40px;" src="../assets/images/nav/Nav_Profile.png" alt="rasm">
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                        </ul>
                    </div>
                </div>
                <!--/asosiy menyu-->
            </div>
        </div>
    </div>


    <router-view></router-view>

    
</template>


<script setup>
import { ref } from 'vue';
import DinningOption from './components/dinningoption.vue';
// import DinningOption from '@/components/DinningOption.vue';
// import { ref, onMounted } from 'vue';

let dinningOptionIsShow = ref(false);
let myDateTime = ref(new Date())

function mySetSelect(i) {
    this.setSelectMenuItem = i
}


// import { ref, watch } from 'vue';

// const mode = ref('time');
// const hour = ref('date');
// const output = ref('');
// const date = ref('');

// const format = (formatMode) => {
//   const now = new Date();
//   switch (formatMode) {
//     case 'time':
//       return now.toLocaleTimeString();
//     case 'date':
//       return now.toLocaleDateString();
//     default:
//       return now.toLocaleTimeString();
//   }
// }

// watch(mode, () => {
//   output.value = format(mode.value);
// });

// watch(hour, () => {
//   date.value = format(hour.value);
// });

// setInterval(() => {
//   mode.value = 'time';
// }, 1000);

// setInterval(() => {
//   hour.value = 'date';
// }, 1000);

</script>

<style>

.dis{
    display: inline-block;
    width: 210px;
    background-color: #F8F9FD;
    border-radius: 40px;
    height: 36px;
    width: 215px;
}

.disd{
    display: inline-block;
}

.tim{
    height: 15px;
    width: 30px;
    font-size: 14px;
}

.active:active {
    border-color: #ffffff;
}

.drop {
    float: right;
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

.Nav_button-divHover:hover{
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

.Nav_bold-style{
    text-align: start;
}

.Nav_Coca_coffeetalk-style{
    text-align: start;
    color: #828487;
    font-size: 13px;
    text-align: start;
}

.router-link{
    text-decoration: none;
    color: #828487;
}

.Nav_cass_date{
    background-color:#F8F9FD;
    border-radius: 30px;
    height: 36px;
    width: 241px;
}

.Nav_date{
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

.Nav_div2{
    float: left;
}

.Nav_container-fluir2{
    display: inline-block;
    width: 317px;
    height: 46px;
}

.Nav_chap-menu-div{
    float: left;
}

.Nav-container-fluit{
    width: 317px;
    height: 76px;
}

.Nav_ADNOC-Al-Dar-Sharj{
    font-size: 14px;
}

.Nav_button-div{
    height: 36px;
    width: 36px;
    border-radius: 50px;
    border: solid 1px;
    background-color: white;
}

.Nav_button-Dinning-Option{
    color: #ff6a00;
    background-color: #FFF5EE;
    border: none;
    border-radius: 30px;
    margin-right: 1rem;
}

.clock 
.time {
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  color: #1a202c;
}

.separator {
  margin: 0 0.5rem;
}

.hours, .minutes, .seconds {
    display: inline-block;
    width: 1.5rem;
    text-align: center;
    color: #333;
    border-radius: 0.5rem;
    margin: 0 0.25rem;
    padding: 0.25rem;
}

.Nav_widht{
    height: 46px;
    width: 46px;
}

.Nav_imgs-arrow-left{
    height: 20px;
    width: 20px;
    float: right;
}

.Nav_button{
    height: 36px;
    width: 36px;
    border-radius: 50px;
    background-color: white;
    border-style: solid;
    border-width: 1px;
    float: left ;
}

.Nav_inline_divlar{
    display: inline-block;
}

.Nav_div1{
    height: 78px;
    text-align: right;
} */
/*/Nav*/

/* THE END */

.btn-#fff {
    border-color: #ffffff;
}
</style>