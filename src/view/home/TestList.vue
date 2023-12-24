<template >
    <div class="container-fluid">
        <div class="row">
            <div class="col-1 bg-body border-end" style="border-width: 1px; border-color: #E4E4E4; text-align: center;">
                <div>
                    <button class="btn btn-body btn-1 " :class="setItem == 1 ? 'my-active' : ''" @click="mySetSelect(1)">
                        <img src="../../../public/assets/images/btn/offers.png">
                        <h3 class="h3-1">Coffee</h3>
                    </button>

                    <button class="btn btn-body btn-1" :class="setItem == 2 ? 'my-active' : ''" @click="mySetSelect(2)">
                        <img src="../../../public/assets/images/btn/beverages.png">
                        <h3 class="h3-1">Beverages</h3>
                    </button> <br>

                    <button class="btn btn-body btn-1" :class="setItem == 3 ? 'my-active' : ''" @click="mySetSelect(3)">
                        <img src="../../../public/assets/images/btn/lasagna.png">
                        <h3 class="h3-1">Bread</h3>
                    </button> <br>

                    <button class="btn btn-body btn-1" :class="setItem == 4 ? 'my-active' : ''" @click="mySetSelect(4)">
                        <img src="../../../public/assets/images/btn/pasta.png">
                        <h3 class="h3-1">Appetizer</h3>
                    </button> <br>

                    <button class="btn btn-body btn-1" :class="setItem == 5 ? 'my-active' : ''" @click="mySetSelect(5)">
                        <img src="../../../public/assets/images/btn/misc.png">
                        <h3 class="h3-1">Snack</h3>
                    </button>
                </div>
            </div>
            
            <div  class="p-0" :class="!isShowPanel ? 'col-11' : 'col-8'" style="background-color: #fafafa;">
                <ul>
                    <li v-for="it in foodData" :key="it.id" class="li">
                        <Food v-model:fid="it.id" v-model:fimg="it.img" v-model:fname="it.name"
                            v-model:fdescription="it.description" v-model:price="it.price">
                        </Food>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>


<script setup>
import foodData from '../../../public/assets/json/foodList.json';
import Food from '../../components/Food.vue';


</script>


<style scoped>
.parag{
    color: white;
}

.li{
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

.eat1-3{
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