<template >
    <div class="row">

        <img class="eat1-3-11 mt-2 ms-1" :src="fimg">
        <p> {{ fname }}</p>
        <p>Price {{ fprice }}</p>
        <p>Qty {{ count}}</p>
        <p>Total {{ jamiSumma }}</p>

        <button @click="EtsPlus()" class="my-btn-plus">
            <p class="parag  m-0">+</p>
        </button>

        <button @click="EtsMinus()" class="my-btn-minus">
            <p class="parag  m-0">-</p>
        </button>

    </div>
</template>


<script setup>
import { ref, defineProps } from 'vue';
const props = defineProps(['fid', 'fname', 'fimg', 'fprice'])

let count = ref(0);
let jamiSumma = ref(0);


function EtsPlus() {
    count++;
    jamiSumma = fprice * count;
}

function EtsMinus() {
    count--;
    jamiSumma = fprice * count;
}

</script>


<style lang="scss" >
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