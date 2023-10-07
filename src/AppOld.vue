<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="d-flex flex-column h-100">

    <header>
      <!-- Fixed navbar -->
      <nav class="navbar navbar-expand-md navbar fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">my sCafe</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              
              <li class="nav-item"> <a class="nav-link" href="/Login">Login</a></li>
              <li class="nav-item"> <a class="nav-link" href="/Dashboard">Dashboard</a></li>
              <li class="nav-item"> <a class="nav-link" href="PosWalkInAbsent">PosWalkInAbsent</a></li>
              <li class="nav-item"> <a class="nav-link" href="loginCashier">loginCashier</a></li>
              <li class="nav-item"> <a class="nav-link" href="AddNote">AddNote</a></li>
              <li class="nav-item"> <a class="nav-link" href="AdditonalOrder">AdditonalOrder</a></li>
              <li class="nav-item"> <a class="nav-link" href="DinningOption">DinningOption</a></li>
              <li class="nav-item"> <a class="nav-link" href="OrderConfirmation">OrderConfirmation</a></li>
              <li class="nav-item"> <a class="nav-link" href="Payment">Payment</a></li>
              <li class="nav-item"> <a class="nav-link" href="SelectTable">SelectTable</a></li>
              <li class="nav-item"> <a class="nav-link" href="TipAmount">TipAmount</a></li>
              <li class="nav-item"> <a class="nav-link" href="LoginCashierOrm">LoginCashierOrm</a></li>
              <li class="nav-item"> <a class="nav-link" href="LoginCashier">LoginCashier</a></li>
              <li class="nav-item"> <a class="nav-link" href="UpcomingOrders">UpcomingOrders</a></li>
              <li class="nav-item"> <a class="nav-link" href="WalkInAbsent">WalkInAbsent</a></li>
              <li class="nav-item"> <a class="nav-link" href="WalkInLoginCashier">WalkInLoginCashier</a></li>
              <li class="nav-item"> <a class="nav-link" href="NewReservation">NewReservation</a></li>
            
            </ul>
            
          </div>
        </div>
      </nav>
    </header>


    <div>
      <router-view />
    </div>

  </div>
</template>

<style scoped>
</style>
