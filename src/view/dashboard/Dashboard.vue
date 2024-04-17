<template>
    <div>
        <form>
            <div class="container-fluid p-0 ihwfou border border-1">
                <div class="p-3 pb-0">
                    <div class="input-group mb-3 mb-0">
                        <input type="text" style="border-radius: 58px;" class="form-control" placeholder="Customer name"
                            aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" style="border-radius: 58px;" class="form-control" placeholder="Select table"
                            aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                </div>
                <hr>
                <div class="p-3 pe-0 pb-0 pt-0">
                    <h4 style="font-size: 20px;">Orders details</h4>
                    <div class="p-0" style="overflow-y: auto; height: 270px;">
                        <div class="container-fluid">
                            <div class="row" v-for="(item, index) in items" :key="index">
                                <img class="erhibco col-2" src="../../../public/assets/images/Image.png" alt="">
                                <p class="euvebuy col-4 p-0 ps-2">{{ item.price }}</p>
                                <div class="col-5 p-0">
                                    <div style="float: right; padding-top: 20px;">
                                        <div
                                            style="display: inline-block; height: 36px; width: 36px; border-radius: 100px; background-color: #000000;">
                                            <p type="button" style="margin-left: 44%; margin-top: 11%; color: white;"
                                                @click="decreaseQuantity(index)">-</p>
                                        </div>
                                        <p class="mx-3" style="display: inline-block;">{{ item.quantity }}</p>
                                        <div
                                            style="display: inline-block; height: 36px; width: 36px; border-radius: 100px; background-color: #9C9C9C; margin-left: -5px;">
                                            <p type="button" style="margin-left: 36%; margin-top: 11%;"
                                                @click="increaseQuantity(index)">+</p>
                                        </div>
                                    </div>
                                </div>
                                <hr class="mt-3">
                            </div>
                        </div>
                    </div>
                </div>
                <div  style="height: 109px;">
                    <div class="px-2 pt-1">
                        <p class="uyfgs">Sub Total</p>
                        <b>
                            <p class="uyfgs" style="float: right;">{{ calculateSubTotal() }}</p>
                        </b>
                    </div>
                    <div class="px-3">
                        <button type="button" style="width: 330px; height: 48px; border-radius: 30px; border: none; background-color: #FF5C00"></button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                { price: "$18", quantity: 0 },
                { price: "$18", quantity: 0 },
                { price: "$18", quantity: 0 },
                { price: "$18", quantity: 0 },
                { price: "$18", quantity: 0 },
                { price: "$18", quantity: 0 },
            ]
        };
    },
    methods: {
        increaseQuantity(index) {
            this.items[index].quantity += 1;
        },
        decreaseQuantity(index) {
            if (this.items[index].quantity > 0) {
                this.items[index].quantity -= 1;
            }
        },
        calculateSubTotal() {
            let subTotal = 0;
            for (let i = 0; i < this.items.length; i++) {
                subTotal += this.items[i].quantity * parseInt(this.items[i].price.replace('$', ''));
            }
            return "$" + subTotal.toFixed(2);
        }
    }
}
</script>

<style scoped>
.uyfgs {
    display: inline-block;
}

.iwgf {
    width: 300px;
    border-radius: 30px;
    height: 44px;
    padding: 4px 0px 0px 0px;
}

.ihwfou {
    float: right;
    width: 360px;
    height: 34.5rem;
}

.erhibco {
    height: 74px;
    width: 74px;
    border-radius: 12px;
    padding: 0px;
}

.euvebuy {
    display: inline-block;
}
</style>
