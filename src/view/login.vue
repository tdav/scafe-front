<template>
  <section class="vh-100 jhbsdfk">
    <div class="container py-8 ">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-10 col-lg-6 col-xl-5 card-1">
          <div class="card shadow-2-strong" style="border-radius: 1rem">
            <div class="card-body p-3 card-sectionqwr">
              <div class="logo-section">
                <h2 class="coca-title">
                  <img
                    src="public/assets/images/icon/Vector.png"
                    alt=" coca img">
                  Coca
                </h2>
              </div>
              <h3 class="login-title">Login form</h3>
              <div class="sub-title">
                Lorem Ipsum has been the industry's standard dummy text
                <p class="subtitle-1">ever since the 1500s.</p>
              </div>
              <div class="input-section">
                <div class="form-outline mb-3">
                  <label class="form-label username" for="typeEmailX-2"
                    >phonenumber</label
                  >
                  <input
                    type="text"
                    v-model="phoneNumber"
                    id="typeEmailX-2"
                    class="form-control form-control-lg" username-wqrt
                    placeholder="Enter phoneNumber ">
                </div>

                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label password"
                    >Password</label >
                    <img src="public/assets/images/icon/lock-close.png" alt="">
                  <input
                    type="password"
                    class="form-control pasword-adsf"
                    id="exampleInputPassword1"
                    placeholder="Enter password">
                </div>
                <div>
                  <a href="#" class="forgod-password">Forgot password?</a>
                </div>
              </div>
              <button
                class="button button-color"
                @click="OnLogin()"
                type="submit"
              >
                Running order
              </button>
              <div class="user-agree">
                End user agreement
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import axios from "axios";
import router from "../router";
import { ref } from "vue";
import dataService from "../services/data.service.js";

let phoneNumber = ref("998278960");
let password = ref("123456");

function OnLogin() {
  dataService.login(phoneNumber.value, password.value).then((data) => {
    if (data.isSuccess) router.push("/home");
  });
}
</script>


<style>
.jhbsdfk{
    background-image: url(../../../public/assets/images/Background.png);
    background-repeat: no-repeat;
    margin-left: 2rem;
    margin-right: ;
}
.password {
    color: grey;
    font-family: Poppins;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    text-align: left;

}

.card-1 {
  margin-left: -55rem;
}

.username {
    color: gray;
    font-family: Poppins;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    text-align: left;

}

.login-title {
  font-family: Poppins;
  font-size: 28px;
  font-weight: 600;
  line-height: 42px;
  text-align: center;
}
.sub-title {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
}

.subtitle-1 {
  text-align: center;
}


.coca-title {
  text-align: center;
  margin-bottom: 6rem;
  font-family: monospace;
  margin-left: -3rem;
}

.forgod-password {
    color: orange;
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
    line-height: 19.6px;
    text-align: left;
    text-decoration: none;

}

.button-color {
  background-color: #ff5c00;
  color: white;
  height: 48px;
  width: 100%;
  margin-top: 1rem;
  border: none;
  border-radius: 58px;
}

.input-section{
    width: Fixed (443px)px;
    height: Hug (200px)px;
    gap: 20px;
    opacity: 0px;
}

.username-wqrt {
    width: Fill (443px)px;
    height: Fixed (48px)px;
    padding: 12px 16px 12px 16px;
    gap: 10px;
    border-radius: 58px 0px 0px 0px;
    border: 1px 0px 0px 0px;
    opacity: 0px;
}

.pasword-adsf {
    width: Fill (443px)px;
    height: Fixed (48px)px;
    padding: 12px 16px 12px 16px;
    gap: 10px;
    border-radius: 58px 0px 0px 0px;
    border: 1px 0px 0px 0px;
    opacity: 0px;
}   

.user-agree {
    margin-top: 6rem;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    margin-left: -1rem;

}

.card-sectionqwr {
    margin-bottom: 3 rem;
}


</style>