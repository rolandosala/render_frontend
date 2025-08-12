<template>
  <div class="create">
    <h1>Create New Item</h1>
    <form @submit.prevent="submitForm">
      <label for="name">Lastname:</label>
      <input type="text" id="name" v-model="lastname" required />
      <label for="name">Firstname:</label>
      <input type="text" id="name" v-model="firstname" required />
      <label for="name">Birthdate:</label>
      <input type="text" id="name" v-model="birthdate" required />
      <button type="submit">Create</button>
    </form>
  </div>
</template>
<script>
export default{
    data(){
        return{
            firstname: '',
            lastname: '',
            birthdate: '',
        }
    }
}
</script>