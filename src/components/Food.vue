<template >
    <div class="container-fluid">
        <div class="row" style=" margin: 0 auto;">
            <div class="eat1-3 mt-3 border border-1" style="border-radius: 10px; height: 220px; text-align: center;">
                <img class="eat1-3-1 mt-2" :src= "imgUrl" style="width: 160px; height: 120px">
                <p style="font-weight: bold; font-size: larger;" class="mb-1">{{ props.foodData.name }}</p>
                <p style="font-weight: bold;" >{{ props.foodData.price }} so'm</p>
            </div>
        </div>
    </div>
</template> 

<script setup>

import { defineProps } from 'vue';


const props = defineProps( { 
    foodData: {
        type:Object,
        required:true,
    }
});

 
const imgUrl =  props.foodData.imgUrl;

</script>
