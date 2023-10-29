<template >
    <div>
        <div class="Nav_div1 p-3 border border-button">
            <div class="Nav_inline_divlar">
                <div class="Nav_inline_divlar Nav_widht border border-right">
                    <button class="Nav_button border border-right">
                        <img class="Nav_imgs-arrow-left" src="./assets/imgs/Nav_arrow-left.png" alt="">
                    </button>
                </div>
            </div>
            <router-link to="/">Home</router-link>
            <router-link to="/order">Order</router-link>
            <router-link to="/History">History</router-link>  
            <router-link to="/Bill">Bill</router-link>
            <button class="Nav_inline_divlar">Dinning Option</button>
            <input type="date" value="2023-02-26">
            <img class="rotate" src="./assets/imgs/Nav_Profile.png" alt="rasm">
        </div>
        <router-view></router-view>
    </div>
</template>


<script>
</script>


<style>
.Nav_widht{
    height: 36px;
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
}

.Nav_inline_divlar{
    display: inline;
}

.Nav_div1{
    height: 78px;
    background-color: antiquewhite;
    text-align: right;
}
</style>