<template >    
    <div class="eat1-3 col-2 mx-1 mt-2" style="border: 1px;">
        <img class="eat1-3-1 mt-2 ms-1" :src="fimg">
        <p>{{ fname }}</p>
        <p>{{ fdescription }}</p>
    </div>
</template> 

<script setup>



import { defineProps } from 'vue';

const props = defineProps(['fid', 'fname', 'fdescription', 'fimg'])


console.log(props.fdescription);

function mySelectEts(i) {
    console.log(i);
}

</script>


<style scoped></style>