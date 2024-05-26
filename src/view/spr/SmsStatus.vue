<template>
    <div class="home">
        <h3>Table page</h3>
        <button @click="OnLoad"  class="btn_123 mb-4"> Load Data</button>    
        <table class="table  table-dark ">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">NameUz</th>
                    <th scope="col">NameLt</th>
                    <th scope="col">NameRu</th>
                    <th scope="col">NameEn</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="it in myList" :key="it.id">
                    <td class="table-primary">{{it.id}}</td>
                    <td class="table-primary">{{ it.nameUz }}</td>
                    <td class="table-primary">{{ it.nameLt }}</td>
                    <td class="table-primary">{{ it.nameRu }}</td>
                    <td class="table-primary">{{ it.nameEn }}</td>
                    <td class="table-primary">{{ it.status }}</td>

                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import DataService from '../../services/data.service'


let myList = ref([]);

function OnLoad(){

    DataService.getSpSmsStatus().then((response) => { 
        console.log(response.data);
        myList.value = response.data;
    })

}

</script>

<style scoped>
.btn_123 {
    background-color: blue;
    width: 30%;
    height: 3rem;
    border-radius: 10px;
    border: none;
    margin-left: 35%;
    color: #ffffff;
}
.btn_123:active {
    color: black;
    border: black;
}
</style>