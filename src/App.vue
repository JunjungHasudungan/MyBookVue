<script setup>
  import Nav from './components/Nav.vue'
  import counter from './composables/counter';
  import { provide } from 'vue';

  provide('counter', counter)

</script>

<template>
  <main>
    <Nav />
    <RouterView />
  </main>
</template>



