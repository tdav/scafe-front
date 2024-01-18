<template >
    <div class="container-fluid">
        <div class="row" style=" margin: 0 auto;">
            <div class="eat1-3 mx-2 px-2 mt-2" style="border: 1px;">
                <img class="eat1-3-1 mt-2" :src="fimg" style="width: 165px;">
                <p>{{ fname }}</p>
                <p>{{ fdescription }}</p>
                <p>{{ jamiSumma }}sum</p>
            </div>
        </div>
    </div>
</template> 

<script setup>



import { defineProps } from 'vue';

const props = defineProps(['fid', 'fname', 'fdescription', 'fimg', 'price'])

</script>
