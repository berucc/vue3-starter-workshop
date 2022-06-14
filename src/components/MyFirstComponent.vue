<script setup>
// write js code with composition api here
const name = 'Jane' // no reactivity
const someHTML = '<p><i>Test content</i></p>'
const cssClass = 'test'

// const props = defineProps(['greeting', 'welcomeMessage'])
const props = defineProps({
  greeting: String,
  welcomeMessage: {
    type: String,
    default: 'Hello.',
    validator(value) {
      return ['Hello.', 'Hi'].includes(value)
    },
  },
  magicNumber: {
    type: Number,
    required: true,
  },
  config: {
    type: Object,
    default() {
      return { some: 'value' }
    },
  },
  large: {
    type: Boolean,
  },
})
console.log(props.greeting, props.welcomeMessage, props.magicNumber)
</script>

<template>
  <h2>Template Syntax</h2>
  <!--  v-bind: shorthand is :-->
  <span v-bind:class="cssClass">{{ props.greeting }} {{ name }}</span>
  <div v-html="someHTML"></div>
</template>

<style scoped>
/*css*/
.test {
  color: red;
}
</style>
