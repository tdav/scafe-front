<template>
    <div class="container-fluid p-0">
        <div class="row mb-1 rro border border-1">

            <img class="col-4 eat1-3-11 mt-2 ms-1 p-0" :src="props.foodData.imgUrl"
                style="height: 80px; width: 80px; display: inline-block;">

            <div class="col-4 p-0 mt-3">
                <div class="col- p-0">
                    <p class="ms-1" style="margin: 0px; font-size: 13px;"> <b>{{ props.foodData.name }}</b></p>
                    <p class="p-0 mt-2" style="margin: 0px; font-size: 13px;">Narxi: {{ props.foodData.price }}</p>
                    <p style="margin: 0px; font-size: 15px;">Totol: {{ jamiSumma }} so'm</p>
                </div>

            </div>
                <div class="col-4 p-0">
                    <div style="float: right; margin-top: 30px;">
                        <button @click="EtsPlus()" class="my-btn-plus m-0"
                            style="width: 30px; height: 30px; float: left; display: inline-block; background: linear-gradient(218.57deg, rgb(255, 238, 0) -50%, rgba(255, 136, 0, 0.425) 137.69%);">
                            <p class="parag  mb-1">+</p>
                        </button>
                        <p class="ps-2" style="display: inline;">{{ props.foodData.count }}</p>
                        <button @click="EtsMinus()" class="my-btn-minus m-0 ms-2"
                            style="width: 30px; height: 30px; float: right; display: inline-block; background: linear-gradient(218.57deg, rgb(255, 238, 0) -50%, rgba(255, 136, 0, 0.425) 137.69%);">
                            <p class="parag  mb-1">-</p>
                        </button>
                    </div>

                </div>
        </div>
    </div>
</template>


<script setup>
import { ref, defineProps, defineEmits, onMounted } from 'vue';

const props = defineProps({
    foodData: {
        type: Object,
        required: true,
    }
});


let jamiSumma = ref(0);


const emit = defineEmits(['onChangeCount'])

onMounted(() => {
    props.foodData['count'] = 1;
    jamiSumma.value = props.foodData.price * props.foodData.count;
})

function EtsPlus() {
    props.foodData.count = props.foodData.count + 1;
    jamiSumma.value = props.foodData.price * props.foodData.count;

    emit('onChangeCount', props.foodData)
}

function EtsMinus() {

    if (props.foodData.count > 0) {
        props.foodData.count--;
        this.jamiSumma = props.foodData.price * props.foodData.count;

        emit('onChangeCount', props.foodData)


    } else {
        return;
    }
}

</script>

<style>
.rro {
    height: 100px;
}

.pp1 {
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