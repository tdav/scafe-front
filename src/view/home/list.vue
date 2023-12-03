<template >
    <div class="container-fluid">
        <div class="row">
            <div class="col-1 bg-body border-end" style="border-width: 1px; border-color: #E4E4E4;">
                <div>
                    <button class="btn btn-body btn-1" :class="setItem == 1 ? 'my-active' : ''" @click="mySetSelect(1)">
                        <img src="../../assets/images/btn/offers.png">
                        <h3 class="h3-1">Coffee</h3>
                    </button>

                    <button class="btn btn-body btn-1" :class="setItem == 2 ? 'my-active' : ''" @click="mySetSelect(2)">
                        <img src="../../assets/images/btn/beverages.png">
                        <h3 class="h3-1">Beverages</h3>
                    </button> <br>

                    <button class="btn btn-body btn-1" :class="setItem == 3 ? 'my-active' : ''" @click="mySetSelect(3)">
                        <img src="../../assets/images/btn/lasagna.png">
                        <h3 class="h3-1">Bread</h3>
                    </button> <br>

                    <button class="btn btn-body btn-1" :class="setItem == 4 ? 'my-active' : ''" @click="mySetSelect(4)">
                        <img src="../../assets/images/btn/pasta.png">
                        <h3 class="h3-1">Appetizer</h3>
                    </button> <br>

                    <button class="btn btn-body btn-1" :class="setItem == 5 ? 'my-active' : ''" @click="mySetSelect(5)">
                        <img src="../../assets/images/btn/misc.png">
                        <h3 class="h3-1">Snack</h3>
                    </button>
                </div>
            </div>

            <div class="p-0" :class="!isShowPanel ? 'col-11' : 'col-9'" style="background-color: #fafafa;">
                <div class="eat1">
                    <div class="eat1-1 border border-1">

                    </div>
                    <div class=" container-fluid eat1-2">
                        <div class="row h-100">

                            <div class="wrapper">
                                <input type="text" class="form-control">
                                <!-- <i class="fa fa-search"></i> -->
                            </div>                          
                        </div>
                    </div>


                    <!--1-qator-->
                    <div class="eat1-3 mx-1 mt-2" @click="mySelectEts(1)">
                        <img class="eat1-3-1 m-3" src="../../assets/images/Image.png">
                    </div>

                    <div class="eat1-3 mx-1 mt-2" @click="mySelectEts(2)">
                        <img class="eat1-3-1 m-3" src="../../assets/images/Image1.png">
                    </div>
                    <div class="eat1-3 mx-1 mt-2">
                        <img class="eat1-3-1 m-3" src="../../assets/images/Image2.png">
                    </div>
                    <div class="eat1-3 mx-1 mt-2">
                        <img class="eat1-3-1 m-3" src="../../assets/images/Placeholder.png">
                    </div>
                    <div class="eat1-3 mx-1 mt-2">
                        <img class="eat1-3-1 m-3" src="../../assets/images/Image4.png">
                    </div>
                    <div class="eat1-3 mw-1 mt-2">
                        <img class="eat1-3-1 m-3" src="../../assets/images/Placeholder8.png">
                    </div>
                    <!--2-qator-->
                    <div class="eat1-3 mx-1 mt-2">
                        <img class="eat1-3-1 m-3" src="../../assets/images/Placeholder2.png">
                    </div>
                    <div class="eat1-3 mx-1 mt-2">
                        <img class="eat1-3-1 m-3" src="../../assets/images/Placeholder3.png">
                    </div>
                    <div class="eat1-3 mx-1 mt-2">
                        <img class="eat1-3-1 m-3" src="../../assets/images/Placeholder4.png">
                    </div>
                    <div class="eat1-3 mx-1 mt-2">
                        <img class="eat1-3-1 m-3" src="../../assets/images/Placeholder5.png">
                    </div>
                    <div class="eat1-3 mx-1 mt-2">
                        <img class="eat1-3-1 m-3" src="../../assets/images/Placeholder6.png">
                    </div>
                    <div class="eat1-3 mw-1 mt-2">
                        <img class="eat1-3-1 m-3" src="../../assets/images/Placeholder7.png">
                    </div>
                    <!--3-qator-->
                    <div class="eat1-3 mx-1 mt-2">
                        <img class="eat1-3-1 m-3" src="../../assets/images/Placeholder8.png">
                    </div>
                    <div class="eat1-3 mx-1 mt-2">
                        <img class="eat1-3-1 m-3" src="../../assets/images/Placeholder6.png">
                    </div>
                    <div class="eat1-3 mx-1 mt-2">
                        <img class="eat1-3-1 m-3" src="../../assets/images/Placeholder3.png">
                    </div>
                    <div class="eat1-3 mx-1 mt-2">
                        <img class="eat1-3-1 m-3" src="../../assets/images/Image1.png">
                    </div>
                    <div class="eat1-3 mx-1 mt-2">
                        <img class="eat1-3-1 m-3" src="../../assets/images/Placeholder8.png">
                    </div>
                    <div class="eat1-3 mw-1 mt-2">
                        <img class="eat1-3-1 m-3" src="../../assets/images/Placeholder3.png">
                    </div>

                </div>
            </div>

            <div class="col-2" v-if="isShowPanel" style="background-color: aqua;">

                
                    <h3 class="h3-1">{{ etsList }}</h3>
                    <div class="container">
                        <div class="row">
                            <div class="eat1-3 mx-1 mt-2" v-if="etsList.filter(x=>x==1).length>0" >
                                <img class="eat1-3-1 m-3" src="../../assets/images/Image.png">
                            </div>
                        </div>


                        <div class="row">
                            <div class="eat1-3 mx-1 mt-2" v-if="etsList.filter(x=>x==2).length>0" >
                                <img class="eat1-3-1 m-3" src="../../assets/images/Image1.png">
                            </div>
                        </div>

                    </div>
                

            </div>


        </div>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';


let setItem = ref(0)

function mySetSelect(i) {
    this.setItem = i

    this.isShowPanel = i == 5
};

let etsList = ref([])
let isShowPanel = ref(false)

function mySelectEts(i) { 
    
    this.etsList.push(i)
    
    this.isShowPanel = this.etsList.length>0
}





</script>

<style scoped>
.wrapper {
    position: relative;
}

.eat1-3-1 {
    width: 173px;
    height: 138px;
}

.eat1-3 {
    width: 199px;
    height: 230px;
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
    margin-left: 5px;
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