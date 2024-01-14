<template >
    <div class="container-fluid p-0">
        <div class="row" style="height: 100px;">
            <img class="col-4 eat1-3-11 mt-2 ms-1 p-0" :src="fimg" style="height: 80px; width: 80px; display: inline-block;">
            <div class="col-6 p-0">
                <p class="ms-1" style="margin: 0px; font-size: 20px;"> {{ fname }}</p>
                <p class="p-0 ms-3" style="margin: 0px; font-size: 13px;">dona: {{ count }}</p>
                <p class="p-0 ms-3" style="margin: 0px; font-size: 13px;">narxi: {{ fprice }}</p>
                <p class="ms-3" style="margin: 0px; font-size: 15px;">Total: {{ jamiSumma }} so'm</p>
            </div>
            <div class="col-3 p-0">
                <div style="margin-top: 30px;">
                <button @click="EtsPlus()" class="my-btn-plus m-0" style="width: 35px; display: inline-block;">
                    <p class="parag  m-0">+</p>
                </button>
                
                <button @click="EtsMinus()" class="my-btn-minus m-0" style="width: 35px; display: inline-block;">
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
    this.count--;
    this.jamiSumma = props.fprice * this.count;
}

</script>


<style >
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