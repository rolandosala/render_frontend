<template>
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
      <router-link to="/">
        <button>Dashboard</button>
      </router-link>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      birthdate: '',
    }
  },
  methods: {
    createData() {
      try {
        axios.post('/createdata', {
          firstname: this.firstname,
          lastname: this.lastname,
          birthdate: this.birthdate
        })
          .then(response => {
            console.log('Data created successfully:', response.data);
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