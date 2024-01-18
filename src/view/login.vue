<script>
    
        // const myModal = document.getElementById('myModal')
        // const myInput = document.getElementById('myInput')

        // myModal.addEventListener('shown.bs.modal', () => {
        //     myInput.focus()
        // })

        
        //     const exampleModal = document.getElementById('exampleModal')
        //     if (exampleModal) {
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
        //     }

</script>


<template>
    <div class="container-fluid">
                <div class="row">
                    <div class="col-4"></div>
                    <div class="col-4">
                        <button type="button" class="btn btn-primary btp1" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Cola</button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg mf">
                                <div class="modal-content">
                                    
                                    <div class="modal-body">
                                        <form>
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-4"></div>
                                                    <div class="col-4">
                                                        <img src="./Images/black 2.png" alt="" class="img-1">
                                                    </div>
                                                    <div class="col-4"></div>
                                                </div>
                                                <div class="row" style="margin-top: 100px;">
                                                    <div class="col-4"></div>
                                                    <div class="col-4">
                                                        <h6 class="h6-1">
                                                            Login form
                                                        </h6>
                                                    </div>
                                                    <div class="col-4"></div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-12">
                                                        <h6 class="h6-2">
                                                            Lorem Ipsum has been the industry's standard dummy 
                                                        </h6>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-4"></div>
                                                    <div class="col-4">
                                                        <h6 class="h6-3">
                                                            text ever since.
                                                        </h6>
                                                    </div>
                                                    <div class="col-4"></div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-2"></div>
                                                    <div class="col-8">
                                                        <div class="mb-3">
                                                            <label for="recipient-name" class="col-form-label clf1">Username</label>
                                                            <input type="text" class="form-control fl3" style="border-radius: 58px; width:443px; height: 48px;" id="recipient-name" placeholder="    Enter password">
                                                        </div>
                                                    </div>
                                                    <div class="col-2"></div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-2"></div>
                                                    <div class="col-8">
                                                        <div class="mb-3">
                                                            <label for="recipient-name" class="col-form-label clf1">Password</label>
                                                            <input type="text" class="form-control fl2" style="border-radius: 58px;   width:443px; height: 48px;" id="recipient-name" placeholder="    Enter password">
                                                        </div>
                                                    </div>
                                                    <div class="col-2"></div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-2"></div>
                                                    <div class="col-8">
                                                        <h6 class="h6-5">
                                                            Forgot password?
                                                        </h6>
                                                    </div>
                                                    <div class="col-2"></div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-2"></div>
                                                    <div class="col-8">
                                                        <button type="button" class="btn btn-danger bbd1" style=" border-radius: 58px;  margin-left: 20px; border-width: opx;
                                                        background-color: #FF5C00;
                                                        width: 443px;
                                                        height: 48px;
                                                        padding: 12px;
                                                        border-radius: 58px;
                                                        gap: 10px;">
                                                            <h6 style="text-align: center; " class="h6-7">
                                                            Running order
                                                            </h6>
                                                        </button>
                                                    </div>
                                                    <div class="col-2"></div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-2"></div>
                                                    <div class="col-8">
                                                        <h6 class="h6-6">
                                                            End user agreement
                                                        </h6>
                                                    </div>
                                                    <div class="col-2"></div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4"></div>
    </div>
</template>

<style>
        body, html {
    height: 100%;
    }

    .mf {
    width: 619px;
    height: 686px;
    }
    
    .bg {
    /* The image used */
    background-image: url("./Background.png");
                    
    /* Full height */
    height: 100%;
                    
    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    }

    .modal-dialog-color{
    background-color: white;
    }

    .h6-1 {
    font-family: Poppins;
    font-size: 28px;
    font-weight: 600;
    line-height: 42px;
    letter-spacing: 0px;
    text-align: center;
    color: #19191C;
    }

    .img-1 {
    margin-left: 30px;
    }

    .h6-2 {
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: center;
    color: #828487;
    }

    .h6-3 {
    margin-top: -15px;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: center;
    color: #828487;
    }

    .clf1 {
    color: #828487;
    font-family: Poppins;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: left;
    }

    .h6-4 {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    color: #FF5C00;
    }

    .fl1 {
    width: 443px;
    height: 48px;
    padding: 12px 16px 12px 16px;
    border-width: 5px;
    border-color: #19191C;
    border-radius: 100px;
    border: 6px;
    gap: 10px;
    } 

    .fl3 {
    width:443px;
    height: 48px;
    padding: 12px 16px 12px 16px;
    border: 1px;
    gap: 10px;
    background-position: 12px;
    background-image:url('./Images/user1.png');
    background-repeat:no-repeat;
    }

    .fl2 {
    width:443px;
    height: 48px;
    padding: 12px 16px 12px 16px;
    border: 1px;
    gap: 10px;
    background-position: 12px;
    background-image:url('./Images/lock-close.png');
    background-repeat:no-repeat;
    }

    .h6-5 {
    margin-left: 15px;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    color: #FF5C00;
    }

    .mb-3 {
    margin-left: 18px;
    }

    .h6-6 {
    color: #828487;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: center;
    }

    .h6-7 {
    text-align: center;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    color: #FFFFFF;
    }


</style> 