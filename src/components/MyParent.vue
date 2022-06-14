<script setup>
function handleDataChange(data) {
  console.log('Data changed.', data)
}
</script>

<template>
  <h2>Parent - Child Communication via Events</h2>
  <my-child @data="handleDataChange" />
</template>
<script>
import MyChild from './MyChild.vue'

export default {
  components: { MyChild },
}
</script>
