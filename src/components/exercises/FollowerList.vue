<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  followers: Array,
})

function getFollowerFullName(follower) {
  return `${follower.first_name} ${follower.last_name}`
}

const searchTerm = ref('')
const filteredFollowers = computed(() => {
  return props.followers.filter((follower) => {
    return (
      follower.last_name.includes(searchTerm.value) ||
      follower.first_name.includes(searchTerm.value)
    )
  })
})
</script>

<template>
  <label
    >Search for a user
    <input data-id="search-input" v-model="searchTerm" />
  </label>
  <span data-id="search-term">You searched for '{{ searchTerm }}'</span>
  <ul>
    <li v-for="follower in filteredFollowers" :key="follower.id" data-id="user">
      {{ getFollowerFullName(follower) }}
    </li>
  </ul>
</template>
