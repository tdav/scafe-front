<script>
            const myModal = document.getElementById('myModal')
            const myInput = document.getElementById('myInput')

            myModal.addEventListener('shown.bs.modal', () => {
                myInput.focus()
            })
</script>
<script>
            const exampleModal = document.getElementById('exampleModal')
            if (exampleModal) {
            exampleModal.addEventListener('show.bs.modal', event => {
                // Button that triggered the modal
                const button = event.relatedTarget
                // Extract info from data-bs-* attributes
                const recipient = button.getAttribute('data-bs-whatever')
                // If necessary, you could initiate an Ajax request here
                // and then do the updating in a callback.

                // Update the modal's content.
                const modalTitle = exampleModal.querySelector('.modal-title')
                const modalBodyInput = exampleModal.querySelector('.modal-body input')

                modalTitle.textContent = `New message to ${recipient}`
                modalBodyInput.value = recipient
            })
            }
</script>

<template>
     <div class="container-fluid">
            <div class="row">
                <div class="col-4"></div>
                <div class="col-4">
                    <button type="button" class="btn btn-primary" class="btp1" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Dashboard</button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg mf-1" style="width: 450px;
                        height: 547px;
                        border: 0px 0px 0px 1px;">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 style="color: #19191C;" class="h5-1">Tip amount</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="container-fluid">
                                            
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="mb-3">
                                                        <input placeholder="                    Input amount" type="text" class="form-control fl-1"  id="recipient-name" style="border-radius: 5px; width: 422px; height: 78px; margin-left: -22px;">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6">
                                                    <button type="button" class="btn btn-body bbb-1" data-bs-dismiss="modal" style="border-radius: 58px; border-width: 2px; border-color: #FF5C00; width: 205px; margin-left: -20px; 
                                                    height: 48px;
                                                    ">
                                                    <h6 class="h6-1" style="text-align: center; margin-top: 3px;">Cancel</h6>
                                                    </button>
                                                </div>
                                                <div class="col-6">
                                                    <button class="btn btn btn-danger bbd-1" style="background-color: #FF5C00; width: 205px; border-width: 0px; margin-left: -10px;
                                                    height: 48px;
                                                    padding: 12px;
                                                    border-radius: 58px;
                                                    gap: 10px;">
                                                        <h4 class="h4-1" style="margin-left: 40px;
                                                        color: #FFFFFF;
                                                        font-family: Poppins;
                                                        font-size: 16px;
                                                        font-weight: 600;
                                                        line-height: 24px;
                                                        letter-spacing: 0px;
                                                        text-align: left;">Add tip amount</h4>
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
        .mf {
        width: 380px;
        height: 947px;
        border: 0px 0px 0px 1px
    }

    .modal-dialog-color{
    
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
    }
<style>