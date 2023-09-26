<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <button type="button" class="btn btn-primary btp1" data-bs-toggle="modal"
                    data-bs-target="#exampleModal" data-bs-whatever="@mdo">Reservation list</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div class="modal-dialog modal-lg  mf-1"
                        style=" width: 575px; height: 364px; border-radius: 16px; gap: 24px;">
                        <div class="modal-content">
                            <div class="modal-body">
                                <form>
                                    <div class="container-fluid">
                                        <div class="row">
                                            <div class="col-6">
                                                <h5 class="h5-5">Select date</h5>
                                            </div>
                                            <div class="col-5">
                                                <h5 class="h5-6">
                                                    March 2023
                                                </h5>

                                            </div>
                                            <div class="col-1">
                                                <img src="./Images/chevron-down.png" alt="" class="img-1">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="btn-group bg-1" role="group"
                                                    aria-label="Basic mixed styles example"
                                                    style=" width: 56px; background-color: #FFFFFF; border-color: #E4E4E4; height: 64px;">
                                                    <button type="button" class="btn btn-danger"
                                                        style="background-color: #FFFFFF; border-color: #E4E4E4; height: 56px; width: 64px; border-top-left-radius: 15px; border-bottom-left-radius: 15px;">
                                                        <img src="./Images/calendar.png" alt="calendar"
                                                            style="margin-top: -7px;">
                                                    </button>
                                                    <button type="button" class="btn btn-warning"
                                                        style="background-color: #FFFFFF; border-color: #E4E4E4; height: 56px; width: 64px;">
                                                        <div class="container">
                                                            <div class="row">
                                                                <div class="col-12">
                                                                    <h5 class="h5-1" style="margin-left: -8px;">Sun</h5>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-12">
                                                                    <h5 class="h5-2"
                                                                        style="margin-top: -15px;  margin-left: -6px;">5
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <button type="button" class="btn btn-warning "
                                                        style="background-color: #FFFFFF; border-color: #E4E4E4; height: 56px; width: 64px;">
                                                        <div class="container">
                                                            <div class="row">
                                                                <div class="col-12">
                                                                    <h5 class="h5-1" style="margin-left: -8px;">Mon</h5>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-12">
                                                                    <h5 class="h5-2"
                                                                        style="margin-top: -15px;  margin-left: -6px;">6
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <button type="button" class="btn btn-warning "
                                                        style="background-color: #FFF5EE; border-color: #E4E4E4; height: 56px; width: 64px;">
                                                        <div class="container">
                                                            <div class="row">
                                                                <div class="col-12">
                                                                    <h5 class="h5-1"
                                                                        style="margin-left: -8px; color: #FF7527;">Wed</h5>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-12">
                                                                    <h5 class="h5-2"
                                                                        style="margin-top: -15px;  margin-left: -6px; color: #FF7527;">
                                                                        7</h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <button type="button" class="btn btn-warning "
                                                        style="background-color: #FFFFFF; border-color: #E4E4E4; height: 56px; width: 64px;">
                                                        <div class="container">
                                                            <div class="row">
                                                                <div class="col-12">
                                                                    <h5 class="h5-1" style="margin-left: -8px;">Wed</h5>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-12">
                                                                    <h5 class="h5-2"
                                                                        style="margin-top: -15px;  margin-left: -6px;">8
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <button type="button" class="btn btn-warning "
                                                        style="background-color: #FFFFFF; border-color: #E4E4E4; height: 56px; width: 64px;">
                                                        <div class="container">
                                                            <div class="row">
                                                                <div class="col-12">
                                                                    <h5 class="h5-1" style="margin-left: -8px;">Thu</h5>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-12">
                                                                    <h5 class="h5-2"
                                                                        style="margin-top: -15px;  margin-left: -6px;">9
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <button type="button" class="btn btn-warning "
                                                        style="background-color: #FFFFFF; border-color: #E4E4E4; height: 56px; width: 64px;">
                                                        <div class="container">
                                                            <div class="row">
                                                                <div class="col-12">
                                                                    <h5 class="h5-1" style="margin-left: -8px;">Fri</h5>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-12">
                                                                    <h5 class="h5-2"
                                                                        style="margin-top: -15px;  margin-left: -10px;">10
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <button type="button" class="btn btn-warning "
                                                        style="background-color: #FFFFFF; border-color: #E4E4E4; height: 56px; width: 64px;">
                                                        <div class="container">
                                                            <div class="row">
                                                                <div class="col-12">
                                                                    <h5 class="h5-1" style="margin-left: -8px;">Set</h5>
                                                                </div>
                                                            </div>
                                                            <div class="row">
                                                                <div class="col-12">
                                                                    <h5 class="h5-2"
                                                                        style="margin-top: -15px;  margin-left: -10px;">11
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-5">
                                                <h6 class="h6-1">CUSTOMER NAME</h6>
                                            </div>
                                            <div class="col-3">
                                                <h6 class="h6-1">TIME</h6>
                                            </div>
                                            <div class="col-2">
                                                <h6 class="h6-1">TABLE</h6>
                                            </div>
                                            <div class="col-2">
                                                <h6 class="h6-1">ORDER</h6>
                                            </div>
                                        </div>


                                        <div class="row">
                                            <div class="col-12">
                                                <hr style="color: #E4E4E4; margin-top: -8px; border-width: 3px;">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-5">
                                                <h6 class="h6-2">Matilda R</h6>
                                            </div>
                                            <div class="col-3">
                                                <h6 class="h6-2">08:00 AM</h6>
                                            </div>
                                            <div class="col-2">
                                                <h6 class="h6-2">T-11</h6>
                                            </div>
                                            <div class="col-1"><img src="./Images/user.png" alt="" class="img-2"></div>
                                            <div class="col-1">
                                                <h6 class="h6-2">12</h6>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-12">
                                                <hr style="color: #E4E4E4; margin-top: -8px; border-width: 3px;">
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="col-5">
                                                <h6 class="h6-2">Margaret</h6>
                                            </div>
                                            <div class="col-3">
                                                <h6 class="h6-2">08:00 AM</h6>
                                            </div>
                                            <div class="col-2">
                                                <h6 class="h6-2">T-8</h6>
                                            </div>
                                            <div class="col-1"><img src="./Images/user.png" alt="" class="img-2"></div>
                                            <div class="col-1">
                                                <h6 class="h6-2">2</h6>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <hr style="color: #E4E4E4; margin-top: -8px; border-width: 3px;">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-5">
                                                <h6 class="h6-2">Joseph M</h6>
                                            </div>
                                            <div class="col-3">
                                                <h6 class="h6-2">08:00 AM</h6>
                                            </div>
                                            <div class="col-2">
                                                <h6 class="h6-2">T-7</h6>
                                            </div>
                                            <div class="col-1"><img src="./Images/user.png" alt="" class="img-2"></div>
                                            <div class="col-1">
                                                <h6 class="h6-2">2</h6>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <hr style="color: #E4E4E4; margin-top: -8px; border-width: 3px;">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-5">
                                                <h6 class="h6-2">Maikhel D</h6>
                                            </div>
                                            <div class="col-3">
                                                <h6 class="h6-2">08:00 AM</h6>
                                            </div>
                                            <div class="col-2">
                                                <h6 class="h6-2">T-8</h6>
                                            </div>
                                            <div class="col-1"><img src="./Images/user.png" alt="" class="img-2"></div>
                                            <div class="col-1">
                                                <h6 class="h6-2">2</h6>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <hr style="color: #E4E4E4; margin-top: -8px; border-width: 3px;">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-5">
                                                <h6 class="h6-2">Wesley</h6>
                                            </div>
                                            <div class="col-3">
                                                <h6 class="h6-2">08:00 AM</h6>
                                            </div>
                                            <div class="col-2">
                                                <h6 class="h6-2">T-7</h6>
                                            </div>
                                            <div class="col-1"><img src="./Images/user.png" alt="" class="img-2"></div>
                                            <div class="col-1">
                                                <h6 class="h6-2">2</h6>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <hr style="color: #E4E4E4; margin-top: -8px; border-width: 3px;">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-5">
                                                <h6 class="h6-2">Francis Eli</h6>
                                            </div>
                                            <div class="col-3">
                                                <h6 class="h6-2">08:00 AM</h6>
                                            </div>
                                            <div class="col-2">
                                                <h6 class="h6-2">T-7</h6>
                                            </div>
                                            <div class="col-1"><img src="./Images/user.png" alt="" class="img-2"></div>
                                            <div class="col-1">
                                                <h6 class="h6-2">2</h6>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <hr style="color: #E4E4E4; margin-top: -8px; border-width: 3px;">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-5">
                                                <h6 class="h6-2">John Sparrow</h6>
                                            </div>
                                            <div class="col-3">
                                                <h6 class="h6-2">08:00 AM</h6>
                                            </div>
                                            <div class="col-2">
                                                <h6 class="h6-2">T-7</h6>
                                            </div>
                                            <div class="col-1"><img src="./Images/user.png" alt="" class="img-2"></div>
                                            <div class="col-1">
                                                <h6 class="h6-2">2</h6>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <hr style="color: #E4E4E4; margin-top: -8px; border-width: 3px;">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-5">
                                                <h6 class="h6-2">Cecilia F</h6>
                                            </div>
                                            <div class="col-3">
                                                <h6 class="h6-2">08:00 AM</h6>
                                            </div>
                                            <div class="col-2">
                                                <h6 class="h6-2">T-7</h6>
                                            </div>
                                            <div class="col-1"><img src="./Images/user.png" alt="" class="img-2"></div>
                                            <div class="col-1">
                                                <h6 class="h6-2">2</h6>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <hr style="color: #E4E4E4; margin-top: -8px; border-width: 3px;">
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-5">
                                                <h6 class="h6-2">Rodnew</h6>
                                            </div>
                                            <div class="col-3">
                                                <h6 class="h6-2">08:00 AM</h6>
                                            </div>
                                            <div class="col-2">
                                                <h6 class="h6-2">T-7</h6>
                                            </div>
                                            <div class="col-1"><img src="./Images/user.png" alt="" class="img-2"></div>
                                            <div class="col-1">
                                                <h6 class="h6-2">2</h6>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <hr style="color: #E4E4E4; margin-top: -8px; border-width: 3px;">
                                            </div>
                                        </div>
                                        <div class="rov">
                                            <div class="col-12">
                                                <button class="btn btn-danger bbd-32" style="width: 500px; border-width: 0px;
                                                    height: 48px;
                                                    background-color: #FF5C00;
                                                    border-radius: 58px;">
                                                    <h6 class="h6-4" style="text-align: center; margin-top: 5px;">
                                                        Add new reservation
                                                    </h6>
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

.h5-1 {
    margin-left: -5px;
    font-family: Poppins;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: center;
    color: #9C9C9C;
}

.h5-5 {
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    color: #828487;
}

.h5-6 {
    color: #828487;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: right;
}

.img-1 {
    margin-left: -20px;
    margin-top: -17px;
}

.h6-1 {
    margin-top: 40px;
    font-family: Poppins;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: left;
    color: #9C9C9C;
}

.h6-2 {
    color: #19191C;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
}

.img-2 {
    margin-top: -18px;
    margin-left: 18px;
}

.bbd-32 {
    width: 455px;
    height: 48px;
    background-color: #FF5C00;
    border-radius: 58px;
}

.h6-4 {
    text-align: center;
    color: #FFFFFF;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;

}
</style>

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