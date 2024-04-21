<template >
    <div class="container-fluid">
        <div class="row" style=" margin: 0 auto;">
            <div class="eat1-3 mt-3 border border-1" style="border-radius: 10px; height: 200px; text-align: center;">
                <img class="eat1-3-1 mt-2" :src= "imgUrl" style="width: 160px; height: 120px">
                <p class="mb-1">{{ props.foodData.name }}</p>
                <p>{{ props.foodData.price }} so'm</p>
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

const beginUrl = "https://tarnov.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2F";
const endUrl = "&w=640&q=75";
 
const imgUrl = beginUrl+ props.foodData.imgUrl.replace('https://cdn.delever.uz/delever/', '')+endUrl;

</script>
