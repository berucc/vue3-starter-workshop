<script setup>
import { computed, ref, watch } from 'vue'

const firstName = ref('Joe')
const lastName = ref('Doe')

// const fullName = firstName.value + ' ' + lastName.value
const fullName = computed(() => {
  return firstName.value + ' ' + lastName.value
})

watch(firstName, (newValue, oldValue) => {
  console.log(newValue, oldValue)
})

setTimeout(() => (firstName.value = 'Jane'), 2000)
</script>

<template>{{ fullName }}</template>
