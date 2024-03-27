<template>

    <section class="vh-100" style="background: linear-gradient(to right, orange, red, blue);">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div class="card shadow-2-strong" style="border-radius: 1rem;">
                        <div class="card-body p-5">
                            <h3 class="mb-5">Sign in</h3>
                            <div class="form-outline mb-4">
                                <label class="form-label" for="typeEmailX-2">PhoneNumber</label>
                                <input type="text" v-model="phoneNumber" id="typeEmailX-2"
                                    class="form-control form-control-lg" />
                            </div>

                            <div class="form-outline mb-4">
                                <label class="form-label" for="typePasswordX-2">Password</label>
                                <input type="password" v-model="password" id="typePasswordX-2"
                                    class="form-control form-control-lg" />
                            </div>

                            <button class="btn btn-primary btn-lg btn-block" @click="OnLogin()"
                                type="submit">Login</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>



    </section>

</template>


<script setup>
import axios from "axios";
import router from "../router"
import { ref } from 'vue';
import dataService from "../services/data.service.js"


let phoneNumber = ref("998278960")
let password = ref("123456")


function OnLogin() {


    dataService.login(phoneNumber.value, password.value).then((data) => {
        if (data.isSuccess)
            router.push('/home')
    })

}

</script>


<style></style>