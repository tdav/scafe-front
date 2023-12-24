<template >
    <div class="Nav_div1 border border-button p-3" style="padding: 0px;">
        <!--chap menyu-->
        <div class="Nav_container-fluir2 Nav_div2">
            <div class="container-fluid Nav_inline_divlar h-100">
                <div class="row h-100">
                    <div class="col-3" style="border-right: 1px solid ; height: 46px;">
                        <button type="button" class="Nav_button-div Nav_button-divHover mt-1 me-4">
                            <img src="../assets/images/nav/Nav_arrow-left.png" class="Nav_imgs-arrow-left" alt="">
                        </button>
                    </div>
                    <div class="col-8">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-4">
                                    <img src="../assets/images/nav/Nav_Vector.png" style="height: 40px; width: 40px;" alt="">
                                </div>
                                <div class="col-8">
                                    <div class="container-flud">
                                        <div class="row " style="float: left;">
                                          <b class="Nav_bold-style">Walk-In</b><br>
                                        </div>
                                        <div class="row " style="text-align: ; width: 131px;">
                                            <p class="Nav_Coca_coffeetalk-style">Coca coffeetalk</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--/chap menyu-->
        <!--asosiy menyu-->
        <img src="../src/assets/images/nav/Nav_home.png" class="me-1" alt="">
        <router-link class="router-link me-3 btn-1"  to="/" >Home</router-link>
        <img src="../assets/images/nav/Nav_note.png" class="me-1"  alt="">
        <router-link class="router-link me-3 btn-1"  to="/order" >Order</router-link>
        <img src="../assets/images/nav/Nav_clock.png" class="me-1"  alt="">
        <router-link class="router-link me-3 btn-1"  to="/History" >History</router-link>  
        <img src="../assets/images/nav/Nav_receipt.png" class="me-1"  alt="">
        <router-link class="router-link me-3 btn-1"  to="/Bill" >Bill</router-link>
        <button class="Nav_inline_divlar Nav_button-Dinning-Option">
        <div class="dropdown">
                            <a class="btn btn-secondary border border-0 dropdown-toggle show" style=" width: 144px; height: 36px; border-radius: 58px; background-color: #FFF5EE; color: #FF5C00;" href="#" role="button" id="aa" data-bs-toggle="dropdown" aria-expanded="true">
                                Dinning option
                            </a>
                    
                            <ul class="dropdown-menu show p-2" aria-labelledby="aa" data-popper-placement="bottom-start" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 40px);">
                                <li><a href=""><div class="dropdown-item border border-1 " id="aa" style="height: 40px; width: 100%; border-radius: 10px; background-color: #ffe5d1; border-color: #FF5C00;">
                                    <img src="imgs/dine in.png" alt="">
                                    <p style="display: inline-block; color: #FF5C00;">Dine in</p>
                                    <p class="border border-1 mt-1" style="rotate: -40deg; text-align: center; background-color:#FF5C00; color: white; display: inline-block; float: right;  height: 20px; width: 20px; border-radius: 100px; ">L</p>
                                </div></a></li>
                                <li><a href=""><div class="dropdown-item border border-1 " id="aa" style="height: 40px; width: 100%; border-radius: 10px; background-color: white; border-color: #FF5C00;">
                                    <img src="imgs/Icon.png" alt="">
                                    <p style="display: inline-block; font-size: 13px; color: rgb(204, 204, 204);">Take away</p>
                                    <p class="border border-1 mt-1" style="rotate: -40deg; text-align: center; background-color: white; display: inline-block; float: right;  height: 20px; width: 20px; border-radius: 100px; "></p>
                                </div></a></li>
                                <li><a href=""><div class="dropdown-item border border-1 " id="aa" style="height: 40px; width: 100%;; border-radius: 10px; background-color: white; border-color: #FF5C00;">
                                    <img src="imgs/delivery.png" alt="">
                                    <p style="display: inline-block;  color:  rgb(204, 204, 204);">Dine in</p>
                                    <p class="border border-1 mt-1" style="rotate: -40deg; text-align: center; background-color: white; display: inline-block; float: right;  height: 20px; width: 20px; border-radius: 100px; "></p>
                                </div></a></li>
                                <li><a href=""><div class="dropdown-item border border-1 " id="aa" style="height: 40px; width: 100%;; border-radius: 10px; background-color: white; border-color: #FF5C00;">
                                    <img src="imgs/event.png" alt="">
                                    <p style="display: inline-block; font-size: 11px; color:  rgb(204, 204, 204);">Reservation</p>
                                    <p class="border border-1 mt-1" style="rotate: -40deg; text-align: center; background-color: white; display: inline-block; float: right;  height: 20px; width: 20px; border-radius: 100px; "></p>
                                </div></a></li>
                                <div class="container-fluid w-100 m-0 p-0">
                                    <div class="row p-0 w-100 m-0">
                                        <button class=" col-6 border border-1 m-0" style=" border-radius: 50px; height: 35px; width: 49%; display: inline-block; background-color: white; color: #FF5C00; text-align: center;">Cancel</button>
                                        <button class=" col-6 border border-1 m-0" style="height: 35px; width: 50%; display: inline-block; border-radius: 50px; background-color: #FF5C00; color: white; text-align: center;">Apply</button>
                                    </div>
                                </div>
                            </ul>
        </div>

        </button>
        <!--/asosiy menyu-->
        <!--soat-->
        <div class="Nav_inline_divlar Nav_cass_date me-3">
            <div class="clock Nav_inline_divlar" style="font-size: 9px;">
                <div class="time">
                    <span class="hours m-0"></span>
                    <span class="separator m-0 mt-1">:</span>
                    <span class="minutes m-0"></span>
                    <span class="separator m-0  mt-1">:</span>
                    <span class="seconds  m-0"></span>
                </div>
            </div>
            <input class="Nav_date" type="date" value="2023-02-26">
        </div>
        <img class="rotate" src="./assets/images/nav/Nav_Profile.png" alt="rasm">
    </div>

    <router-view></router-view>

    
</template>


<script>
//soat

function updateTime() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  document.querySelector('.hours').textContent = hours;
  document.querySelector('.minutes').textContent = minutes;
  document.querySelector('.seconds').textContent = seconds;
}

setInterval(updateTime, 1000);{}
///soat


// import { ref, onMounted } from 'vue'

// let setActive = ref(false)

// function myFilter  ()  {
//     setActive.value =! setActive.value;
//     console.log(setActive);
// };

</script>


<style>
/*Nav*/
.my-active {
    color: #FFAB18 !important;
    gap: 8px !important;
    width: 77px;
    height: 78px;
    padding: 8px, 6px, 8px, 6px;
    border-radius: 8px;
    gap: 8px;
}

.Nav_button-divHover:hover{
    background-color: #f0f0f0;
}

.btn-1:active {
    color: #FFAB18;
    gap: 8px;
    width: 77px;
    height: 78px;
    padding: 8px, 6px, 8px, 6px;
    border-radius: 8px;
    gap: 8px;
}

.Nav_bold-style{
    text-align: start;
}

.Nav_Coca_coffeetalk-style{
    text-align: start;
    color: #828487;
    font-size: 14px;
    text-align: start;
}

.router-link{
    text-decoration: none;
    color: #828487;
}

.Nav_cass_date{
    background-color:#F8F9FD;
    border-radius: 30px;
    height: 36px;
    width: 241px;
}

.Nav_date{
    background-color: #F8F9FD;
    border: 0px; 
    font-size: 17px;
    font-weight: bold;
    width: 100px;
    margin-left: 1rem;
    margin-right: 1rem;
}

input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
}

.Nav_div2{
    float: left;
}

.Nav_container-fluir2{
    display: inline-block;
    width: 317px;
    height: 46px;
}

.Nav_chap-menu-div{
    float: left;
}

.Nav-container-fluit{
    width: 317px;
    height: 76px;
}

.Nav_ADNOC-Al-Dar-Sharj{
    font-size: 14px;
}

.Nav_button-div{
    height: 36px;
    width: 36px;
    border-radius: 50px;
    border: solid 1px;
    background-color: white;
}

.Nav_button-Dinning-Option{
    color: #ff6a00;
    background-color: #FFF5EE;
    border: none;
    border-radius: 30px;
    margin-right: 1rem;
}

.clock 
.time {
  display: flex;
  font-size: 1rem;
  font-weight: bold;
  color: #1a202c;
}

.separator {
  margin: 0 0.5rem;
}

.hours, .minutes, .seconds {
    display: inline-block;
    width: 1.5rem;
    text-align: center;
    color: #333;
    border-radius: 0.5rem;
    margin: 0 0.25rem;
    padding: 0.25rem;
}

.Nav_widht{
    height: 46px;
    width: 46px;
}

.Nav_imgs-arrow-left{
    height: 20px;
    width: 20px;
    float: right;
}

.Nav_button{
    height: 36px;
    width: 36px;
    border-radius: 50px;
    background-color: white;
    border-style: solid;
    border-width: 1px;
    float: left ;
}

.Nav_inline_divlar{
    display: inline-block;
}

.Nav_div1{
    height: 78px;
    text-align: right;
}
/*/Nav*/
</style>