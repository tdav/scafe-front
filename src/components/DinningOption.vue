<template>
    <div class="container">
        <div class="dropdown" style="display: inline-block; width: 132px;">
            <button class="btn btn-secondary pt-0 dropdown-toggle" style="width: 132px; font-size: 19px; height: 32px;" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
            </button>
            <ul class="dropdown-menu" style="height: 265px; overflow-y: auto;" aria-labelledby="dropdownMenuButton1">
                <b>Dashboard</b><hr class="m-0">
                <li><a class="dropdown-item" href="/AdditonalOrder">AdditonalOrder</a></li>
                <li><a class="dropdown-item" href="/AddNote">AddNote</a></li>
                <li><a class="dropdown-item" href="/Dashboard">Dashboard</a></li>
                <li><a class="dropdown-item" href="/DinningOption">DinningOption</a></li>
                <li><a class="dropdown-item" href="/OrderConfirmation">OrderConfirmation</a></li>
                <li><a class="dropdown-item" href="/Payment">Payment</a></li>
                <li><a class="dropdown-item" href="/SelectTable">SelectTable</a></li>
                <li><a class="dropdown-item" href="/TipAmount">TipAmount</a></li>
                <li><a class="dropdown-item" href="/afitsand">afitsand</a></li>
                <li><a class="dropdown-item" href="/pos_walk_in_absent">pos_walk_in_absent</a></li>
                <b>Pos</b><hr class="m-0">
                <li><a class="dropdown-item" href="/LoginCashier">LoginCashier</a></li>
                <li><a class="dropdown-item" href="/UpcomingOrders">UpcomingOrders</a></li>
            </ul>
        </div>
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