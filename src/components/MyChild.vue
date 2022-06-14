<script setup>
const emit = defineEmits(['data'])

function handleClick(event) {
  console.log('Button was clicked.', event)
  emit('data', { foo: 'bar' })
}
</script>

<template>
  <h3>Child</h3>
  <button @click="handleClick">Click me</button>
</template>
