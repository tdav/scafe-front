<script>
            // const myModal = document.getElementById('myModal')
            // const myInput = document.getElementById('myInput')

            // myModal.addEventListener('shown.bs.modal', () => {
            //     myInput.focus()
            // })
</script>

<template>
     <div class="container-fluid">
            <div class="row">
                <div class="col-4"></div>
                <div class="col-4">
                    <button type="button" class="btn btn-primary btp1" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Reservation list</button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg  mf-1" style=" width: 575px; height: 364px; border-radius: 16px; gap: 24px;">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="h4-1">Order payment</h1>
                                    <h1 class="h6-1">Order #102</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                  </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="container-fluid">
                                            <div class="row">
                                               <div class="col-12">
                                                    <button class="btn btn-secondary bbs-1" style="background-color: #F8F9FD; border-width: 0px;">
                                                        <div class="container">
                                                            <div class="row" style="height: 10px;">
                                                                <div class="col-12"></div>
                                                            </div>
                                                            <div class="row">
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
                                                                    <h6 class="h6-2">
                                                                        Total Amount 
                                                                    </h6>
                                                                </div>
                                                                <div class="col-5"></div>
                                                                <div class="col-3">
                                                                    <h6 class="h6-4">
                                                                        $ 64.00
                                                                    </h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                               </div>
                                            </div>
                                            <div class="row">
                                               <div class="col-4">
                                                <h6 class="h6-5">
                                                    Payment method
                                                </h6>
                                               </div>
                                               <div class="col-8"></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-3">
                                                    <button class="btn btn-body bbd1" style="background-color: #fff; border-color: #FF5C00; border-width: 2px;  border-radius: 16px; margin-left: -7px;">
                                                        <img src="./Images/11.png" alt="" class="img-1">
                                                    </button>
                                                </div>
                                                <div class="col-3">
                                                    <button class="btn btn-body bbd2" style="background-color: #fff; border-color: #FF5C00; border-width: 2px;  border-radius: 16px; border-color: #E4E4E4; width: 110px; margin-left: -7px;
                                                    height: 96px;">
                                                        <img src="./Images/2.png" alt="" class="img-2">
                                                    </button>
                                                </div>
                                                <div class="col-3">
                                                    <button class="btn btn-body bbd2" style="background-color: #fff; border-color: #FF5C00; border-width: 2px;  border-radius: 16px; border-color: #E4E4E4; width: 110px; margin-left: -7px;
                                                    height: 96px;">
                                                        <img src="./Images/Logo1.png" alt="" class="img-2">
                                                    </button>
                                                </div>
                                                <div class="col-3">
                                                    <button class="btn btn-body bbd2" style="background-color: #fff; border-color: #FF5C00; border-width: 2px;  border-radius: 16px; border-color: #E4E4E4; width: 110px;
                                                    height: 96px;">
                                                        <img src="./Images/Logo.png" alt="" class="img-2">
                                                    </button>
                                                </div>
                                            </div>
                                            <!-- codes -->
                                            <div class="row" style="padding: 10px;">
                                                <div class="col-3">
                                                    <button type="button" class="btn btn-primary bbp-1" style="width: 110px;
                                                    height: 76px;
                                                    padding: 14px 23px 14px 23px;
                                                    border-radius: 160px;
                                                    gap: 10px;
                                                    background-color: #F8F9FD;
                                                    border-width: 0px;">
                                                    <h6 class="h6-6">1</h6>
                                                    </button>
                                                </div>
                                                <div class="col-3">
                                                    <button type="button" class="btn btn-primary bbp-1" style="width: 110px;
                                                    height: 76px;
                                                    padding: 14px 23px 14px 23px;
                                                    border-radius: 160px;
                                                    gap: 10px;
                                                    background-color: #F8F9FD;
                                                    border-width: 0px;">
                                                    <h6 class="h6-6">2</h6>
                                                    </button>
                                                </div>
                                                <div class="col-3">
                                                    <button type="button" class="btn btn-primary bbp-1" style="width: 110px;
                                                    height: 76px;
                                                    padding: 14px 23px 14px 23px;
                                                    border-radius: 160px;
                                                    gap: 10px;
                                                    background-color: #F8F9FD;
                                                    border-width: 0px;">
                                                    <h6 class="h6-6">3</h6>
                                                    </button>
                                                </div>
                                                <div class="col-3">
                                                    <button type="button" class="btn btn-primary bbp-1" style="width: 110px;
                                                    height: 76px;
                                                    padding: 14px 23px 14px 23px;
                                                    border-radius: 160px;
                                                    gap: 10px;
                                                    background-color: #ECF6FF;
                                                    border-width: 0px;">
                                                    <h6 class="h6-7">10</h6>
                                                    </button>
                                                </div>
                                            </div>
                                            <!--2-->
                                            <div class="row" style="padding: 10px;">
                                                <div class="col-3">
                                                    <button type="button" class="btn btn-primary bbp-1" style="width: 110px;
                                                    height: 76px;
                                                    padding: 14px 23px 14px 23px;
                                                    border-radius: 160px;
                                                    gap: 10px;
                                                    background-color: #F8F9FD;
                                                    border-width: 0px;">
                                                    <h6 class="h6-6">4</h6>
                                                    </button>
                                                </div>
                                                <div class="col-3">
                                                    <button type="button" class="btn btn-primary bbp-1" style="width: 110px;
                                                    height: 76px;
                                                    padding: 14px 23px 14px 23px;
                                                    border-radius: 160px;
                                                    gap: 10px;
                                                    background-color: #F8F9FD;
                                                    border-width: 0px;">
                                                    <h6 class="h6-6">5</h6>
                                                    </button>
                                                </div>
                                                <div class="col-3">
                                                    <button type="button" class="btn btn-primary bbp-1" style="width: 110px;
                                                    height: 76px;
                                                    padding: 14px 23px 14px 23px;
                                                    border-radius: 160px;
                                                    gap: 10px;
                                                    background-color: #F8F9FD;
                                                    border-width: 0px;">
                                                    <h6 class="h6-6">6</h6>
                                                    </button>
                                                </div>
                                                <div class="col-3">
                                                    <button type="button" class="btn btn-primary bbp-1" style="width: 110px;
                                                    height: 76px;
                                                    padding: 14px 23px 14px 23px;
                                                    border-radius: 160px;
                                                    gap: 10px;
                                                    background-color: #ECF6FF;
                                                    border-width: 0px;">
                                                    <h6 class="h6-7">20</h6>
                                                    </button>
                                                </div>
                                            </div>
                                            <!--3-->
                                            <div class="row" style="padding: 10px;">
                                                <div class="col-3">
                                                    <button type="button" class="btn btn-primary bbp-1" style="width: 110px;
                                                    height: 76px;
                                                    padding: 14px 23px 14px 23px;
                                                    border-radius: 160px;
                                                    gap: 10px;
                                                    background-color: #F8F9FD;
                                                    border-width: 0px;">
                                                    <h6 class="h6-6">7</h6>
                                                    </button>
                                                </div>
                                                <div class="col-3">
                                                    <button type="button" class="btn btn-primary bbp-1" style="width: 110px;
                                                    height: 76px;
                                                    padding: 14px 23px 14px 23px;
                                                    border-radius: 160px;
                                                    gap: 10px;
                                                    background-color: #F8F9FD;
                                                    border-width: 0px;">
                                                    <h6 class="h6-6">8</h6>
                                                    </button>
                                                </div>
                                                <div class="col-3">
                                                    <button type="button" class="btn btn-primary bbp-1" style="width: 110px;
                                                    height: 76px;
                                                    padding: 14px 23px 14px 23px;
                                                    border-radius: 160px;
                                                    gap: 10px;
                                                    background-color: #F8F9FD;
                                                    border-width: 0px;">
                                                    <h6 class="h6-6">9</h6>
                                                    </button>
                                                </div>
                                                <div class="col-3">
                                                    <button type="button" class="btn btn-primary bbp-1" style="width: 110px;
                                                    height: 76px;
                                                    padding: 14px 23px 14px 23px;
                                                    border-radius: 160px;
                                                    gap: 10px;
                                                    background-color: #FFF1EF;
                                                    border-width: 0px;">
                                                    <img src="./Images/Icon.png" alt="">
                                                    </button>
                                                </div>
                                            </div>
                                            <!--4-->
                                            <div class="row" style="padding: 10px;">
                                                <div class="col-3">
                                                    <button type="button" class="btn btn-primary bbp-1" style="width: 110px;
                                                        height: 76px;
                                                        padding: 14px 23px 14px 23px;
                                                        border-radius: 160px;
                                                        gap: 10px;
                                                        background-color: #FFF5EE;
                                                        border-width: 0px;">
                                                        <h6 class="h6-8">C</h6>
                                                    </button>
                                                </div>
                                                <div class="col-3">
                                                    <button type="button" class="btn btn-primary bbp-1" style="width: 110px;
                                                    height: 76px;
                                                    padding: 14px 23px 14px 23px;
                                                    border-radius: 160px;
                                                    gap: 10px;
                                                    background-color: #F8F9FD;
                                                    border-width: 0px;">
                                                    <h6 class="h6-6">0</h6>
                                                    </button>
                                                </div>
                                                <div class="col-3">
                                                    <button type="button" class="btn btn-primary bbp-1" style="width: 110px;
                                                        height: 76px;
                                                        padding: 14px 23px 14px 23px;
                                                        border-radius: 160px;
                                                        gap: 10px;
                                                        background-color: #F8F9FD;
                                                        border-width: 0px;">
                                                        <h6 class="h6-6">.</h6>
                                                        </button>
                                                    </div>
                                                
                                                <div class="col-3">
                                                    <button type="button" class="btn btn-primary bbp-1" style="width: 110px;
                                                        height: 76px;
                                                        padding: 14px 23px 14px 23px;
                                                        border-radius: 160px;
                                                        gap: 10px;
                                                        background-color: #F8F9FD;
                                                        border-width: 0px;">
                                                        <h6 class="h6-6 ">Add</h6>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-3">
                                                    <button class="btn btn-dark bbd" style="border-radius: 16px; background-color: #19191C;">
                                                        <img src="./Images/money.png" alt="">
                                                        <h6 class="h6-9">Tip amount</h6>
                                                    </button>
                                                </div>
                                                <div class="col-3">
                                                    <button class="btn btn-dark bbd" style="border-radius: 16px; background-color: #19191C;">
                                                        <img src="./Images/printer.png" alt="">
                                                        <h6 class="h6-9">Gift receipt</h6>
                                                    </button>
                                                </div>
                                                <div class="col-3">
                                                    <button class="btn btn-dark bbd" style="border-radius: 16px; background-color: #19191C;">
                                                        <img src="./Images/envelope.png" alt="">
                                                        <h6 class="h6-9">Email</h6>
                                                    </button>
                                                </div>
                                                <div class="col-3">
                                                    <button class="btn btn-dark bbd-11" style="border-radius: 16px;  background-color: #FFAB18; border-width: 0px;">
                                                        <img src="./Images/check.png" alt="">
                                                        <h6 class="h6-9">Done</h6>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4"></div>
            </div>
        </div>
</template>

<style scoped>
    .bg-1 {
        width: 56px;
        height: 64px;
    }

    .h4-1 {
        color: #19191C;
        font-family: Poppins;
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
        letter-spacing: 0px;
        text-align: left;

    }

    .h6-1 {
        margin-left: -130px;
        margin-top: 50px;
        font-family: Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: left;
        color: #828487;
    }

    .bbs-1 {
        background-color: #F8F9FD;
        width: 488px;
        height: 94px;
        padding: 16px;
        border-radius: 12px;
        gap: 8px;

    }

    .h6-2 {
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: left;
        color: #19191C;
    }

    .h6-3 {
        
        font-family: Poppins;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: left;
        color: #19191C;
    }

    .h6-4 {
        margin-left: 18px;
        font-family: Poppins;
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
        letter-spacing: 0px;
        text-align: left;
        color: #FF5C00;
    }

    .h6-5 {
        font-family: Poppins;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: left;
        color: #19191C;
    }

    .bbd1 {
        background-color: #fff;
        border-width: 2px;
        width: 110px;
        height: 96px;
        padding: 24px 27px 24px 27px;
        border-radius: 16px;
        border: 2px;
        gap: 10px;

    }

    .bbd1:hover {
        background-color: #FFf;
        border-width: 2px; 
        border-radius: 16px;
        border-color: #FF5C00;
    }

    .bbb2 {
        background-color: #fff;
        border-color: #E4E4E4;
        border-width: 2px;
        width: 110px;
        height: 96px;
        padding: 24px 27px 24px 27px;
        border-radius: 16px;
        border: 2px;
        gap: 10px;
    }

    .img-2 {
        margin-top: 5px;
    }

    .img-1 {
        margin-top: 1px;
    }

    .bbp-1 {
        width: 110px;
        height: 76px;
        padding: 14px 23px 14px 23px;
        border-radius: 160px;
        gap: 10px;
        background-color: #F8F9FD;
    }

    .h6-6 {
        font-family: Poppins;
        font-size: 28px;
        font-weight: 600;
        line-height: 42px;
        letter-spacing: 0px;
        text-align: center;
        color: #19191C;
    }

    .h6-7 {
        font-family: Poppins;
        font-size: 28px;
        font-weight: 600;
        line-height: 42px;
        letter-spacing: 0px;
        text-align: center;
        color: #0B57A0;
    }

    .h6-8 {
        font-family: Poppins;
        font-size: 28px;
        font-weight: 600;
        line-height: 42px;
        letter-spacing: 0px;
        text-align: center;
        color: #FF5C00;
    }

    .h6-9 {
        margin-top: 10px;
        font-family: Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: center;
        color: #fff;
    }

    .bbd {
        width: 110px;
        height: 86px;
        border-radius: 36px;
        background-color: #19191C;
    }

    .bbd-11 {
        width: 110px;
        height: 86px;
        border-radius: 36px;
        background-color: #FFAB18;
    }
</style>