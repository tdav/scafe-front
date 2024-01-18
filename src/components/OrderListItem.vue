<template >
    <div class="container-fluid p-0">
        <div class="row mb-1 mt-1 rro">
            <img class="col-4 eat1-3-11 mt-2 ms-1 p-0" :src="fimg" style="height: 80px; width: 80px; display: inline-block;">
            <div class="col-6 p-0">
                <p class="ms-1" style="margin: 0px; font-size: 20px;"> {{ fname }}</p>
                <p class="p-0 ms-3" style="margin: 0px; font-size: 13px;">Dona: {{ count }}</p>
                <p class="p-0 ms-3" style="margin: 0px; font-size: 13px;">Narxi: {{ fprice }}</p>
                <p class="ms-3" style="margin: 0px; font-size: 15px;">Totol: {{ jamiSumma }} so'm</p>
            </div>
            <div class="col-3 p-0">
                <div style="margin-top: 30px;">
                <button @click="EtsPlus()" class="my-btn-plus m-0" style="width: 35px; float: left; display: inline-block; background: linear-gradient(218.57deg, rgb(255, 238, 0) -50%, rgba(255, 136, 0, 0.425) 137.69%);">
                    <p class="parag  m-0">+</p>
                </button>
                
                <button @click="EtsMinus()" class="my-btn-minus m-0 ms-2" style="width: 35px; float: left; display: inline-block; background: linear-gradient(218.57deg, rgb(255, 238, 0) -50%, rgba(255, 136, 0, 0.425) 137.69%);">
                    <p class="parag  m-0">-</p>
                </button>
                </div>

            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, defineProps, onMounted } from 'vue';

const props = defineProps(['fname', 'fprice', 'fimg'])

onMounted(() => {
    //console.log(props);   
})


let count = ref(0);
let jamiSumma = ref(0);


function EtsPlus() {
    this.count++;
    this.jamiSumma = props.fprice * this.count;
}

function EtsMinus() {
 
    

    if (this.count > 0) {
        this.count--;
        this.jamiSumma = props.fprice * this.count;
    } else {
        return;
    }
}





</script>


<style >
.rro{
    height: 100px; 
    background: linear-gradient(218.57deg, #81ff4f -6.67%, #2130ff 137.69%);
}

.pp1{
    color: white;
}
.my-btn-plus {
    border-radius: 50px;
    margin-top: 30px;
    border: none;
    height: 36px;
    width: 36px;
    float: right;
    background-color: #19191c;
}

.my-btn-minus {
    border-radius: 50px;
    margin-top: 30px;
    border: none;
    height: 36px;
    width: 36px;
    float: right;
    background-color: #E4E4E4;
}
</style>