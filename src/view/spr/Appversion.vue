<template>
    <div class="home">
        <h3>Table page</h3>
        <button @click="OnNew"> Yangi Data</button>


        <button @click="OnLoad"> Load Data</button>
        <table class="table  table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col" style="text-align: center;">NameUz</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="it in myApp" :key="it.id">
                    <td class="table-primary">{{ it.id }}</td>
                    <td class="table-primary">{{ it.currentVersion }}</td>
                    <td class="table-primary">{{ it.acceptableVersion }}</td>
                    <td class="table-primary">{{ it.description }}</td>
                    <td class="table-primary">{{ it.typeOs }}</td>
                    <td class="table-primary">{{ it.status }}</td>
                </tr>
            </tbody>
        </table>

        <Modal v-model="isShowModal" closeable header="My Modal" maxwidth="1000px">
            <div class="mb-3" style="width: 322px;  display: inline-block;">
                <label for="exampleFormControlInput1" class="form-label">currentVersion</label>
                <input type="text" v-model="data.currentVersion" class="form-control" id="exampleFormControlInput1">
            </div>
            <div class="mb-3" style="width: 322px;  display: inline-block;">
                <label for="exampleFormControlInput1" class="form-label">acceptableVersion</label>
                <input type="text" v-model="data.acceptableVersion" class="form-control" id="exampleFormControlInput1">
            </div>
            <div class="mb-3" style="width: 322px;  display: inline-block;">
                <label for="exampleFormControlInput1" class="form-label">description</label>
                <input type="text" v-model="data.description" class="form-control" id="exampleFormControlInput1">
            </div>
            <div class="mb-3" style="width: 322px;  display: inline-block;">
                <label for="exampleFormControlInput1" class="form-label">typeOs</label>
                <input type="taxt" v-model="data.typeOs" class="form-control" id="exampleFormControlInput1" placeholder="ALL">
            </div>
            <div class="mb-3" style="width: 322px;  display: inline-block;">
                <label for="exampleFormControlInput1" class="form-label">status</label>
                <input type="number" v-model="data.status" class="form-control" id="exampleFormControlInput1">
            </div>
            <div class="mb-3" style="width: 322px;  display: inline-block;">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" v-model="data.acceptableVerskion" class="form-control" id="exampleFormControlInput1">
            </div>
            <button type="button" class="btn btn-success" @click="OnSave">Saqlash</button>
        </Modal>

    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import DataService from '../../services/data.service'
import Modal from "../../dialogs/Modal.vue"



const isShowModal = ref(false);
function OnNew() {
    isShowModal.value = true;
}



let myApp = ref([])
let data = ref({})

function OnSave() {
    DataService.insertMobileAppVersion(data.value)
        .then((response) => {
            isShowModal.value = false;
            OnLoad();
        })
}

function OnLoad() {

    DataService.getMobileAppVersion().then((response) => {
        myApp.value = response.data;
    })

}

</script>