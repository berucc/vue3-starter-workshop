<script setup>
import { ref } from 'vue'

const username = ref('asdf')

// function handleInput(event) {
//   console.log(event.target.value)
//   username.value = event.target.value
// }
</script>

<template>
  <h2>Form Input Binding</h2>
  <!--  v-model is the shorthand for :value="username" @input="handleInput"-->
  <label>Username: <input name="some" v-model="username" /></label>
  <p>Username is: {{ username }}</p>
</template>
