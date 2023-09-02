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
          
            <a href="#" class="block w-full p-6">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-blue-400">
                    Halo    
                    <span class="font-bold text-2xl text-blue-600">
                    {{ authStore.user.name }} ,
                    </span> Welcome Back To Your Book
                </h5>

            </a>
            <div class="w-full mx-auto mt-2 border-2 rounded-lg shadow border-blue-200">
                
                <h2 class="px-2 mb-2 text-lg font-bold text-gray-900">Your Data:</h2>
                <ul class="px-2 py-2 max-w-md space-y-1 text-gray-600 list-disc list-inside">
                    <li>
                        <span class="font-bold">Id: </span>  {{ authStore.user.id }}
                    </li>
                    <li>
                        <span class="font-bold">Email: </span>  {{ authStore.user.email }}
                    </li>
                </ul>

            </div>

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

