<script setup>
    import { onMounted } from 'vue';
    import { useAuthStore } from '../stores/auth'

    // create object authUser 
    const authStore = useAuthStore();
    onMounted( async () => {
        // getUser
        await authStore.getUser();
    } );

</script>

<template>
        
    <div v-if="authStore.user" class="bg-lime-300"> 
        <div class="w-full px-2 py-2 justify-items-center">
            <h1> name: {{ authStore.user.name }}</h1>
            <p>email: {{ authStore.user.email }}</p>
        </div>
    </div>
    <div v-else class="px-2 py-2">
        <p class="text-gray-900 font-bold text-center"> silahkan login terlebih dahulu.. </p>
    </div>
</template>

