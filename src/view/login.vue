<template>
  <div class="container-fluid fon m-0">
    <div class="row d-flex  align-items-center " style="height: 100vh;">
      <div class="col-md-3  mx-auto">

        <div class="card shadow-2-strong" style="border-radius: 1rem">
          <div class="card-body p-3 card-sectionqwr">
            <div class="logo-section">
              <h2 class="coca-title">
                <img src="public/assets/images/icon/Vector.png" alt=" coca img" class="mb-2"  />
                <h3 class="login-title">sCafe - тизими</h3>
              </h2>
            </div>

            <div class="input-section">
              <div class="form-outline mb-3">

                <label class="ms-2 mb-1 d-flex align-items-center" for="edPhone">
                  <i class="fa-regular fa-user fa-lg"> </i> <span class="ms-2">Телефон </span> 
                </label>

                <input type="text" v-model="phoneNumber" id="edPhone" class="form-control form-control" placeholder="Enter phoneNumber " />
              </div>

              <div class="mb-3">

                <label class="ms-2 mb-1 d-flex align-items-center" for="edPassword">
                  <i class="fa-solid fa-key fa-lg"></i>  <span class="ms-2">Парол </span> 
                </label>

                <input type="password" class="form-control form-control" id="dPassword" placeholder="Enter password" />
              </div>
              
            </div>
            <button class="button button-color" @click="OnLogin()" type="submit">
              Тизимга кириш
            </button>
            <div class="user-agree">End user agreement</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<script setup>

import { ref } from "vue";
import router from "../router";
import dataService from "../services/data.service.js";

let phoneNumber = ref("998278960");
let password = ref("123456");

function OnLogin() {
  dataService.login(phoneNumber.value, password.value).then((data) => {
    if (data.isSuccess) router.push("/home");
  });
}

</script>


<style scoped>
.fon {
  background-image: url(../../../public/assets/images/Background.png);
  background-repeat: no-repeat;
  background-size: cover;
}


.myLabel {
 padding-left: 20px;
}

.card-1 {
  margin-left: -55rem;
}

.username {
  color: gray;
}

.login-title {
  font-size: 28px;
  font-weight: bold;  
  text-align: center;
  margin-bottom: 40px;
}

.sub-title {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: grey;
}

.subtitle-1 {
  text-align: center;
}

.coca-title {
  text-align: center;
  margin-bottom: 1rem;
  font-family: monospace;
}

.forgod-password {
  color: orange;
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

.input-section {
  width: Fixed (443px) px;
  height: Hug (200px) px;
  gap: 20px;
  opacity: 0px;
}

.username-wqrt {
  width: Fill (443px) px;
  height: Fixed (48px) px;
  padding: 12px 16px 12px 16px;
  gap: 10px;
  border-radius: 58px 0px 0px 0px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
}

.pasword-adsf {
  width: Fill (443px) px;
  height: Fixed (48px) px;
  padding: 12px 16px 12px 16px;
  gap: 10px;
  border-radius: 58px;
  border: 1px 0px 0px 0px;
  opacity: 0px;
}

.user-agree {
  margin-top: 2rem;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
}
</style>