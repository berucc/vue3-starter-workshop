<script setup>
const internalMessage = 'internal message'
</script>
<template>
  <h2>Component Slots</h2>
  <slot>Default Slot Content</slot>

  <p>
    <slot name="user">User default data</slot>
  </p>

  <p>
    <slot name="data" :internalMessage="internalMessage"
      >Data default data</slot
    >
  </p>
</template>
