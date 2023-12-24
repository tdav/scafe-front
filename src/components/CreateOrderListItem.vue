<template >
    <div class="row">
        <div v-if="etsList.filter(x => x == 13).length > 0" class="p-0">
            <img class="eat1-3-11 mt-2 ms-1" src="../../assets/images/Placeholder8.png">

            <button @click="EtsPlus(13)" class="my-btn-plus">
                <p class="parag  m-0">+</p>
            </button>

            <button @click="EtsMinus(13)" style="my-btn-minus">
                <p class="parag  m-0">-</p>
            </button>

        </div>
    </div>
</template>


<script>
export default {

}
</script>


<style lang="scss" >
.my-btn-plus {
    border-radius: 50px;
    margin-top: 30px;
    border: none;
    height: 36px;
    width: 36px;
    float: right;
    background-color: #19191c;
}

.my-btn-minus {
    border-radius: 50px;
    margin-top: 30px;
    border: none;
    height: 36px;
    width: 36px;
    float: right;
    background-color: #E4E4E4;
}
</style>