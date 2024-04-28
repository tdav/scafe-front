<template>
    <div class="container">
        <div class="" style="text-align: center;">
            <p style="font-size: 19px;"><b>Order confirmation</b></p>
            <p style="font-size: 19px; color: #828487;">Please confirm the order below to completed payment</p>
        </div>
        <div class="p-2" style="height: 150px;">

            <hr class="m-0">
            <p class="mx-1 pas">
            <p style="color: #828487; width: 180px; display: inline-block; float: left; font-size: 15px;">ITEM NAME</p>
            </p>
            <p class="pas" style="width: 60px; color: #828487; width: 60px; display: inline-block;">
                QTY
            </p>
            <p class="pas" style="width: 90px; font-size: 19px; color: #828487; display: inline-block; float: right;">
                PRICE</p>
            <p class="pas" style="width: 90px; font-size: 19px; color: #828487; display: inline-block; float: right;">
                TAX</p>
            <p class="pas" style="width: 90px; font-size: 19px; color: #828487; display: inline-block; float: right;">
                SUBTOTAL</p>
            <hr class="m-0">
            <p class="mx-1 pas">
            <p style=" width: 180px; display: inline-block; float: left; font-size: 15px;">Vegetable Pizza Smal</p>
            </p>
            <p class="pas" style="width: 60px; width: 60px; display: inline-block;">1</p>
            <p class="pas" style="width: 90px; display: inline-block; float: right; font-size: 19px;">$ 25.12</p>
            <p class="pas" style="width: 90px; display: inline-block; float: right; font-size: 19px;">$ 0.33</p>
            <p class="pas" style="width: 90px; display: inline-block; float: right; font-size: 19px;">$ 25.12</p>
            <hr class="m-0">
            <p class="mx-1 pas">
            <p style=" width: 180px; display: inline-block; float: left; font-size: 15px;">Ayam kentang</p>
            </p>
            <p class="pas" style="width: 60px; width: 60px; display: inline-block;">1</p>
            <p class="pas" style="width: 90px; display: inline-block; float: right; font-size: 19px;">$ 15.40</p>
            <p class="pas" style="width: 90px; display: inline-block; float: right; font-size: 19px;">$ 0.32</p>
            <p class="pas" style="width: 90px; display: inline-block; float: right; font-size: 19px;">$ 15.40</p>
            <hr class="m-0">
            <p class="mx-1 pas">
            <p style=" width: 180px; display: inline-block; float: left; font-size: 15px;">Mie kuah pedas</p>
            </p>
            <p class="pas" style="width: 60px; width: 60px; display: inline-block;">1</p>
            <p class="pas" style="width: 90px; display: inline-block; float: right; font-size: 19px;">$ 11.21</p>
            <p class="pas" style="width: 90px; display: inline-block; float: right; font-size: 19px;">$ 0.42</p>
            <p class="pas" style="width: 90px; display: inline-block; float: right; font-size: 19px;">$ 11.21</p>
            <hr class="m-0">
        </div>
        <div style="height: 164px; margin-top: 100px;">
            <div class="container-fluid">
                <div class="row m-0 mt-3 mb-5" style="height: 164px; width: 100%;">
                    <div class="col-7">
                        <div class="p-3" style="height: 155px; width: 390px; background-color: #E4E4E4;">
                            <h5>NOTES</h5>
                            <p class="ppp">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen
                                book.</p>
                        </div>
                    </div>
                    <div class="col-5">
                        <div>
                            <p class="pass" style="width: 50%; float: right; text-align: end;">
                                $ 51.73
                            </p>
                            <p class="pass" style="color: #9C9C9C; width: 50%; float: right; text-align: end;">
                                SUBTOTAL
                            </p>
                        </div>
                        <div>
                            <p class="pass" style="width: 50%; float: right; text-align: end;">
                                $ 0
                            </p>
                            <p class="pass" style="color: #9C9C9C; width: 50%; float: right; text-align: end;">
                                SUBCHARGE
                            </p>
                        </div>
                        <div>
                            <p class="pass" style="width: 50%; float: right; text-align: end;">
                                $ 0
                            </p>
                            <p class="pass" style="color: #9C9C9C; width: 50%; float: right; text-align: end;">
                                ORDER DISCOUNT
                            </p>
                        </div>
                        <div>
                            <p class="pass" style="width: 50%; float: right; text-align: end;">
                                $ 0
                            </p>
                            <p class="pass" style="color: #9C9C9C; width: 50%; float: right; text-align: end;">
                                TAX
                            </p>
                        </div>
                        <div>
                            <p class="pass" style="width: 50%; float: right; text-align: end; color: #FF5C00;">
                                $ 51.73
                            </p>
                            <p class="pass" style="width: 50%; float: right; text-align: end;">
                                BILL AMOUNT
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="width: 68%; height: 100%;">
            <p class="ddp m-0" style="color: #9C9C9C;">Payment method</p>
            <b><p class="m-0" style="font-size: 25px;">Cash</p></b>
        </div>
        <button class="btn btn-darck mx-0 m-3 border border-1"
            style="display: inline-block; width: 50%; border-radius: 100px; height: 50px; background-color: #ffffff; color: black;"
            data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Censel</button>
        <button class="btn btn-darck mx-0 m-3 border border-1"
            style="display: inline-block; width: 50%; border-radius: 100px; height: 50px; background-color: #FF5C00; color: white;"
            data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Confirm</button>
    </div>
</template>

<style scoped>
.pas {
    font-family: Poppins;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0px;
}

.ppp {
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: left;
    color: #828487;
}

.ddp {
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: left;
}

.pass {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: right;

}

.pass {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: right;
}
</style>