<template>
    <div>
        <div class="pos_walk_in_absent container4">
        <ul class="nav nav-tabs border border-0" style="justify-content: center;">
            <li class="nav-item">
              <img src="imgs/Oval1.png" class="nav-link Oval" aria-current="page">
              <p class="Nirmala_Azalea">Beby Jovancy</p>
            </li>
            <li class="nav-item">
              <img src="imgs/Oval.png" class="nav-link Oval" aria-current="page">
              <p class="Nirmala_Azalea">Aisyah Zidni</p>
            </li>
            <li class="nav-item">
              <img src="imgs/Oval3.png" class="nav-link Oval img-person-active" aria-current="page">
              <p class="Nirmala_Azalea">Nirmala Azalea</p>
            </li>
            <li class="nav-item">
              <img src="imgs/Oval4.png" class="nav-link Oval" aria-current="page">
              <p class="Nirmala_Azalea">Bena Kane</p>
            </li>
            <li class="nav-item">
              <img src="imgs/Oval5.png" class="nav-link Oval" aria-current="page">
              <p class="Nirmala_Azalea">Firmino Kudo</p>
            </li>
        </ul>
        <div class="div">
            <button type="button" style="border-style: none; width: 172px; height: 48px; background-color: rgb(255, 124, 77); border-radius: 100px; text-align: center;">
                <p class="p1 m-2">Clock in</p>
            </button>
            <button type="button" style="border-style: none; width: 172px; height: 48px; background-color: rgb(255, 255, 255); border-radius: 100px; text-align: center;">
                <p class="p2 m-2">Clock out</p>
            </button>
        </div>
        <div class="div mt-2">
            <button type="button" class="fff" style="border-color: #FF5C00;">
                <a href="POS_walk_in_login_cashier.html" class="p1 m-2" style="color: rgb(255, 124, 77); ">Login</a>
            </button>
        </div>
        </div>
    </div>
</template>

<style scoped>
    .pos_walk_in_absent {
        width: 844px;
        height: 164px;
    }


    .container4 {
        height: 10em;
        position: relative
    }

    .p1{
        color: white;
    }

    .p2{
        color:  rgb(255, 124, 76);
    }

    .fff{
        border-style: none; 
        width: 360px; 
        height: 48px; 
        border: 1px;
        border-radius: 100px; 
        text-align: center; 
        /* From https://css.glass */
        background: rgba(255, 255, 255, 0.15);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(7.3px);
        -webkit-backdrop-filter: blur(7.3px);
        border: 1px solid rgba(255, 255, 255, 0.34);
    }

    .div{
        text-align: center;
    }

    .container4 {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%)
    }

    .img-person-active
    {
        width: 160px;
    }

    .Nirmala_Azalea {
        color: white;
        text-align: center;
        font-family: Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: center;
        
    }
</style>