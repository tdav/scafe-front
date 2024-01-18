<template >
    <div class="container-fluid">
        <div class="row" style=" margin: 0 auto;">
            <div class="eat1-3 mx-2 px-2 mt-2" style="border: 1px;">
                <img class="eat1-3-1 mt-2" :src="fimg" style="width: 165px;">
                <p>{{ fname }}</p>
                <p>{{ fdescription }}</p>
                <p>{{ price }} so'm</p>
            </div>
        </div>
    </div>
</template> 

<script setup>



// import { defineProps } from 'vue';

const props = defineProps(['fid', 'fname', 'fdescription', 'fimg', 'price'])



import { ref, defineProps, onMounted } from 'vue';

// const props = defineProps(['fname', 'fprice', 'fimg'])


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
//
</script>
