<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-1 bg-body variant border " style="width: min-content; height: 100vh;">

                <button @click="OnFilter(2)" class="btn btn-body btn-1">
                    <img src="../../../public/assets/images/btn/offers.png">
                    <h3 class="h3-1">Ичимликлар</h3>
                </button>

                <button @click="OnFilter(3)" class="btn btn-body btn-1">
                    <img class="immmm" src="../../../public/assets/images/icon/free-icon-soup-5756048.png">
                    <h3 class="h3-1">Биринчига</h3>
                </button>

                <button @click="OnFilter(4)" class="btn btn-body btn-1">
                    <img class="immmm"
                        src="../../../public/assets/images/icon/free-icon-food-and-restaurant-mega-pack-color-8285335.png">
                    <h3 class="h3-1">Икинчига</h3>
                </button>

                <button @click="OnFilter(5)" class="btn btn-body btn-1">
                    <img src="../../../public/assets/images/btn/pasta.png">
                    <h3 class="h3-1">Уйгур</h3>
                </button>

                <button @click="OnFilter(6)" class="btn btn-body btn-1">
                    <img class="immmm" src="../../../public/assets/images/icon/free-icon-steak-4829135.png">
                    <h3 class="h3-1">Стейк</h3>
                </button>

                <button @click="OnFilter(7)" class="btn btn-body btn-1">
                    <img class="immmm" src="../../../public/assets/images/icon/kebab.png">
                    <h3 class="h3-1">Кабоблар</h3>
                </button>

                <button @click="OnFilter(8)" class="btn btn-body btn-1">
                    <img class="immmm" src="../../../public/assets/images/icon/free-icon-pilau-6196390.png">
                    <h3 class="h3-1">ОШ / Сомса</h3>
                </button>

                <button @click="OnFilter(9)" class="btn btn-body btn-1">
                    <img class="immmm" src="../../../public/assets/images/icon/free-icon-chicken-1702778.png">
                    <h3 class="h3-1">КФС</h3>
                </button>

                <button @click="OnFilter(10)" class="btn btn-body btn-1">
                    <img class="immmm" src="../../../public/assets/images/icon/salads.png">
                    <h3 class="h3-1">Салатлар</h3>
                </button>

                <button @click="OnFilter(11)" class="btn btn-body btn-1">
                    <img class="immmm" src="../../../public/assets/images/icon/poinsettia.png">
                    <h3 class="h3-1">Ичимликлар</h3>
                </button>

                <button @click="OnFilter(12)" class="btn btn-body btn-1">
                    <img class="immmm" src="../../../public/assets/images/icon/icons8-хлеб-50.png">
                    <h3 class="h3-1">Гарнир / Нон</h3>
                </button>

            </div>


            <div class="p-0 menu scc col">
                <div class="container-fluid">
                    <div class="row">
                        <div v-for="it in foodData" :key="it.id" class="p-0" :class="!isShowPanel ? 'col-2' : 'col-3'">
                            <Food :foodData="it" @click="CreateOrder(it)"></Food>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-3" v-if="isShowPanel">
                <div class="container-fluid p-0" style="height: 100vh;">
                    <div class="row zakaz p-0">
                        <div class="col-12 p-0">
                            <div class="container-fluid p-0">
                                <div v-for="it in etsList" :key="it.id" class="row p-0"
                                    style="margin-left: 12px; width: 95%;">
                                    <OrderListItem :foodData="it" @onChangeCount="onMyChangeCount"></OrderListItem>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row fixed-row-bottom">
                        <div class="col-12">
                            <p class="pb-3 m-0 ps-0 mt-3">Sub Total: {{ jamiSumma }} so`m</p>
                        </div>

                        <button class="col-7 mx-auto  btn btn-lg btn-success">Sotib olish</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>


<script setup>

import { ref, onMounted } from 'vue';
import OrderListItem from '../../components/OrderListItem.vue';
import Food from '../../components/Food.vue';

import DataService from "../../services/data.service"

let myFoodList = []
let isShowPanel = ref(false)
let setSelectMenuItem = ref(1)
let etsList = ref([]);

let jamiSumma = ref(0);
let tax = ref(0);

let foodData = ref([]);

function OnFilter(id) {
    foodData.value = myFoodList.filter(function (food) {
        return food.catigoryId == id
    })
}

onMounted(() => {

    DataService.getFoodList().then((response) => {
        foodData.value = response.data;
        myFoodList = response.data;
        console.log(response);
    })

})


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

    JamiSummaHisobla();
}

function onMyChangeCount(food) {


    for (let i = 0; i < etsList.value.length; i++) {
        const element = etsList.value[i];

        if (element.id == food.id)
            element['count'] = food.count;
    }

    JamiSummaHisobla();
}


function JamiSummaHisobla() {

    jamiSumma.value = 0

    for (let i = 0; i < etsList.value.length; i++) {
        const element = etsList.value[i];

        jamiSumma.value = jamiSumma.value + element.price * element.count;
    }

    tax.value = jamiSumma.value + (jamiSumma.value * 0.1)
}

</script>


<style scoped>
.dib {
    text-align: center;
}

.fixed-row-bottom {
    position: fixed;
    bottom: 0;
    padding-bottom: 10px;
    width: 25%;
}

.butt {
    border: none;
    background: linear-gradient(218.57deg, #81ff4f -6.67%, #2130ff 137.69%);
    color: white;
    border-radius: 20px;
    height: 50px;
    width: 310px;
}


.variant {
    /* height: 100vh; */
    overflow-y: auto;
}

.menu {
    overflow-y: auto;
    background-color: white;
}

.zakaz {
    max-height: 530px;
    overflow-y: auto;
    overflow-x: hidden;
    height: 530px;
}

.immmm {
    height: 30px;
    width: 30px;
}

.scc {
    height: 100vh;
    max-height: 100vh;
    overflow-y: auto;
}

/* .scc{
    overflow-y: auto;
    scrollbar-width: thin;
} */

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
    width: 77px;
    height: 78px;
    border-radius: 8px;
    gap: 8px;
}

.btn-1:active {
    background: linear-gradient(218.57deg, #FFAB18 -6.67%, #FF2197 137.69%);
    /* margin: 10px; */
    /* margin-left: 1px; */
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