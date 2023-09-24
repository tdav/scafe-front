<script>
// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//     myInput.focus()
// })

// const exampleModal = document.getElementById('exampleModal')
// if (exampleModal) {
//     exampleModal.addEventListener('show.bs.modal', event => {
//         // Button that triggered the modal
//         const button = event.relatedTarget
//         // Extract info from data-bs-* attributes
//         const recipient = button.getAttribute('data-bs-whatever')
//         // If necessary, you could initiate an Ajax request here
//         // and then do the updating in a callback.

//         // Update the modal's content.
//         const modalTitle = exampleModal.querySelector('.modal-title')
//         const modalBodyInput = exampleModal.querySelector('.modal-body input')

//         modalTitle.textContent = `New message to ${recipient}`
//         modalBodyInput.value = recipient
//     })
// }
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <button type="button" class="btn btn-primary btp1" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    data-bs-whatever="@mdo">Dashboard</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-lg mf-1" style="width: 450px;
                        height: 547px;
                        border: 0px 0px 0px 1px;">
                        <div class="modal-content">
                            <div class="modal-body">
                                <form>
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-12">
                                                <button class="btn btn-primary bbp-1" style="background-color: #F8F9FD;
                                                    width: 372px;
                                                    height: 44px;
                                                    padding: 4px;
                                                    border-radius: 80px;">
                                                    <div class="container-fluid">
                                                        <div class="row">
                                                            <div class="col-6">
                                                                <button class="btn btn-primary bbp-2"
                                                                    style=" border-radius: 40px;  background-color: #FFFFFF; border-radius: 40px; border-width: 0px; width: 152px; height: 36px; padding: 8px 16px 8px 16px; border-radius: 40px; gap: 10px; margin-left: -370px;">
                                                                    <h6 class="h6-1">
                                                                        Buy
                                                                    </h6>
                                                                </button>
                                                            </div>
                                                            <div class="col-6">
                                                                <button class="btn btn-primary bbp-3"
                                                                    style="background-color: #F8F9FD; border-width: 0px;  border-radius: 40px;">
                                                                    <h6 class="h6-2">
                                                                        Reservation
                                                                    </h6>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </button>
                                            </div>
                                            <div class="row">
                                                <div class="col-10">
                                                    <h6 class="h6-3">
                                                        Customer Information
                                                    </h6>
                                                </div>
                                                <div class="col-1"></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-1"></div>
                                                <div class="col-8">
                                                    <div class="mb-3">
                                                        <input type="text" class="form-control"
                                                            placeholder="Customer name fl1" id="recipient-name"
                                                            style="border-radius: 58px; width: 362px; height: 48px;">
                                                    </div>
                                                </div>
                                                <div class="col-3"></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-1"></div>
                                                <div class="col-8">
                                                    <div class="input-group mb-3" style="width: 360px; height: 48px;">
                                                        <select class="form-select" id="inputGroupSelect01"
                                                            style="border-radius: 58px;">
                                                            <option selected style="color: #C2C2C2;">Select table</option>
                                                            <option value="1">One</option>
                                                            <option value="2">Two</option>
                                                            <option value="3">Three</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="col-3"></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-1"></div>
                                                <div class="col-8">
                                                    <button class="btn btn-danger bbd-1" style="width: 360px;
                                                        height: 48px;
                                                        padding: 12px 24px 12px 24px;
                                                        border-radius: 58px;
                                                        gap: 10px;
                                                        background-color: #FFF5EE;
                                                        border-width: 0px;
                                                        ">
                                                        <h6 class="h6-4" style=" text-align: center;">
                                                            Add note
                                                        </h6>
                                                    </button>
                                                </div>
                                                <div class="col-3"></div>
                                            </div>
                                            <hr style="color: #E4E4E4;">
                                            <div class="row">
                                                <div class="col-1"></div>
                                                <div class="col-6">
                                                    <h6 style="color:#19191C;
                                                        font-family: Poppins;
                                                        font-size: 20px;
                                                        font-weight: 600;
                                                        line-height: 30px;
                                                        letter-spacing: 0px;
                                                        text-align: left;
                                                        ">Orders details</h6>
                                                </div>
                                                <div class="col-5"></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-1"></div>
                                                <div class="col-3">
                                                    <img src="./Images/Placeholder.png" alt="">
                                                </div>
                                                <div class="col-8">
                                                    <div class="container-fluid">
                                                        <div class="row">
                                                            <div class="col-12">
                                                                <h6 style="color: #19191C;
                                                                    font-family: Poppins;
                                                                    font-size: 16px;
                                                                    font-weight: 600;
                                                                    line-height: 24px;
                                                                    letter-spacing: 0px;
                                                                    text-align: left;
                                                                    ">Steak sapi bakar</h6>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-6">
                                                                <h6 style="font-family: Poppins;
                                                                    font-size: 12px;
                                                                    font-weight: 400;
                                                                    line-height: 16px;
                                                                    letter-spacing: 0px;
                                                                    text-align: left;
                                                                    color: #9C9C9C;
                                                                    ">Price</h6>
                                                                <h6 style="color: #FF5C00; 
                                                                    font-family: Poppins;
                                                                    font-size: 16px;
                                                                    font-weight: 600;
                                                                    line-height: 24px;
                                                                    letter-spacing: 0px;
                                                                    text-align: left;
                                                                    ">$ 25.12</h6>
                                                            </div>
                                                            <div class="col-6">
                                                                <button class="btn btn-secondary" style="width: 36px; background-color: #E4E4E4; border-width: 0px;
                                                                    height: 36px;
                                                                    padding: 8px;
                                                                    border-radius: 58px;
                                                                    gap: 8px;
                                                                    ">
                                                                    <h6
                                                                        style="margin-left: 3px; margin-top: -5px; width: 12px; color: #9C9C9C;">
                                                                        -</h6>
                                                                </button>
                                                                <span style=" color: #19191C; margin-top: 10px;
                                                                    font-family: Poppins;
                                                                    font-size: 20px;
                                                                    font-weight: 600;
                                                                    line-height: 20px;
                                                                    letter-spacing: 0px;
                                                                    text-align: left;
                                                                    ">1</span>
                                                                <button class="btn btn-secondary" style="width: 36px; background-color: #19191C; border-width: 0px;
                                                                    height: 36px;
                                                                    padding: 8px;
                                                                    border-radius: 58px;
                                                                    gap: 8px;
                                                                    ">
                                                                    <h6
                                                                        style="margin-left: 3px; margin-top: -5px; width: 12px; color: #fff;">
                                                                        +</h6>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-1"></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-1"></div>
                                                <div class="col-10">
                                                    <hr style="color: #E4E4E4;">
                                                </div>
                                                <div class="col-1"></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-1"></div>
                                                <div class="col-3">
                                                    <img src="./Images/Placeholder (1).png" alt="">
                                                </div>
                                                <div class="col-8">
                                                    <div class="container-fluid">
                                                        <div class="row">
                                                            <div class="col-12">
                                                                <h6 style="color: #19191C;
                                                                    font-family: Poppins;
                                                                    font-size: 16px;
                                                                    font-weight: 600;
                                                                    line-height: 24px;
                                                                    letter-spacing: 0px;
                                                                    text-align: left;
                                                                    ">Ayam kentang</h6>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-6">
                                                                <h6 style="font-family: Poppins;
                                                                    font-size: 12px;
                                                                    font-weight: 400;
                                                                    line-height: 16px;
                                                                    letter-spacing: 0px;
                                                                    text-align: left;
                                                                    color: #9C9C9C;
                                                                    ">Price</h6>
                                                                <h6 style="color: #FF5C00; 
                                                                    font-family: Poppins;
                                                                    font-size: 16px;
                                                                    font-weight: 600;
                                                                    line-height: 24px;
                                                                    letter-spacing: 0px;
                                                                    text-align: left;
                                                                    ">$ 15.40</h6>
                                                            </div>
                                                            <div class="col-6">
                                                                <button class="btn btn-secondary" style="width: 36px; background-color: #E4E4E4; border-width: 0px;
                                                                    height: 36px;
                                                                    padding: 8px;
                                                                    border-radius: 58px;
                                                                    gap: 8px;
                                                                    ">
                                                                    <h6
                                                                        style="margin-left: 3px; margin-top: -5px; width: 12px; color: #9C9C9C;">
                                                                        -</h6>
                                                                </button>
                                                                <span style=" color: #19191C; margin-top: 10px;
                                                                    font-family: Poppins;
                                                                    font-size: 20px;
                                                                    font-weight: 600;
                                                                    line-height: 20px;
                                                                    letter-spacing: 0px;
                                                                    text-align: left;
                                                                    ">1</span>
                                                                <button class="btn btn-secondary" style="width: 36px; background-color: #19191C; border-width: 0px;
                                                                    height: 36px;
                                                                    padding: 8px;
                                                                    border-radius: 58px;
                                                                    gap: 8px;
                                                                    ">
                                                                    <h6
                                                                        style="margin-left: 3px; margin-top: -5px; width: 12px; color: #fff;">
                                                                        +</h6>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-1"></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-1"></div>
                                                <div class="col-10">
                                                    <hr style="color: #E4E4E4;">
                                                </div>
                                                <div class="col-1"></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-1"></div>
                                                <div class="col-3">
                                                    <img src="./Images/Placeholder (2).png" alt="">
                                                </div>
                                                <div class="col-8">
                                                    <div class="container-fluid">
                                                        <div class="row">
                                                            <div class="col-12">
                                                                <h6 style="color: #19191C;
                                                                    font-family: Poppins;
                                                                    font-size: 16px;
                                                                    font-weight: 600;
                                                                    line-height: 24px;
                                                                    letter-spacing: 0px;
                                                                    text-align: left;
                                                                    ">Mie kuah pedas</h6>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-6">
                                                                <h6 style="font-family: Poppins;
                                                                    font-size: 12px;
                                                                    font-weight: 400;
                                                                    line-height: 16px;
                                                                    letter-spacing: 0px;
                                                                    text-align: left;
                                                                    color: #9C9C9C;
                                                                    ">Price</h6>
                                                                <h6 style="color: #FF5C00; 
                                                                    font-family: Poppins;
                                                                    font-size: 16px;
                                                                    font-weight: 600;
                                                                    line-height: 24px;
                                                                    letter-spacing: 0px;
                                                                    text-align: left;
                                                                    ">$ 11.21</h6>
                                                            </div>
                                                            <div class="col-6">
                                                                <button class="btn btn-secondary" style="width: 36px; background-color: #E4E4E4; border-width: 0px;
                                                                    height: 36px;
                                                                    padding: 8px;
                                                                    border-radius: 58px;
                                                                    gap: 8px;
                                                                    ">
                                                                    <h6
                                                                        style="margin-left: 3px; margin-top: -5px; width: 12px; color: #9C9C9C;">
                                                                        -</h6>
                                                                </button>
                                                                <span style=" color: #19191C; margin-top: 10px;
                                                                    font-family: Poppins;
                                                                    font-size: 20px;
                                                                    font-weight: 600;
                                                                    line-height: 20px;
                                                                    letter-spacing: 0px;
                                                                    text-align: left;
                                                                    ">1</span>
                                                                <button class="btn btn-secondary" style="width: 36px; background-color: #19191C; border-width: 0px;
                                                                    height: 36px;
                                                                    padding: 8px;
                                                                    border-radius: 58px;
                                                                    gap: 8px;
                                                                    ">
                                                                    <h6
                                                                        style="margin-left: 3px; margin-top: -5px; width: 12px; color: #fff;">
                                                                        +</h6>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-1"></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-1"></div>
                                                <div class="col-10">
                                                    <hr style="color: #E4E4E4;">
                                                </div>
                                                <div class="col-1"></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-1"></div>
                                                <div class="col-3">
                                                    <h6 class="h6-5" style="  color: #828487;
                                                        font-family: Poppins;
                                                        font-size: 16px;
                                                        font-weight: 400;
                                                        line-height: 24px;
                                                        letter-spacing: 0px;
                                                        text-align: left;">
                                                        Sub Total
                                                    </h6>
                                                </div>
                                                <div class="col-4"></div>
                                                <div class="col-3">
                                                    <h6 class="h6-6">$ 62.13</h6>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-1"></div>
                                                <div class="col-3">
                                                    <h6 class="h6-5" style="  color: #828487;
                                                        font-family: Poppins;
                                                        font-size: 16px;
                                                        font-weight: 400;
                                                        line-height: 24px;
                                                        letter-spacing: 0px;
                                                        text-align: left;">
                                                        Tax (10%)
                                                    </h6>
                                                </div>
                                                <div class="col-4"></div>
                                                <div class="col-3">
                                                    <h6 class="h6-6">$ 1.87</h6>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-1"></div>
                                                <div class="col-10">
                                                    <h5 style="color: #E4E4E4;">------------------------------------</h5>
                                                </div>
                                                <div class="col-1"></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-1"></div>
                                                <div class="col-3">
                                                    <h6 class="h6-5" style="  color: #828487;
                                                        font-family: Poppins;
                                                        font-size: 16px;
                                                        font-weight: 400;
                                                        line-height: 24px;
                                                        letter-spacing: 0px;
                                                        text-align: left;">
                                                        Total
                                                    </h6>
                                                </div>
                                                <div class="col-4"></div>
                                                <div class="col-3">
                                                    <h6 class="h6-7">$ 64.00</h6>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-1"></div>
                                                <div class="col-10">
                                                    <button class="btn btn-danger bbd-2" style="background-color: #FF5C00;
                                                        width: 362px;
                                                        height: 48px;
                                                        padding: 12px;
                                                        border-radius: 58px;
                                                        gap: 10px;">
                                                        <h6 class="h6-8" style="margin-left: 150px;
                                                            color: #FFFFFF;
                                                            font-family: Poppins;
                                                            font-size: 16px;
                                                            font-weight: 600;
                                                            line-height: 24px;
                                                            letter-spacing: 0px;
                                                            text-align: left;">Pay Now</h6>
                                                    </button>
                                                </div>
                                                <div class="col-1"></div>
                                            </div>
                                            <div class="row" style="height: 30px;">
                                                <div class="col-12"></div>
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
.mf {
    width: 380px;
    height: 947px;
    border: 0px 0px 0px 1px
}

.modal-dialog-color {

    height: 100%;
    background-color: white;
}

.bbp-1 {
    background-color: #F8F9FD;
    width: 312px;
    height: 44px;
    padding: 4px;
    border-radius: 80px;
}

.bbp-1:hover {
    background-color: #F8F9FD;
    width: 312px;
    height: 44px;
    padding: 4px;
    border-radius: 80px;
}

.bbp-2 {
    background-image: #FFFFFF;
    border-radius: 40px;
    width: 152px;
    height: 36px;
    padding: 8px 16px 8px 16px;
    border-radius: 40px;
    gap: 10px;
}

.h6-1 {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
    color: #19191C;
}

.bbp-1:hover {
    border-width: 2px;
    border-color: blue;
    background-color: #F8F9FD;
}

.bbp-2::after {
    border-width: 2px;
    border-color: blue;
    background-color: #F8F9FD;
}

.bbp-2:hover {
    border-width: 2px;
    border-color: blue;
    background-color: #F8F9FD;
}

.bbp-2::after {
    border-width: 2px;
    border-color: blue;
    background-color: #F8F9FD;
}

.h6-2 {
    color: #828487;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
}

.bbp-3 {
    margin-top: -80px;
    margin-left: 220px;
    background-color: #F8F9FD;
    border-radius: 40px;
    width: 152px;
    height: 36px;
    padding: 8px 16px 8px 16px;
    border-radius: 40px;
    gap: 10px;
}

.bbp-3:hover {
    margin-top: -80px;
    margin-left: 220px;
    background-color: #fff;
    border-radius: 40px;
    width: 152px;
    height: 36px;
    padding: 8px 16px 8px 16px;
    border-radius: 40px;
    gap: 10px;
}

.h6-3 {
    margin-left: 35px;
    color: #19191C;
    font-family: Poppins;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0px;
    text-align: left;
}

.bbd-1 {
    width: 312px;
    height: 48px;
    padding: 12px 24px 12px 24px;
    border-radius: 58px;
    gap: 10px;
}

.h6-4 {
    text-align: center;
    color: #FF5C00;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;

}

.h6-5 {
    color: #828487;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
}

.h6-6 {
    color: #19191C;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;

}

.h6-7 {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    color: #FF5C00;
}

.h6-8 {
    text-align: center;
    color: #FFFFFF;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
}

.bbd-2 {
    background-color: #FF5C00;
    width: 312px;
    height: 48px;
    padding: 12px;
    border-radius: 58px;
    gap: 10px;
}</style>