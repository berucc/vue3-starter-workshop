<script setup>
import { ref } from 'vue'

const number = ref(1)
</script>

<template>
  <h2>Conditional Rendering</h2>
  <div>
    <span v-if="number === 1">Hello</span>
    <span v-else-if="number === 2">World</span>
    <span v-else>!</span>

    <template v-if="false">
      <span>Test</span>
      <span>Test2</span>
    </template>

    <span v-show="number === 1">Hello2</span>
  </div>
</template>
