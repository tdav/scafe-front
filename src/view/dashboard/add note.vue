<script>
    const myModal = document.getElementById('myModal')
    const myInput = document.getElementById('myInput')

    myModal.addEventListener('shown.bs.modal', () => {
        myInput.focus()
    })

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
                    <button type="button" class="btn btn-primary" class="btp1" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Dashboard add note</button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg  mf-1"style=" width: 470px; height: 364px; border-radius: 16px; gap: 24px;">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 style="color: #19191C;" class="h5-2">Add note</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="container-fluid">
                                            <div class="row">
                                                <div class="col-4">
                                                    <h5 class="h5-1">Enter order note</h5>
                                                </div>
                                                <div class="col-8"></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="mb-3">
                                                        <input placeholder="Write your order note here..." type="text" class="form-control fl-1"  id="recipient-name" style="border-radius: 58px;">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-6">
                                                    <button type="button" class="btn btn-body bbb-1" data-bs-dismiss="modal" style="border-radius: 58px; border-width: 2px; border-color: #FF5C00; width: 205px;
                                                    height: 48px;
                                                    ">
                                                    <h6 class="h6-1" style="text-align: center; margin-top: 3px;">Cancel</h6>
                                                    </button>
                                                </div>
                                                <div class="col-6">
                                                    <button class="btn btn btn-danger bbd-1" style="background-color: #FF5C00; width: 205px; border-width: 0px;
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
                                                        text-align: left;">Add to order</h4>
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
    .h6-1 {
        font-family: Poppins;
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
        letter-spacing: 0px;
        text-align: left;
        color: #19191C;
    }
</style>


