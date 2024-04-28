<template>
    <div>

        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo
        </button>

        <!-- Modal -->
        <div class="modal fade modal-dialog modal-lg" id="exampleModal" tabindex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Add customers</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">

                        <div class="container-fluid">
                            <div class="row mb-2">

                                <div class="col-6">
                                    <span class="mb-2"
                                        style="display: block; font-size: 12px; color: #828487;">Name</span>
                                    <div class="input-group flex-nowrap">
                                        <input style="border-radius: 30px;" type="text" class="form-control" placeholder="Enter name"
                                            aria-label="Username" aria-describedby="addon-wrapping">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <span class="mb-2" style="display: block; font-size: 12px; color: #828487;">Delivery
                                        area</span>
                                    <div class="input-group flex-nowrap">
                                        <input style="border-radius: 30px;" type="text" class="form-control" placeholder="Enter delivery area"
                                            aria-label="Username" aria-describedby="addon-wrapping">
                                    </div>
                                </div>

                            </div>
                            <div class="row mb-2">

                                <div class="col-6">
                                    <span class="mb-2" style="display: block; font-size: 12px; color: #828487;">Phone
                                        number</span>
                                    <div class="input-group flex-nowrap">
                                        <input type="text" style="border-radius: 30px;" class="form-control" placeholder="Enter phone number"
                                            aria-label="Username" aria-describedby="addon-wrapping">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <span class="mb-2" style="display: block; font-size: 12px; color: #828487;">Select
                                        Location/Branch</span>
                                    <div class="dropdown ms-1" style="display: inline-block;">
                                        <button class="dropdown-toggle" type="button" id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown" aria-expanded="false"
                                            style="border: #d9d9d9  solid 1px; height: 35px; width: 355px; background-color: white; border-radius: 30px;">
                                            Select location/Branch
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Select location/Branch</a></li>
                                            <li><a class="dropdown-item" href="#">Censel location/Branch</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div class="row mb-2">

                                <div class="col-6">
                                    <span class="mb-2"
                                        style="display: block; font-size: 12px; color: #828487;">Email</span>
                                    <div class="input-group flex-nowrap">
                                        <input type="text" style="border-radius: 30px;" class="form-control" placeholder="Enter email address"
                                            aria-label="Username" aria-describedby="addon-wrapping">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <span class="mb-2"
                                        style="display: block; font-size: 12px; color: #828487;">Building</span>
                                    <div class="input-group flex-nowrap">
                                        <input type="text" style="border-radius: 30px;" class="form-control" placeholder="Enter building"
                                            aria-label="Username" aria-describedby="addon-wrapping">
                                    </div>
                                </div>

                            </div>
                            <div class="row mb-2">

                                <div class="col-6">
                                    <span class="mb-2"
                                        style="display: block; font-size: 12px; color: #828487;">Sex</span>
                                    <div class="dropdown ms-1" style="display: inline-block;">
                                        <button class="dropdown-toggle" type="button" id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown" aria-expanded="false"
                                            style="border: #d9d9d9  solid 1px; height: 35px; width: 355px; background-color: white; border-radius: 30px;">
                                            Male
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">FaMale</a></li>
                                            <li><a class="dropdown-item" href="#">Male</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <span class="mb-2"
                                        style="display: block; font-size: 12px; color: #828487;">Street</span>
                                    <div class="input-group flex-nowrap">
                                        <input type="text" style="border-radius: 30px;" class="form-control" placeholder="Enter street"
                                            aria-label="Username" aria-describedby="addon-wrapping">
                                    </div>
                                </div>

                            </div>
                            <div class="row mb-2">

                                <div class="col-6">
                                    <span class="mb-2" style="display: block; font-size: 12px; color: #828487;">Date of
                                        birth</span>
                                    <div class="dropdown ms-1" style="display: inline-block;">
                                        <button class="dropdown-toggle" type="button" id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown" aria-expanded="false"
                                            style="border: #d9d9d9  solid 1px; height: 35px; width: 116px; background-color: white; border-radius: 30px;">
                                            Day
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">1+</a></li>
                                            <li><a class="dropdown-item" href="#">50+</a></li>
                                            <li><a class="dropdown-item" href="#">100+</a></li>
                                        </ul>
                                    </div>

                                    <div class="dropdown ms-1" style="display: inline-block;">
                                        <button class="dropdown-toggle" type="button" id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown" aria-expanded="false"
                                            style="border: #d9d9d9  solid 1px; width: 115px; height: 35px; background-color: white; border-radius: 30px;">
                                            Month
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Yanvar</a></li>
                                            <li><a class="dropdown-item" href="#">Fevral</a></li>
                                            <li><a class="dropdown-item" href="#">Mart</a></li>
                                            <li><a class="dropdown-item" href="#">Aprel</a></li>
                                            <li><a class="dropdown-item" href="#">May</a></li>
                                            <li><a class="dropdown-item" href="#">Iyun</a></li>
                                            <li><a class="dropdown-item" href="#">Iyul</a></li>
                                            <li><a class="dropdown-item" href="#">Avgust</a></li>
                                            <li><a class="dropdown-item" href="#">Sentyabr</a></li>
                                            <li><a class="dropdown-item" href="#">Oktyabr</a></li>
                                            <li><a class="dropdown-item" href="#">Noyabr</a></li>
                                            <li><a class="dropdown-item" href="#">Dekabrt</a></li>
                                        </ul>
                                    </div>

                                    <div class="dropdown ms-1" style="display: inline-block;">
                                        <button class="dropdown-toggle" type="button" id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown" aria-expanded="false"
                                            style="border: #d9d9d9  solid 1px; width: 115px; height: 35px; background-color: white; border-radius: 30px;">
                                            Year
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">2009</a></li>
                                            <li><a class="dropdown-item" href="#">2020</a></li>
                                            <li><a class="dropdown-item" href="#">2024</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <span class="mb-2"
                                        style="display: block; font-size: 12px; color: #828487;">City</span>
                                    <div class="input-group flex-nowrap">
                                        <input type="text" style="border-radius: 30px;" class="form-control" placeholder="Enter city"
                                            aria-label="Username" aria-describedby="addon-wrapping">
                                    </div>
                                </div>

                            </div>
                            <div class="row mb-2">

                                <div class="col-6">
                                    <span class="mb-2" style="display: block; font-size: 12px; color: #828487;">Customer
                                        group</span>
                                    <div class="dropdown ms-1" style="display: inline-block;">
                                        <button class="dropdown-toggle" type="button" id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown" aria-expanded="false"
                                            style="border: #d9d9d9  solid 1px; height: 35px; width: 355px; background-color: white; border-radius: 30px;">
                                            Select customer group
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Select customer group</a></li>
                                            <li><a class="dropdown-item" href="#">Censel customer group</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <span class="mb-2"
                                        style="display: block; font-size: 12px; color: #828487;">Country</span>
                                    <div class="dropdown ms-1" style="display: inline-block;">
                                        <button class="dropdown-toggle" type="button" id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown" aria-expanded="false"
                                            style="border: #d9d9d9  solid 1px; height: 35px; width: 355px; background-color: white; border-radius: 30px;">
                                            Select country
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Select country</a></li>
                                            <li><a class="dropdown-item" href="#">Select countryubn</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" style="width: 100%; height: 48px; border-radius: 25px;"
                            class="btn btn-outline-warning">Primary</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>