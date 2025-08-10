<template>
    <div class="dashboard">
        <h1>Dashboard</h1>
        <ul>
            <li v-for="item in data" :key="item.id">{{ item.firstname }} {{ item.lastname }}</li>
        </ul>
        <button @click="fetchData">Refresh Data</button>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            data: []
        }
    },
    onMounted() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            axios.get('http://localhost:3000/fetchdata')
                .then(response => {
                    this.data = response.data;
                    console.log(this.data)
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }

}
</script>