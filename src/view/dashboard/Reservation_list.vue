<template>
    <div>
        <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight">Toggle right offcanvas</button>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="p-3 shadow-sm " style="height: 120px;">
                <div class="row">
                    <p class="m-0 col-6" style="display: block; color: #828487; font-size: 14px;">Select date</p>
                    <p class="m-0 col-6" style="display: block; text-align: end; color: #828487; font-size: 14px;">March
                        2023 <b style="font-size: 13px;">v</b></p>
                </div>
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group"
                    style="width: 365px; height: 55px">
                    <div class="btn-group" role="group" style="width: 40px;  color: #FF5C00;">
                        <button id="btnGroupDrop1"
                            style="content: none; border: solid 1px #e1e1e1; border-radius: 6px 0px 0px 6px; width: 40px; background-color: white;"
                            type="button" class="dropdown-toggle p-0" data-bs-toggle="dropdown" aria-expanded="false">
                            <img style="height: 20px; width: 20px;" src="../../../public/assets/images/calendar.png"
                                alt="">
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                            <li><a class="dropdown-item" href="#">ink</a></li>
                            <li><a class="dropdown-item" href="#">nk</a></li>
                        </ul>
                    </div>
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
                    <label class="btn btn-outline-check border border-1"
                        style="width: 40px; color: #FF5C00; padding-top: 7px;" for="btnradio2">
                        <p class="m-0" style="font-size: 12px; height: 15px; color: #828487">Sun</p> 5
                    </label>
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                    <label class="btn btn-outline-check border border-1"
                        style="width: 40px; color: #FF5C00; padding-top: 7px;" for="btnradio3">
                        <p class="m-0" style="font-size: 12px; height: 15px; color: #828487">Mon</p>6
                    </label>
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off">
                    <label class="btn btn-outline-check border border-1"
                        style="width: 40px; color: #FF5C00; padding-top: 7px;" for="btnradio4">
                        <p class="m-0" style="font-size: 12px; height: 15px; color: #828487">Tue</p>7
                    </label>
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off">
                    <label class="btn btn-outline-check border border-1"
                        style="width: 40px; color: #FF5C00; padding-top: 7px;" for="btnradio5">
                        <p class="m-0" style="font-size: 12px; height: 15px; color: #828487">thu</p>8
                    </label>
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio6" autocomplete="off">
                    <label class="btn btn-outline-check border border-1"
                        style="width: 40px; color: #FF5C00; padding-top: 7px;" for="btnradio6">
                        <p class="m-0" style="font-size: 12px; height: 15px; color: #828487">Wed</p>9
                    </label>
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio7" autocomplete="off">
                    <label class="btn btn-outline-check border border-1"
                        style="width: 40px; color: #FF5C00; padding-top: 7px;" for="btnradio7">
                        <p class="m-0" style="font-size: 12px; height: 15px; color: #828487">Fri</p>10
                    </label>
                    <input type="radio" class="btn-check" name="btnradio" id="btnradio8" autocomplete="off">
                    <label class="btn btn-outline-check border border-1"
                        style="width: 40px; color: #FF5C00; padding-top: 7px;" for="btnradio8">
                        <p class="m-0" style="font-size: 12px; height: 15px; color: #828487">Sat</p>11
                    </label>
                </div>
            </div>
            <div class="p-3" style="height: 400px;">
                <table class="table">
                    <thead>
                        <tr>
                            <td scope="row" style="color: #9C9C9C; font-size: 14px;">Rodnew</td>
                            <td style="color: #9C9C9C; font-size: 14px;">TIME</td>
                            <td style="color: #9C9C9C; font-size: 14px;">TABLE</td>
                            <td style="color: #9C9C9C; font-size: 14px;">ORDER</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Matilda R</th>
                            <td>08:00 AM</td>
                            <td>T-11</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <th scope="row">Margaret</th>
                            <td>08:00 AM</td>
                            <td>T-7</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <th scope="row">Joseph M</th>
                            <td>08:00 AM</td>
                            <td>T-7</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <th scope="row">Maikhel D</th>
                            <td>08:00 AM</td>
                            <td>T-7</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <th scope="row">Wesley</th>
                            <td>08:00 AM</td>
                            <td>T-7</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <th scope="row">Francis Eli</th>
                            <td>08:00 AM</td>
                            <td>T-7</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <th scope="row">John Sparrow</th>
                            <td>08:00 AM</td>
                            <td>T-7</td>
                            <td>12</td>
                        </tr>
                        <tr>
                            <th scope="row">Cecilia F</th>
                            <td>08:00 AM</td>
                            <td>T-7</td>
                            <td>12</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="p-3 pt-4" style="height: 120px;">
                <button type="button" style="width: 370px; height: 48px; border-radius: 25px;" class="btn btn-outline-warning">Primary</button>
            </div>
        </div>
    </div>
</template>

<style>
.td {
    font-size: 7px;
}
</style>
