<script setup>
import { reactive, ref } from 'vue'

const obj = { foo: 'bar' }
const reactiveObject = reactive(obj)

const myRef = ref('test')
const refObject = ref(obj)

console.log(myRef.value)
console.log(reactiveObject.foo)
console.log(refObject.value.foo)

const name = ref('Jane')

setTimeout(() => (name.value = 'Joe'), 1000)
</script>

<template>
  <h2>Reactivity Examples</h2>
  <p>{{ name }}</p>
</template>
