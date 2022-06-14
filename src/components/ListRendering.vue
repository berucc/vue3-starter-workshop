<script setup>
import { ref } from 'vue'

const users = ref([{ name: 'Jane' }, { name: 'Joe' }])
</script>

<template>
  <h2>List Rendering</h2>
  <ul>
    <li v-for="{ name } in users" :key="name">{{ name }}</li>
  </ul>
  <span v-for="n in 10" :key="n">{{ n }}</span>
</template>
