<script setup>
    import { onMounted, inject } from 'vue';
    import { useAuthStore } from '../stores/auth'

    // create object authUser 
    const authStore = useAuthStore();

    const counter = inject('counter');

    onMounted( async () => {
        // getUser
        await authStore.getUser();
    } );

</script>

<template>
        
    <div
        class="bg-lime-300 w-full"
        v-if="authStore.user"
        >
        <div class="w-full px-2 py-2 justify-items-center">
          
            <a href="#" class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </a>

        </div>
        <div class="mt-2 px-2 py-2 bg-red-200 m-2 p-2">
            <p class="text-xs">
                Counter bisa dimana saja 
                <span class="font-extrabold">
                    ({{ counter.state.baseNumber }})
                </span>
            </p>
        </div>
    </div>
    <div v-else class="px-2 py-2">
        <p class="text-gray-900 font-bold text-center"> silahkan login terlebih dahulu.. </p>
    </div>
</template>

