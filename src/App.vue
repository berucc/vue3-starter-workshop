<script setup>
import MyFirstComponent from './components/MyFirstComponent.vue'
import MyParent from './components/MyParent.vue'
import ReactivityExamples from './components/ReactivityExamples.vue'
import ComputedProperties from './components/ComputedProperties.vue'
import ConditionalRendering from './components/ConditionalRendering.vue'
import ListRendering from './components/ListRendering.vue'
import FormInputBinding from './components/FormInputBinding.vue'
import LifecycleHooks from './components/LifecycleHooks.vue'
import SlotExamples from './components/SlotExamples.vue'

const welcomeMessage = 'Hello.'
console.log('Setup App.vue')
</script>

<template>
  <h1>Hello World!👋</h1>
  <MyFirstComponent
    greeting="hi"
    :welcome-message="welcomeMessage"
    :magic-number="42"
    large
  />
  <MyParent />
  <ReactivityExamples />
  <ComputedProperties />
  <ConditionalRendering />
  <ListRendering />
  <FormInputBinding />
  <LifecycleHooks />
  <SlotExamples>
    <div>Hello {{ welcomeMessage }}</div>
    <!-- <template v-slot:user>My User data</template> -->
    <template #user>My User data</template>
    <template v-slot:data="slotProps"
      >My Data {{ slotProps.internalMessage }}</template
    >
  </SlotExamples>
  <SlotExamples></SlotExamples>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }
}
</style>
