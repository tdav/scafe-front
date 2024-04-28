<template>
    <div class="container">
        <div class="cotainer-fluid">
            <div class="p-2 row" style="height: 106px; width: 100%; background-color: #F8F9FD; border-radius: 12px;">
                <img class="col-1 p-0" src="../../../public/assets/images/ovqat rasm/Placeholder.png" alt=""
                    style="height: 100%; display: inline-block;">
                <div class="col-11 p-0" style="height: 100%;">
                    <div class="p-0 cotainer-fluid h-100 w-100">
                        <div class="row p-0 m-0" style="height: 100%; width: 100%;">
                            <p class="p4">
                                <b>Steak sapi bakar</b>
                            </p>
                            <div style="line-height: 15px;">
                                <p class="m-0"
                                    style="font-size: 12px; color: #9C9C9C; line-height: 5px; width: 70%; display: inline-block;">
                                    Price</p>
                                <p class="ppp "
                                    style="display: inline-block; text-align: left; width: 87%; font-size: 16px; line-height: 0px; color: #FF5C00;">
                                    $ 25.2</p>
                                <div
                                    style="display: inline-block; height: 36px; width: 36px; border-radius: 100px; background-color: #9C9C9C; margin-left: -5px;">
                                    <p type="button" style="margin-left: 40%; margin-top: 20%;"
                                        @click="changeSteakQuantity(-1)">-</p>
                                </div>
                                <p class="mx-2" style="display: inline-block;">{{ steakQuantity }}</p>
                                <div
                                    style="display: inline-block; height: 36px; width: 36px; border-radius: 100px; background-color: #000000;">
                                    <p type="button" style="margin-left: 35%; margin-top: 20%; color: white;"
                                        @click="changeSteakQuantity(1)">+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="height: 280px; width: 100%;">
            <h4 style="height: 30px;">Additional</h4>

            <!-- Additional items go here -->

            <div class="mt-4" style="height: 55px; width: 100%;" v-for="(item, index) in additionalItems" :key="index">
                <img class="col-1 p-0" src="../../../public/assets/images/Image1.png" alt=""
                    style="height: 70px; width: 70px; display: inline-block;">
                <div style="display: inline-block; width: 82%;">
                    <p class="m-0 ms-2" style="display: inline-block; width: 70%;"><b>{{ item.name }}</b>
                    </p>
                    <p style="width: 100%;">$ {{ item.price }}</p>
                </div>
                <div
                    style="display: inline-block; height: 36px; width: 36px; border-radius: 100px; background-color: #9C9C9C; margin-left: -5px;">
                    <p style="margin-left: 40%; margin-top: 20%; " @click="changeAdditionalQuantity(item, -1)">-</p>
                </div>
                <p class="mx-2" style="display: inline-block;">{{ item.quantity }}</p>
                <div class="align-items-center"
                    style="display: inline-block; height: 36px; width: 36px; background-color: #000000; border-radius: 100%;  text-align: center;">
                    <p style="margin-top: 8px; color: #FFFFFF;" @click="changeAdditionalQuantity(item, 1)">+</p>
                </div>
            </div>

        </div>
        <div>
            <hr>
            <p style="columns: #828487; display: inline; font-size: 12px; line-height: 18px;">Add note
            </p>
            <input class="border border-1" type="text"
                style="height: 45px; width: 95%; border-radius: 50px; border: #838383; "
                placeholder="Type your note here..">
        </div>
        <div class="cotainer-fluid p-0">
            <div class="row">
                <div class="col-1">
                    <p class="mt-3 m-0">Total</p>
                    <p>
                        <b>$ {{ total.toFixed(2) }}</b>
                    </p>
                </div>
                <div class="col-11">
                    <button class="btn btn-primary m-3"
                        style="width: 98%; border-radius: 100px; height: 50px; background-color: #FF5C00; color: white;"
                        data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Add to
                        order</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            steakQuantity: 0,
            total: 0,
            additionalItems: [
                { name: "jjqugftiuocqbxwj", price: 3.80, quantity: 0 },
                { name: "Scramble egg", price: 1.60, quantity: 0 },
                { name: "Scraksmsgg", price: 7.40, quantity: 0 }
            ]
        };
    },
    methods: {
        changeSteakQuantity(amount) {
            this.steakQuantity += amount;
            if (this.steakQuantity < 0) {
                this.steakQuantity = 0;
            }
            this.total += 25.12 * amount;
        },
        changeAdditionalQuantity(item, amount) {
            item.quantity += amount;
            if (item.quantity < 0) {
                item.quantity = 0;
            }
            this.total += item.price * amount;
        }
    }
};
</script>
