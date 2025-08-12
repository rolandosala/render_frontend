<template>
    <div class="dashboard">
        <h1>Dashboard</h1>
        <ul>
            <li v-for="item in data" :key="item.id">{{ item.firstname }} {{ item.lastname }}</li>
        </ul>
        <button @click="fetchData">Refresh Data</button>

    </div>
    <div class="create">
        <h1>Create New Item</h1>
        <form @submit.prevent="submitForm">
            <label for="name">Lastname:</label>
            <input type="text" id="name" v-model="lastname" required />
            <label for="name">Firstname:</label>
            <input type="text" id="name" v-model="firstname" required />
            <label for="name">Birthdate:</label>
            <input type="date" id="name" v-model="birthdate" required />
            <button type="submit" @click="createData">Create</button>
        </form>
    </div>
</template>
<script>
import axios from 'axios';
import api from '../api/api';
import Create from './Create.vue';
export default {
    data() {
        return {
            data: [],
            firstname: '',
            lastname: '',
            birthdate: '',
        }
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            axios.get('/fetchdata')
                .then(response => {
                    this.data = response.data;
                    console.log(this.data)
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
        createData() {
            try {
                axios.post('/createdata', {
                    firstname: this.firstname,
                    lastname: this.lastname,
                    birthdate: this.birthdate
                })
                .then(response => {
                    console.log('Data created successfully:', response.data);
                    this.fetchData(); // Refresh data after creation
                })
                .catch(error => {
                    console.error('Error creating data:', error);
                });
            } catch (error) {
                console.error('Error creating data:', error);
            }
        }
    }

}
</script>