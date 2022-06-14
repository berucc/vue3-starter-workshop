<script setup>
import { onBeforeMount, onMounted, ref } from 'vue'

onMounted(() => {
  console.log('mounted')
})

onBeforeMount(() => {
  console.log('before mount')
})

console.log('setup')

const test = ref({ id: 'asdf' })
</script>
<template>
  <h2>Lifecycle Hooks</h2>
  <p v-if="test.id">Test</p>
</template>
