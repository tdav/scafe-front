<template >
    <div class="container-fluid">
        <div class="row">
            <div class="eat1-3 mx-2 px-2 mt-2" style="border: 1px; background-color: antiquewhite;">
                <img class="eat1-3-1 mt-2" :src="fimg">
                <p>{{ fname }}</p>
                <p>{{ fdescription }}</p>
                <p>{{ price }}sum</p>
            </div>
        </div>
    </div>
</template> 

<script setup>



import { defineProps } from 'vue';

const props = defineProps(['fid', 'fname', 'fdescription', 'fimg', 'price'])


</script>
