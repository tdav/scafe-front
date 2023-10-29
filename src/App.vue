<template >
    <div>
        <div class="Nav_div1 p-3 border border-button">
            <!--chap menyu-->
            <div class="Nav_inline_divlar Nav_button-div">
                <button class="Nav_button border border-right">
                    <img class="Nav_imgs-arrow-left" src="./assets/imgs/Nav_arrow-left.png" alt="">
                </button>
            </div>
            <div class="Nav_inline_divlar">
                <div class="Nav_inline_divlar">
                    <img src="./assets/imgs/Nav_Vector.png" alt="">
                </div>
                <div class="Nav_inline_divlar">
                </div>
            </div>
            <!--/chap menyu-->
            <!--asosiy menyu-->
            <router-link to="/">Home</router-link>
            <router-link to="/order">Order</router-link>
            <router-link to="/History">History</router-link>  
            <router-link to="/Bill">Bill</router-link>
            <button class="Nav_inline_divlar">Dinning Option</button>
            <!--/asosiy menyu-->
            <!--soat-->
            <div class="clock Nav_inline_divlar">
                <div class="time">
                    <span class="hours"></span>
                    <span class="separator m-0 mt-1">:</span>
                    <span class="minutes"></span>
                    <span class="separator m-0  mt-1">:</span>
                    <span class="seconds"></span>
                </div>
            </div>
            <!--/soat-->
            <input type="date" value="2023-02-26">
            <img class="rotate" src="./assets/imgs/Nav_Profile.png" alt="rasm">
        </div>
        <router-view></router-view>
    </div>
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
</script>


<style>
.Nav_button-div{
    width: 50px;
    border-right: solid 1px;  
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
    background-color: antiquewhite;
    text-align: right;
}
</style>