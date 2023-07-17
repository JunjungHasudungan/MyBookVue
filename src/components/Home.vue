<script setup>
    import { ref, onMounted } from 'vue';
    import axios from 'axios';

    const user = ref();

    onMounted( async () => {
        // create var data for data user from axios
        const data = await axios.get('/api/user');
       user.value = data.data;
    } );
</script>

<template>
    <div>
        <!-- display data user auth -->
        <h1> name: {{ user?.name }}</h1>
        <p>email: {{ user?.email }}</p>
    </div>
</template>

