<template>
    <div class="home">
        <h3>Table page</h3>
        <button @click="OnLoad"> Load Data</button>
        <table class="table  table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col" style="text-align: center;">NameUz</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="it in myregion" :key="it.id">
                    <td class="table-primary">{{ it.status }}</td>
                    <td class="table-primary">{{ it.nameEn }}</td>
                    <td class="table-primary">{{ it.nameLt }}</td>
                    <td class="table-primary">{{ it.nameRu }}</td>
                    <td class="table-primary">{{ it.nameUz }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import DataService from '../../services/data.service'


let myregion = ref([])

function OnLoad() {

    DataService.getregion().then((response) => {
        myregion.value = response.data;
    })

}

</script>