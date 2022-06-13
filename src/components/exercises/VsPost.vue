<script setup>
import { ref } from 'vue'

const likes = ref(0)

function like() {
  likes.value++
}
</script>

<template>
  <slot />
  <slot name="user"><span>No user info provided</span></slot>
  <span data-id="like-counter">{{ likes }}</span>
  <button data-id="like-button" @click="like">❤️</button>
</template>
