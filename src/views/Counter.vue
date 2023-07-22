<script setup>
    import CounterCard from '../components/CounterCard.vue';
    import { provide } from 'vue';
    import counter from '../composables/counter';

    // provide to other component for reused
    provide('counter', counter)


</script>

<template>
  <div class="w-full">
        <div class="w-full bg-slate-200 px-2 py-2">
            <CounterCard />
        </div>

    </div>
</template>