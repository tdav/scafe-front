<template >
    <div class="container-fluid">
        <div class="row">
            <div class="col-1 bg-body border-end" style=" border-width: 1px; border-color: #E4E4E4;">
                <div>
                    <button class="btn btn-body btn-1" :class="setActive1 ? 'my-active' : '' " @click="myFilter1">
                        <img src="../../assets/imgs/btn/offers.png" alt="">
                        <h3 class="h3-1">Coffee</h3>
                    </button>

                    <button class="btn btn-body btn-1" :class="setActive2 ? 'my-active' : '' " @click="myFilter2">
                        <img src="../../assets/imgs/btn/beverages.png" alt="">
                        <h3 class="h3-1">Beverages</h3>
                    </button> <br>

                    <button class="btn btn-body btn-1" :class="setActive4 ? 'my-active' : '' " @click="myFilter3">
                        <img src="../../assets/imgs/btn/lasagna.png" alt="">
                        <h3 class="h3-1">Bread</h3>
                    </button> <br>

                    <button class="btn btn-body btn-1" :class="setActive4 ? 'my-active' : '' " @click="myFilter4">
                        <img src="../../assets/imgs/btn/pasta.png" alt="">
                        <h3 class="h3-1">Appetizer</h3>
                    </button> <br>

                    <button class="btn btn-body btn-1" :class="setActive5 ? 'my-active' : '' " @click="myFilter5">
                        <img src="../../assets/imgs/btn/misc.png" alt="">
                        <h3 class="h3-1">Snack</h3>
                    </button>
                </div>
            </div>
            <div class="col-11 p-0" style="height: 490px; background-color: #fafafa; overflow: auto;">
                <div class="eat1">
                    <div class="eat1-1 border border-1">

                    </div>          
                    <div class=" container-fluid eat1-2">
                        <div class="row h-100">
                            <div class="col-6 border border-1 pt-4">
                                <img style="height: 24px; width: 24px;" src="../../assets/imgs/btn/search.png" alt="">
                                <input class="srech" id="input" type="search" autocomplete="off" spellcheck="false" role="combobox" aria-controls="matches" placeholder="Search menu..." aria-expanded="false" aria-live="polite">
                            </div>
                            <div class="col-6 border border-1 p-3">
                                <div class="eat_2_button1  border border-1"></div>
                                <div class="eat_2_button2  border border-1"></div>
                                <div class="eat_2_button3  border border-1"></div>
                                <div class="eat_2_button4  border border-1"></div>
                                <div class="eat_2_button5  border border-1"></div>
                            </div>
                        </div>
                    </div>              
                    <!--1-qator-->
                    <div class="eat1-3 mx-1 mt-2">
                        <img class="eat1-3-1 m-3" src="../../assets/imgs/Image.png" alt="">
                    </div>
                    <div class="eat1-3 mx-1 mt-2">
                        <img class="eat1-3-1 m-3" src="../../assets/imgs/Image (1).png" alt="">
                    </div>
                    <div class="eat1-3 mx-1 mt-2">
                        <img class="eat1-3-1 m-3" src="../../assets/imgs/Image (2).png" alt="">
                    </div>
                    <div class="eat1-3 mx-1 mt-2">
                        <img class="eat1-3-1 m-3" src="../../assets/imgs/Placeholder.png" alt="">
                    </div>
                    <div class="eat1-3 mx-1 mt-2">
                        <img class="eat1-3-1 m-3" src="../../assets/imgs/Image4.png" alt="">
                    </div>
                    <div class="eat1-3 mw-1 mt-2">
                        <img class="eat1-3-1 m-3" src="../../assets/imgs/Placeholder (8).png" alt="">
                    </div>
                    <!--2-qator-->
                    <div class="eat1-3 mx-1 mt-2">
                        <img  class="eat1-3-1 m-3" src="../../assets/imgs/Placeholder (2).png" alt="">
                    </div>
                    <div class="eat1-3 mx-1 mt-2">
                        <img  class="eat1-3-1 m-3" src="../../assets/imgs/Placeholder (3).png" alt="">
                    </div>
                    <div class="eat1-3 mx-1 mt-2">
                        <img  class="eat1-3-1 m-3" src="../../assets/imgs/Placeholder (4).png" alt="">
                    </div>
                    <div class="eat1-3 mx-1 mt-2">
                        <img  class="eat1-3-1 m-3" src="../../assets/imgs/Placeholder (5).png" alt="">
                    </div>
                    <div class="eat1-3 mx-1 mt-2">
                        <img  class="eat1-3-1 m-3" src="../../assets/imgs/Placeholder (6).png" alt="">
                    </div>
                    <div class="eat1-3 mw-1 mt-2">
                        <img  class="eat1-3-1 m-3" src="../../assets/imgs/Placeholder (7).png" alt="">
                    </div>
                    <!--3-qator-->
                    <div class="eat1-3 mx-1 mt-2">
                        <img  class="eat1-3-1 m-3" src="../../assets/imgs/Placeholder (8).png" alt="">
                    </div>
                    <div class="eat1-3 mx-1 mt-2">
                        <img  class="eat1-3-1 m-3" src="../../assets/imgs/Placeholder (6).png" alt="">
                    </div>
                    <div class="eat1-3 mx-1 mt-2">
                        <img  class="eat1-3-1 m-3" src="../../assets/imgs/Placeholder (3).png" alt="">
                    </div>
                    <div class="eat1-3 mx-1 mt-2">
                        <img  class="eat1-3-1 m-3" src="../../assets/imgs/Image (1).png" alt="">
                    </div>
                    <div class="eat1-3 mx-1 mt-2">
                        <img  class="eat1-3-1 m-3" src="../../assets/imgs/Placeholder (8).png" alt="">
                    </div>
                    <div class="eat1-3 mw-1 mt-2">
                        <img  class="eat1-3-1 m-3" src="../../assets/imgs/Placeholder (3).png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';

let setActive1 = ref(false)
function myFilter1  ()  {
    setActive1.value =! setActive1.value;
};

let setActive2 = ref(false)
function myFilter2  ()  {
    setActive2.value =! setActive2.value;
};

let setActive3 = ref(false)
function myFilter3  ()  {
    setActive3.value =! setActive3.value;
};

let setActive4 = ref(false)
function myFilter4  ()  {
    setActive4.value =! setActive4.value;
};

let setActive5 = ref(false)
function myFilter5  ()  {
    setActive5.value =! setActive5.value;
};




</script>


<style scoped>

.eat1-3-1{
    width: 173px;
    height: 138px;
}

.eat1-3{
    width: 199px;
    height: 230px;
    padding: 12px, 8px, 16px, 8px;
    border-radius: 16px;
    gap: 12px;
    background-color: #FFFFFF;
    display: inline-block;
}

.srech{
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

.eat_2_button1{
    width: 50px;
    height: 36px;
    padding: 8px, 16px, 8px, 16px;
    border-radius: 40px;
    margin-right: 5px;
    display: inline-block;
}

.eat_2_button2{
    width: 89px;
    height: 36px;
    padding: 8px, 16px, 8px, 16px;
    border-radius: 40px;
    margin-right: 5px;
    display: inline-block;
}

.eat_2_button3{
    width: 89px;
    height: 36px;
    padding: 8px, 16px, 8px, 16px;
    border-radius: 40px;
    margin-right: 5px;
    display: inline-block;
}

.eat_2_button4{
    width: 70px;
    height: 36px;
    padding: 8px, 16px, 8px, 16px;
    border-radius: 40px;
    margin-right: 5px;
    display: inline-block;
}

.eat_2_button5{
    width: 99px;
    height: 36px;
    padding: 8px, 16px, 8px, 16px;
    border-radius: 40px;
    display: inline-block;
}

.eat1-1{
    height: 36px;
    background-color: white;
}
.eat1-2{
    background-color: white;
}

.eat1{
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



.my-active
    {background: linear-gradient(218.57deg, #FFAB18 -6.67%, #FF2197 137.69%);
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