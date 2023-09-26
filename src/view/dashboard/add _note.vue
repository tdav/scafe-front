<template>
    <div>
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
                tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 h1-1" id="exampleModalToggleLabel">Add order</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" style="height: 700px;">
                            <div class="cotainer-fluid">
                                <div class="p-2 row"
                                    style="height: 106px; width: 100%; background-color: #F8F9FD; border-radius: 12px;">
                                    <img class="col-4" src="imgs/Placeholder@2x.png" alt=""
                                        style="height: 100%; width: 27%; display: inline-block;">
                                    <div class="col-8 p-0" style="height: 100%; width: 73%;">
                                        <div class="p-0 cotainer-fluid h-100 w-100">
                                            <div class="row p-0 m-0" style="height: 100%; width: 100%;">
                                                <p class="p4">
                                                    <b>Steak sapi bakar</b>
                                                </p>
                                                <div style="line-height: 15px;">
                                                    <p class="m-0"
                                                        style="font-size: 12px; color: #9C9C9C; line-height: 5px; width: 60%; display: inline-block;">
                                                        Price</p>
                                                    <p class="ppp "
                                                        style="display: inline-block; text-align: left; width: 60%; font-size: 16px; line-height: 0px; color: #FF5C00;">
                                                        $ 25.12</p>
                                                    <div
                                                        style="display: inline-block; height: 36px; width: 36px; border-radius: 100px; background-color: #9C9C9C;">
                                                        <p style="margin-left: 40%; margin-top: 20%;" type="button">-</p>
                                                    </div>
                                                    <p class="mx-2" style="display: inline-block;">1</p>
                                                    <div
                                                        style="display: inline-block; height: 36px; width: 36px; border-radius: 100px; background-color: #000000;">
                                                        <p style="margin-left: 35%; margin-top: 20%; color: white;"
                                                            type="button">+</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style="height: 280px; width: 100%;">
                                <h4 style="height: 30px;">Additional</h4>
                                <div class="mt-4" style="height: 44px; width: 100%;">
                                    <img src="imgs/Placeholder2.png"
                                        style="display: inline-block; height: 60px; margin-top: -15px;" alt="">
                                    <div style="display: inline-block; width: 75%;">
                                        <p class="m-0 ms-2" style="display: inline-block; width: 70%;"><b>Rice</b></p>
                                        <p style="width: 100%;">$ 1.40</p>
                                    </div>
                                    <div
                                        style="display: inline-block; height: 36px; width: 36px; border-radius: 100px; background-color: #000000;">
                                        <p style="margin-left: 35%; margin-top: 20%; color: white;" type="button">+</p>
                                    </div>
                                </div>
                                <div class="mt-4" style="height: 44px; width: 100%;">
                                    <img src="imgs/Placeholder@3x.png"
                                        style="display: inline-block; height: 60px; margin-top: -15px;" alt="">
                                    <div style="display: inline-block; width: 60%;">
                                        <p class="m-0 ms-2" style="display: inline-block; width: 70%;"><b>Scramble egg</b>
                                        </p>
                                        <p style="width: 100%;">$ 1.60</p>
                                    </div>
                                    <div
                                        style="display: inline-block; height: 36px; width: 36px; border-radius: 100px; background-color: #9C9C9C;">
                                        <p style="margin-left: 40%; margin-top: 20%; " type="button">-</p>
                                    </div>
                                    <p class="mx-2" style="display: inline-block;">1</p>
                                    <div
                                        style="display: inline-block; height: 36px; width: 36px; border-radius: 100px; background-color: #000000;">
                                        <p style="margin-left: 35%; margin-top: 20%; color: white;" type="button">+</p>
                                    </div>
                                </div>
                                <div class="mt-4" style="height: 44px; width: 100%;">
                                    <img src="imgs/Placeholder-1.png"
                                        style="display: inline-block; height: 60px; margin-top: -15px;" alt="">
                                    <div style="display: inline-block; width: 75%;">
                                        <p class="m-0 ms-2" style="display: inline-block; width: 70%;"><b>Extra sauce</b>
                                        </p>
                                        <p style="width: 100%;">$ 0.87</p>
                                    </div>
                                    <div
                                        style="display: inline-block; height: 36px; width: 36px; border-radius: 100px; background-color: #000000;">
                                        <p style="margin-left: 35%; margin-top: 20%; color: white;" type="button">+</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <hr>
                                <p style="columns: #828487; display: inline; font-size: 12px; line-height: 18px;">Add note
                                </p>
                                <input class="border border-1" type="text"
                                    style="height: 142px; width: 442px; border-radius: 50px; border: #838383; "
                                    placeholder="Type your note here..">
                            </div>
                            <div class="modal-footer">
                                <div class="cotainer-fluid" style="width: 435px;">
                                    <div class="row">
                                        <div class="col-6">
                                            <p>Total</p>
                                            <p>
                                                <b>$ 26.52</b>
                                            </p>
                                        </div>
                                        <div class="col-6">
                                            <button class="btn btn-primary m-3"
                                                style="width: 100%; border-radius: 100px; height: 50px; background-color: #FF5C00; color: white;"
                                                data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Add to
                                                order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
                tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 h1-1" id="exampleModalToggleLabel">Add order</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body" style="height: 700px;">
                            <div class="cotainer-fluid">
                                <div class="p-2 row"
                                    style="height: 106px; width: 100%; background-color: #F8F9FD; border-radius: 12px;">
                                    <img class="col-4" src="imgs/Placeholder2.png" alt=""
                                        style="height: 100%; width: 27%; display: inline-block;">
                                    <div class="col-8 p-0" style="height: 100%; width: 73%;">
                                        <div class="p-0 cotainer-fluid h-100 w-100">
                                            <div class="row p-0 m-0" style="height: 100%; width: 100%;">
                                                <p class="p4">
                                                    <b>Steak sapi bakar</b>
                                                </p>
                                                <div style="line-height: 15px;">
                                                    <p class="m-0"
                                                        style="font-size: 12px; color: #9C9C9C; line-height: 5px; width: 60%; display: inline-block;">
                                                        Price</p>
                                                    <p class="ppp "
                                                        style="display: inline-block; text-align: left; width: 60%; font-size: 16px; line-height: 0px; color: #FF5C00;">
                                                        $ 1.40</p>
                                                    <div
                                                        style="display: inline-block; height: 36px; width: 36px; border-radius: 100px; background-color: #9C9C9C;">
                                                        <p style="margin-left: 40%; margin-top: 20%; " type="button">-</p>
                                                    </div>
                                                    <p class="mx-2" style="display: inline-block;">1</p>
                                                    <div
                                                        style="display: inline-block; height: 36px; width: 36px; border-radius: 100px; background-color: #000000;">
                                                        <p style="margin-left: 35%; margin-top: 20%; color: white;"
                                                            type="button">+</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style="height: 280px; width: 100%;">
                                <h4 style="height: 30px;">Additional</h4>
                                <div class="mt-4" style="height: 44px; width: 100%;">
                                    <img src="imgs/Placeholder@2x.png"
                                        style="display: inline-block; height: 60px; margin-top: -15px;" alt="">
                                    <div style="display: inline-block; width: 75%;">
                                        <p class="m-0 ms-2" style="display: inline-block; width: 70%;"><b>Rice</b></p>
                                        <p style="width: 100%;">$ 25.12</p>
                                    </div>
                                <div
                                    style="display: inline-block; height: 36px; width: 36px; border-radius: 100px; background-color: #000000;">
                                    <p style="margin-left: 35%; margin-top: 20%; color: white;" type="button">+</p>
                                </div>
                            </div>
                            <div class="mt-4" style="height: 44px; width: 100%;">
                                <img src="imgs/Placeholder@3x.png"
                                    style="display: inline-block; height: 60px; margin-top: -15px;" alt="">
                                <div style="display: inline-block; width: 60%;">
                                    <p class="m-0 ms-2" style="display: inline-block; width: 70%;"><b>Scramble egg</b>
                                    </p>
                                    <p style="width: 100%;">$ 1.60</p>
                                </div>
                                <div
                                    style="display: inline-block; height: 36px; width: 36px; border-radius: 100px; background-color: #9C9C9C;">
                                    <p style="margin-left: 40%; margin-top: 20%; " type="button">-</p>
                                </div>
                                <p class="mx-2" style="display: inline-block;">1</p>
                                <div
                                    style="display: inline-block; height: 36px; width: 36px; border-radius: 100px; background-color: #000000;">
                                    <p style="margin-left: 35%; margin-top: 20%; color: white;" type="button">+</p>
                                </div>
                            </div>
                            <div class="mt-4" style="height: 44px; width: 100%;">
                                <img src="imgs/Placeholder-1.png"
                                    style="display: inline-block; height: 60px; margin-top: -15px;" alt="">
                                <div style="display: inline-block; width: 75%;">
                                    <p class="m-0 ms-2" style="display: inline-block; width: 70%;"><b>Extra sauce</b>
                                    </p>
                                    <p style="width: 100%;">$ 0.87</p>
                                </div>
                                <div
                                    style="display: inline-block; height: 36px; width: 36px; border-radius: 100px; background-color: #000000;">
                                    <p style="margin-left: 35%; margin-top: 20%; color: white;" type="button">+</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <hr>
                            <p style="columns: #828487; display: inline; font-size: 12px; line-height: 18px;">Add note
                            </p>
                            <input type="text"
                                style="height: 142px; width: 442px; border-radius: 50px; border: #838383; "
                                placeholder="Type your note here..">
                        </div>
                        <div class="modal-footer">
                            <div class="cotainer-fluid" style="width: 435px;">
                                <div class="row">
                                    <div class="col-6">
                                        <p>Total</p>
                                        <p>
                                            <b>$ 26.52</b>
                                        </p>
                                    </div>
                                    <div class="col-6">
                                        <button class="btn btn-primary m-3" data-bs-target="#exampleModalToggle"
                                            data-bs-toggle="modal"
                                            style="width: 100%; border-radius: 100px; height: 50px; background-color: #FF5C00; color: white;">Back to first</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Add to order</button>
    </div>
</div></template>
