<template >
    <a class="btn btn-secondary border border-0 dropdown-toggle show" @click="onClick()"
        style=" width: 144px; height: 36px; border-radius: 58px; background-color: #FFF5EE; color: #FF5C00;" href="#"
        role="button" id="aa" data-bs-toggle="dropdown" aria-expanded="true">
        Dinning option
    </a>

    <div v-if="isShow">
        <ul class="dropdown-menu show p-2" aria-labelledby="aa" data-popper-placement="bottom-start"
            style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 40px);">
            <li><a href="">
                    <div class="dropdown-item border border-1 " id="aa"
                        style="height: 40px; width: 100%; border-radius: 10px; background-color: #ffe5d1; border-color: #FF5C00;">
                        <img src="imgs/dine in.png" alt="">
                        <p style="display: inline-block; color: #FF5C00;">Dine in</p>
                        <p class="border border-1 mt-1"
                            style="rotate: -40deg; text-align: center; background-color:#FF5C00; color: white; display: inline-block; float: right;  height: 20px; width: 20px; border-radius: 100px; ">
                            L</p>
                    </div>
                </a></li>
            <li><a href="">
                    <div class="dropdown-item border border-1 " id="aa"
                        style="height: 40px; width: 100%; border-radius: 10px; background-color: white; border-color: #FF5C00;">
                        <img src="imgs/Icon.png" alt="">
                        <p style="display: inline-block; font-size: 13px; color: rgb(204, 204, 204);">Take away</p>
                        <p class="border border-1 mt-1"
                            style="rotate: -40deg; text-align: center; background-color: white; display: inline-block; float: right;  height: 20px; width: 20px; border-radius: 100px; ">
                        </p>
                    </div>
                </a></li>
            <li><a href="">
                    <div class="dropdown-item border border-1 " id="aa"
                        style="height: 40px; width: 100%;; border-radius: 10px; background-color: white; border-color: #FF5C00;">
                        <img src="imgs/delivery.png" alt="">
                        <p style="display: inline-block;  color:  rgb(204, 204, 204);">Dine in</p>
                        <p class="border border-1 mt-1"
                            style="rotate: -40deg; text-align: center; background-color: white; display: inline-block; float: right;  height: 20px; width: 20px; border-radius: 100px; ">
                        </p>
                    </div>
                </a></li>
            <li><a href="">
                    <div class="dropdown-item border border-1 " id="aa"
                        style="height: 40px; width: 100%;; border-radius: 10px; background-color: white; border-color: #FF5C00;">
                        <img src="imgs/event.png" alt="">
                        <p style="display: inline-block; font-size: 11px; color:  rgb(204, 204, 204);">Reservation</p>
                        <p class="border border-1 mt-1"
                            style="rotate: -40deg; text-align: center; background-color: white; display: inline-block; float: right;  height: 20px; width: 20px; border-radius: 100px; ">
                        </p>
                    </div>
                </a></li>
            <div class="container-fluid w-100 m-0 p-0">
                <div class="row p-0 w-100 m-0">
                    <button class=" col-6 border border-1 m-0"
                        style=" border-radius: 50px; height: 35px; width: 49%; display: inline-block; background-color: white; color: #FF5C00; text-align: center;">Cancel</button>
                    <button class=" col-6 border border-1 m-0"
                        style="height: 35px; width: 50%; display: inline-block; border-radius: 50px; background-color: #FF5C00; color: white; text-align: center;">Apply</button>
                </div>
            </div>
        </ul>
    </div>
</template>

<script setup>

import { defineProps, onMounted } from 'vue';

let props = defineProps(['isShow'])

onMounted(() => {
    console.log(props);
})

function onClick() {
    props.isShow != props.isShow;
}

</script>
 