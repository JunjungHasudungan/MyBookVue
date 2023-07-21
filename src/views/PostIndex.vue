<script setup>
    import { ref, onMounted } from 'vue';
    import usePost from '../composables/post';
    import PostCard from '../components/PostCard.vue';
    // create some variable to collect all data pasts

    const { posts, post, getPosts,  errors } = usePost();

   onMounted( ()=> {
    getPosts()
    } )
</script>

<template>
    <div class="w-full bg-gray-200">
        <div class="mt-4 px-2 py-2 bg-yellow-200 ">
            <h1 class="text-center">Halaman Post Index</h1>
        </div>
        <div class="w-full px-4 py-4">
            <PostCard />
        </div>

    </div>
</template>