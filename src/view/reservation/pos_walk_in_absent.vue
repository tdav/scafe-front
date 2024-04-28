<template>
    <div class="containe-fluid kjyfo">

        
        <div class="absent-items">
            <div class="absent-item">
                <img src="public/assets/images/Oval.png" alt="">
                <h6 class="name-color">Sarah Merry</h6>
            </div>
            
            <div class="absent-item">
                <img src="public/assets/images/Oval (1).png" alt="">
                <h6 class="name-color">Belly Eilsh</h6>
            </div>
            <div class="absent-item__active">
                <img src="public/assets/images/Oval (2).png" alt="">
                <h6 class="name-color">Mia bright</h6>
            </div>
            <div class="absent-item">
                <img src="public/assets/images/Oval (3).png" alt="">
                <h6 class="name-color"> John Bydon</h6>
            </div>
            <div class="absent-item">
                <img src="public/assets/images/Oval (4).png" alt="">
                <h6 class="name-color">Elon Musk</h6>
            </div>
        </div>
        <div class="absent-button">
            <button type="button" class="Clock-in__btn qwerty">
                Clock in
            </button>

            <button type="button" class="Clock-out__btn qwerty">
                Clock out
            </button>
                <br>
            <button type="button" class="Login-btn">
                Login
            </button>
        </div>
    </div>
</template>

<style>


.kjyfo{
    background-image: url(../../../public/assets/images/Background.absent.png);
    background-repeat: no-repeat;
    height: 45rem;
    margin-left: 3rem;
}

.absent-items{
    text-align: center;
    padding-top: 15rem;
    margin-left: -9rem;
    
}

.absent-item {
    opacity: 70%;
    padding-left: 4rem;
    font-size: 10px;
}

.absent-item__active {
    padding-left: 4rem;
}

.absent-items > div{
    width: Hug (844px)px;
    height: Hug (164px)px;
    top: 430px;
    left: 298px;
    gap: 80px;
    opacity: 0px;
    display: inline-block;
}

.absent-button {
    text-align: center;
    padding-top: 3rem;
    padding-left: -4rem;
    margin-left: -2rem;
}

.Clock-in__btn {
    display: inline-block;
    background-color:#FF5C00;
    color: white;
    height: 2.5rem;
    width: 9rem;
    border-radius: 58px;
    margin-right: 2rem;
    border: none;
}

.Clock-out__btn {
    background-color: white;
    color: #FF5C00;
    height: 2.5rem;
    width: 9rem;
    border-radius: 58px;
    border: none;
}

.Login-btn {
    
    background: #FFFFFF0A;
    backdrop-filter: blur(7px);
    color: #FF5C00;
    border-color: #FF5C00;
    height: 2.5rem;
    width: 18rem;
    border-radius: 58px;
    margin-top: 1rem;
}

.Clock-in__btn:active{
    background-color: white;
    color: #FF5C00;
}

.Clock-out__btn:active {
    background-color: #FF5C00;
    color: white;
}

.absent-item:hover {
    opacity: 100%;
    height: 2rem;
}

.name-color {
    color: white;
}

</style>