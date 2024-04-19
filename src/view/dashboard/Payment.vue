<template>
    <form class="container" style="padding-left: 250px; padding-right: 250px">
        <div class="container p-5" style="text-align: center;">
            <div class="row">
                <button class="btn btn-secondary col-12 bbs-1" style="background-color: lightgray; border-width: 0px;">
                    <div class="container">
                        <div class="row mt-1">
                            <div class="col-4">
                                <h6 class="h6-2">Tip Amount</h6>
                            </div>
                            <div class="col-6"></div>
                            <div class="col-2">
                                <h6 class="h6-3">$ 8.12</h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <h6 class="h6-2">Total Amount</h6>
                            </div>
                            <div class="col-5"></div>
                            <div class="col-3">
                                <h6 class="h6-4">$ 64.00</h6>
                            </div>
                        </div>
                    </div>
                </button>
            </div>
            <div class="row">
                <div class="col-4 mt-3 mb-3">
                    <h6 class="h6-5">Payment method</h6>
                </div>
                <div class="col-8"></div>
            </div>
            <div class="row">
                <div class="col-3">
                    <button class="btn btn-body bbd2" style="background-color: #fff; border-color: #FF5C00; border-width: 2px;  border-radius: 16px; border-color: #E4E4E4; width: 110px;
                                                    height: 96px;">
                        <img src="../../../public/assets/images/dropdaun/pul.png" alt="" class="img-2">
                    </button>
                </div>
                <div class="col-3">
                    <button class="btn btn-body bbd2" style="background-color: #fff; border-color: #FF5C00; border-width: 2px;  border-radius: 16px; border-color: #E4E4E4; width: 110px;
                                                    height: 96px;">
                        <img src="../../../public/assets/images/dropdaun/dumolokarta.png" alt="" class="img-2">
                    </button>
                </div>
                <div class="col-3">
                    <button class="btn btn-body bbd2" style="background-color: #fff; border-color: #FF5C00; border-width: 2px;  border-radius: 16px; border-color: #E4E4E4; width: 110px;
                                                    height: 96px;">
                        <img src="../../../public/assets/images/dropdaun/viza.png" alt="" class="img-2">
                    </button>
                </div>
                <div class="col-3">
                    <button class="btn btn-body bbd2" style="background-color: #fff; border-color: #FF5C00; border-width: 2px;  border-radius: 16px; border-color: #E4E4E4; width: 110px;
                                                    height: 96px;">
                        <img src="../../../public/assets/images/dropdaun/4.png" alt="" class="img-2">
                    </button>
                </div>
            </div>
            <div class="input-group flex-nowrap mt-3 mb-3">
                <input type="text" class="form-control" style="height: 50px;" aria-describedby="addon-wrapping">
            </div>
            <!-- Raqam tugmalar -->
            <div class="row mb-4" style="padding: 10px;">
                <div class="col-4" style="text-align: center;" v-for="number in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 100]">
                    <button type="button" class="btn btn-primary bbp-1 mt-3" style="width: 110px;
                                                    height: 76px;
                                                    padding: 14px 23px 14px 23px;
                                                    border-radius: 160px;
                                                    gap: 10px;
                                                    color: black;
                                                    background-color: #F8F9FD;
                                                    border-width: 0px;" @click="addNumberToInput(number)">
                        <h6 class="h6-6">{{ number }}</h6>
                    </button>
                </div>
            </div>
            <!-- Tugma bloklari -->
            <div class="row">
                <div class="col-3 p-0">
                    <button class="btn btn-dark bbd" style="border-radius: 16px; width: 110px; background-color: #19191C;">
                        <img src="./Images/money.png" alt="">
                        <h6 class="h6-9">Tip amount</h6>
                    </button>
                </div>
                <div class="col-3 p-0">
                    <button class="btn btn-dark bbd" style="border-radius: 16px; width: 110px; background-color: #19191C;">
                        <img src="./Images/money.png" alt="">
                        <h6 class="h6-9">Gift receipt</h6>
                    </button>
                </div>
                <div class="col-3 p-0">
                    <button class="btn btn-dark bbd" style="border-radius: 16px; width: 110px; background-color: #19191C;">
                        <img src="./Images/money.png" alt="">
                        <h6 class="h6-9">Email</h6>
                    </button>
                </div>
                <div class="col-3 p-0">
                    <button class="btn btn-dark bbd" style="border-radius: 16px; width: 110px; background-color: #FFAB18;">
                        <img src="./Images/money.png" alt="">
                        <h6 class="h6-9">Done</h6>
                    </button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    methods: {
        addNumberToInput(number) {
            var input = document.querySelector('.form-control');
            input.value += number;
        },
        clearInput() {
            var input = document.querySelector('.form-control');
            input.value = '';
        },
        submitForm() {
            var form = document.querySelector('.container');
            form.submit();
        }
    }
}
</script>

<style scoped>
/* Sizning stilingiz */
</style>
