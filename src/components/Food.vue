<template >
    <div class="container-fluid">
        <div class="row" style=" margin: 0 auto;">
            <div class="eat1-3 mx-2 px-2 mt-2" style="border: 1px;">
                <img class="eat1-3-1 mt-2" :src="props.foodData.img" style="width: 165px;">
                <p>{{ props.foodData.name }}</p>
                <p>{{ props.foodData.description }}</p>
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

</script>
