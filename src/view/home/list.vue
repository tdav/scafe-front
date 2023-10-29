<template >
    <div class="col-1 bg-body border-end" style="width: 125px; border-width: 1px; border-color: #E4E4E4;">
        <div>
            <button class="btn btn-body btn-1">
                <img src="../../assets/imgs/btn/offers.png" alt="">
                <h3 class="h3-1">Coffee</h3>
            </button> <br>
            <button class="btn btn-body btn-1">
                <img src="../../assets/imgs/btn/beverages.png" alt="">
                <h3 class="h3-1">Beverages</h3>
            </button> <br>
            <button class="btn btn-body btn-1" active v-on="">
                <img src="../../assets/imgs/btn/breakfast.png" alt="">
                <h3 class="h3-1">Food</h3>
            </button> <br>
            <button class="btn btn-body btn-1">
                <img src="../../assets/imgs/btn/pasta.png" alt="">
                <h3 class="h3-1">Appetizer</h3>
            </button> <br>
            <button class="btn btn-body btn-1">
                <img src="../../assets/imgs/btn/lasagna.png" alt="">
                <h3 class="h3-1">Bread</h3>
            </button> <br>
            <button class="btn btn-body btn-1">
                <img src="../../assets/imgs/btn/misc.png" alt="">
                <h3 class="h3-1">Snack</h3>
            </button>
        </div>
    </div>
</template>


<script>
</script>


<style scoped>

.h3-1{
    text-align: center;
    color: #828487;
    font-family: Poppins;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0px;
    text-align: center;
}

.btn-1 {
    margin: 10px;
    border-radius: 20px; 
    width:  77px; 
    height: 78px; 
    padding: 12px, 6px, 12px, 6px; 
    border-radius: 8px; gap: 8px;
}

.btn-1:active {
    background-color: #FFAB18;
    margin: 10px;
    border-radius: 8px; gap: 8px;
    width: 77px;
    height: 78px;
    padding: 8px, 6px, 8px, 6px;
    border-radius: 8px;
    gap: 8px;
}


.active {
    background-color: #FFAB18 !important;
    margin: 10px;
    border-radius: 8px; gap: 8px !important;
    width: 77px;
    height: 78px;
    padding: 8px, 6px, 8px, 6px;
    border-radius: 8px;
    gap: 8px;
}
      
</style>