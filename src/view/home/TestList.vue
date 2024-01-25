<template >
    <div class="container-fluid">
        <div class="row">
            <div class="col-1 bg-body variant">
                <div>
                    <button class="btn btn-body btn-1 " :class="setSelectMenuItem == 1 ? 'my-active' : ''"
                        @click="mySetSelect(1)">
                        <img src="../../../public/assets/images/btn/offers.png">
                        <h3 class="h3-1">Coffee</h3>
                    </button>

                    <button class="btn btn-body btn-1" :class="setSelectMenuItem == 2 ? 'my-active' : ''"
                        @click="mySetSelect(2)">
                        <img src="../../../public/assets/images/btn/beverages.png">
                        <h3 class="h3-1">Beverages</h3>
                    </button> <br>

                    <button class="btn btn-body btn-1" :class="setSelectMenuItem == 3 ? 'my-active' : ''"
                        @click="mySetSelect(3)">
                        <img src="../../../public/assets/images/btn/lasagna.png">
                        <h3 class="h3-1">Bread</h3>
                    </button> <br>

                    <button class="btn btn-body btn-1" :class="setSelectMenuItem == 4 ? 'my-active' : ''"
                        @click="mySetSelect(4)">
                        <img src="../../../public/assets/images/btn/pasta.png">
                        <h3 class="h3-1">Appetizer</h3>
                    </button> <br>

                    <button class="btn btn-body btn-1" :class="setSelectMenuItem == 5 ? 'my-active' : ''"
                        @click="mySetSelect(5)">
                        <img src="../../../public/assets/images/btn/misc.png">
                        <h3 class="h3-1">Snack</h3>
                    </button>
                </div>
            </div>
            <div class="p-0 menu" :class="!isShowPanel ? 'col-11' : 'col-8'">
                <div class="container-fluid">
                    <div class="row">
                        <div v-for="it in foodData" :key="it.id" class="" :class="!isShowPanel ? 'col-2' : 'col-3'">
                            <Food v-model:fid="it.id" v-model:fimg="it.img" v-model:fname="it.name" @click="CreateOrder(it)"
                                v-model:fdescription="it.description" v-model:price="it.price">
                            </Food>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-3" v-if="isShowPanel">
                <div class="container-fluid p-0" style="height: 10px;">
                    <div class="row zakaz p-0" style="height: 416px;">
                        <div class="container-fluid p-0">
                            <div v-for="it in etsList" :key="it.id" class="row p-0" style="height: 100px; margin-left: 12px; width: 93%;">
                                <OrderListItem  v-bind:fname="it.name" v-bind:fprice="it.price" v-bind:fimg="it.img"></OrderListItem>              
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div>
                            <b>
                                <p class="pt-2 m-0 ps-0">Taxi (10%): {{ tax }} $</p>
                                <p class="p-0">Total: {{ jamiSumma }} so'm</p>
                                               
                            </b>
                        </div>
                        <div class="dib p-0">
                            <button class="butt ms-2">Sotib olish</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import OrderListItem from '../../components/OrderListItem.vue';
import foodData from '../../../public/assets/json/foodList.json';
import Food from '../../components/Food.vue';

let isShowPanel = ref(false)
let setSelectMenuItem = ref(1)
let etsList = ref([])



function mySetSelect(i) {
    this.setSelectMenuItem = i
}
 
function CreateOrder(item) {
    for (let i = 0; i < etsList.value.length; i++) {
        const element = etsList.value[i];
        
        if (element.name == item.name) {
            // Agar element topilgan bo'lsa, ishni to'xtatish uchun return qilish
            return;
        }
    }
    
    // Element topilmagan bo'lsa, boshqa harakatlar bajarish
    isShowPanel.value = true;
    etsList.value.push(item);
}
  

let count = ref(0);
let jamiSumma = ref(0);
let tax = ref(0);


function EtsPlus() {
    this.count++;
    Calc()
}

function EtsMinus() {
    if (this.count > 0) 
    {
        this.count--;

        Calc();

    } else {
        return;
    }
}


function Calc(){

    this.jamiSumma=0

    for (let i = 0; i < etsList.value.length; i++) {
        const element = etsList.value[i];
        
        this.jamiSumma = this.jamiSumma + props.fprice * this.count;
    }

    this.tax = this.jamiSumma + (this.jamiSumma * 0.1)
}

</script>


<style scoped>
.dib{
    text-align: center;
}


.butt{
    border:  none;
    background: linear-gradient(218.57deg, #81ff4f -6.67%, #2130ff 137.69%);
    color: white; 
    border-radius: 20px;
    height: 50px;
    width: 310px;
}


.variant{
    border-width: 1px;
    border-color: #ffffff;  
    text-align: center;
    margin-top: 3%;
    }

.menu{
    background-color:rgb(250, 250, 250);  
    max-height: 570px; 
    overflow-y: auto;
    background-color: #f7f7f7;
}

    .zakaz{
    height: 300px;
    max-height: 416px; 
    overflow-y: auto; 
    scrollbar-width: thin;
}

.parag {
    color: white;
}

.li {
    display: inline-block;
}

.eat1-3-11 {
    height: 74px;
    width: 74px;
}

.wrapper {
    position: relative;
}

.eat1-3-1 {
    width: 173px;
    height: 138px;
}

.eat1-3 {
    height: 275px;
    padding: 12px, 8px, 16px, 8px;
    border-radius: 16px;
    gap: 12px;
    background-color: #FFFFFF;
    display: inline-block;
}

.srech {
    font-family: Poppins;
    font-size: 17px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    width: 395px;
    height: 24px;
    border: none;
}

.eat_2_button1 {
    width: 50px;
    height: 36px;
    padding: 8px, 16px, 8px, 16px;
    border-radius: 40px;
    margin-right: 5px;
    display: inline-block;
}

.eat_2_button2 {
    width: 89px;
    height: 36px;
    padding: 8px, 16px, 8px, 16px;
    border-radius: 40px;
    margin-right: 5px;
    display: inline-block;
}

.eat_2_button3 {
    width: 89px;
    height: 36px;
    padding: 8px, 16px, 8px, 16px;
    border-radius: 40px;
    margin-right: 5px;
    display: inline-block;
}

.eat_2_button4 {
    width: 70px;
    height: 36px;
    padding: 8px, 16px, 8px, 16px;
    border-radius: 40px;
    margin-right: 5px;
    display: inline-block;
}

.eat_2_button5 {
    width: 99px;
    height: 36px;
    padding: 8px, 16px, 8px, 16px;
    border-radius: 40px;
    display: inline-block;
}

.eat1-1 {
    height: 36px;
    background-color: white;
}

.eat1-2 {
    background-color: white;
}

.eat1 {
    width: 100%;
    height: 100px;
    top: 78px;
    left: 125px;
}

.h3-1 {
    text-align: center;
    color: #828487;
    font-family: Poppins;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0px;
    text-align: center;
}

.btn-1 {
    margin: 10px;
    margin-left: 5%;
    border-radius: 20px;
    width: 77px;
    height: 78px;
    padding: 12px, 6px, 12px, 6px;
    border-radius: 8px;
    gap: 8px;
}

.btn-1:active {
    background: linear-gradient(218.57deg, #FFAB18 -6.67%, #FF2197 137.69%);
    margin: 10px;
    margin-left: 5px;
    border-radius: 8px;
    gap: 8px;
    width: 77px;
    height: 78px;
    padding: 8px, 6px, 8px, 6px;
    border-radius: 8px;
    gap: 8px;
}



.my-active {
    background: linear-gradient(218.57deg, #FFAB18 -6.67%, #FF2197 137.69%);
    margin: 10px;
    margin-left: 5px;
    border-radius: 8px;
    gap: 8px !important;
    width: 77px;
    height: 78px;
    padding: 8px, 6px, 8px, 6px;
    border-radius: 8px;
    gap: 8px;
}
</style>