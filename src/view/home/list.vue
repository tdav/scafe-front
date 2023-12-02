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

                    <button class="btn btn-body btn-1" :class="setActive4 ? 'my-active' : '' " @click="myFilter4">
                        <img src="../../assets/imgs/btn/lasagna.png" alt="">
                        <h3 class="h3-1">Bread</h3>
                    </button> <br>

                    <button class="btn btn-body btn-1" :class="setActive4 ? 'my-active' : '' " @click="myFilter4">
                        <img src="../../assets/imgs/btn/lasagna.png" alt="">
                        <h3 class="h3-1">Bread</h3>
                    </button> <br>

                    <button class="btn btn-body btn-1" :class="setActive5 ? 'my-active' : '' " @click="myFilter5">
                        <img src="../../assets/imgs/btn/misc.png" alt="">
                        <h3 class="h3-1">Snack</h3>
                    </button>
                </div>
            </div>
            <div class="col-8" style="height: 490px;">
            </div>
            <div class="col-3" style="height: 490px;">
                
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

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