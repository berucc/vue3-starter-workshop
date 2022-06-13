<script setup>
defineEmits(['logout'])
defineProps({
  name: {
    type: String,
    default: 'World',
  },
  userOfTheDay: String,
})
</script>

<template>
  <h1>Hello {{ name }}!</h1>
  <p v-if="userOfTheDay === name">You are the user of the day!🎉</p>
  <button data-id="logout-button" @click="$emit('logout', 'Bye bye')">
    Logout
  </button>
</template>
