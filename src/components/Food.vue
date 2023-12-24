<template >

    
    <div class="eat1-3 mx-2 px-2 mt-2" style="border: 1px;">
        <img class="eat1-3-1 mt-2" :src="fimg">
        <p>{{ fname }}</p>
        <p>{{ fdescription }}</p>
        <p>{{ price }}sum</p>
    </div>
</template> 

<script setup>



import { defineProps } from 'vue';

const props = defineProps(['fid', 'fname', 'fdescription', 'fimg' , 'price'])


console.log(props.fdescription);

function mySelectEts(i) {
    console.log(i);
}

</script>


<style scoped></style>