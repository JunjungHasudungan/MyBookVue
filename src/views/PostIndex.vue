<script setup>
    import { ref, onMounted } from 'vue';
    import usePost from '../composables/post';
    // create some variable to collect all data pasts

    const { posts, post, getPosts,  errors } = usePost();

   onMounted( ()=> {
    getPosts()
    } )
</script>

<template>
    <div>
        <h1 class="text-center">Halaman Post Index</h1>
    </div>
</template>