<template>
    <div class="mt-5">
        <p>kljhhhhhhhhhhhhhbiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</p>
    </div>
</template>
<script>
import { ref, onMounted } from 'vue';
import DataService from "../../services/data.service"
let myregion = []

onMounted(() => {

    DataService.getregion().then((response) => {
         
        foodData.value = response.data;
        myregion = response.data; 
    })

})

</script>