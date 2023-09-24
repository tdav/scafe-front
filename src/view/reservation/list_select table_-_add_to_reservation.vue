<template>
    <div>
        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered modal-dialog modal-xl" style="width: 656px; height: 620px;">
            <div class="modal-content" style="height: 100%;">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 h1-1" id="exampleModalToggleLabel">Guest detail</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div style="width: 622px; height: 70px;">
                        <p class="us m-0">Full name</p>
                        <input class="border border-1" placeholder="Enter name" type="text" style="width: 100%; height: 48px; border: #E4E4E4; border-radius: 100px;">
                    </div>
                    <div class="mt-2" style="width: 622px; height: 70px;">
                        <div style="width: 49%; height: 100%; display: inline-block;">
                            <p class="us m-0">Email</p>
                            <input class="border border-1" placeholder="Enter email address" type="text" style="width: 100%; height: 48px; border: #E4E4E4; border-radius: 100px;">
                        </div>
                        <div style="width: 50%; height: 100%; display: inline-block;">
                            <p class="us m-0">Phone number</p>
                            <input class="border border-1" placeholder="Enter phone number" type="text" style="width: 100%; height: 48px; border: #E4E4E4; border-radius: 100px;">
                        </div>
                    </div>
                    <div style="width: 622px; height: 70px;">
                        <p class="uss">Tag</p>
                        <div class="p-2 pt-1 border border-1" style="background-color: #ffeee6; border-radius: 100px; width: 55px; text-align: center; height: 36px; display: inline-block;">
                            <p class="m-0 ui">VIP</p>
                        </div>
                        <div class="p-2 pt-1 border border-1" style="border-radius: 100px; height: 36px; text-align: center; width: 90px; display: inline-block;">
                            <p class="m-0">Birthday</p>
                        </div>
                        <div class="p-2 pt-1 border border-1" style="background-color: #ffeee6; border-radius: 100px; height: 36px; text-align: center; width: 118px; display: inline-block;">
                            <p class="m-0 ui">Anniversary</p>
                        </div>
                        <div class="p-2 pt-1 border border-1" style="border-radius: 100px; height: 36px; text-align: center; width: 127px; display: inline-block;">
                            <p class="m-0">Private Dining</p>
                        </div>
                        <div class="p-2 pt-1 border border-1" style="border-radius: 100px; height: 36px; text-align: center; width: 96px; display: inline-block;">
                            <p class="m-0">First time</p>
                        </div>
                    </div>
                    <div style="height: 114px;" class="mt-2">
                        <p class="us m-0">Visite note</p>
                        <input class="border border-1" placeholder="Enter name" type="text" style="width: 100%; height: 92px; border: #E4E4E4; border-radius: 100px;">
                    </div>
                    <div style="height: 70px;" class="mt-2">
                        <div style="width: 49%; height: 100%; display: inline-block;">
                            <p class="us m-0">Taken by (Initials)</p>
                            <input class="border border-1" placeholder="Taken by" type="text" style="width: 100%; height: 48px; border: #E4E4E4; border-radius: 100px;">
                        </div>
                        <div style="width: 50%; height: 100%; display: inline-block;">
                            <p class="us m-0">Pager number</p>
                            <input class="border border-1" placeholder="Enter pager number" type="text" style="width: 100%; height: 48px; border: #E4E4E4; border-radius: 100px;">
                        </div>
                    </div>
                    <div class="mt-3">
                        <button class="btn border border-1  m-3 mx-0" style="display: inline-block; width: 49%; border-radius: 100px; height: 50px; background-color: white; color: #FF5C00;" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"><b>Cancel</b></button>
                        <button class="btn btn-darck mx-0 m-3 border border-1" style="display: inline-block; width: 50%; border-radius: 100px; height: 50px; background-color: #FF5C00; color: white;" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Add to reservation</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
            <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Add to order</button>
        </div>
    </div>
</template>

<style>
    .us{
    font-family: system-ui;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: left;
    color: #828487;
    }
    .uss{
        font-family: system-ui;
        font-size: 12px;
        font-weight: 500;
        line-height: 18px;
        letter-spacing: 0px;
        text-align: left;
        color: #828487;
    }

    .ui{
        color: #FF5C00;
        border: #FF5C00;
    }
</style>