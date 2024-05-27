<template>
    
    <div class="home">
        <h3>Table page</h3>
        <button @click="OnLoad" > Load Data</button>    
        <table class="table  table-dark ">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">imgUrl</th>
                    <th scope="col">slug</th>
                    <th scope="col">orderIndex</th>
                    <th scope="col">parentId</th>
                    <th scope="col">parent</th>
                    <th scope="col">groupId</th>
                    <th scope="col">group</th>
                    <th scope="col">NameUz</th>
                    <th scope="col">NameLt</th>
                    <th scope="col">NameRu</th>
                    <th scope="col">NameEn</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="it in myList" :key="it.id">
                    <td class="table-primary">{{ it.id }}</td>
                    <td class="table-primary">{{ it.imgUrl }}</td>
                     <td class="table-primary">{{ it.sulug }}</td>
                    <td class="table-primary">{{ it.orderIndex }}</td>
                    <td class="table-primary">{{ it.parentId }}</td>
                    <td class="table-primary">{{ it.parent }}</td>
                    <td class="table-primary">{{ it.groupId }}</td>
                    <td class="table-primary">{{ it.group }}</td>
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

    DataService.getCategory().then((response) => { 
        console.log(response.data);
        myList.value = response.data;
    })

}

</script>
