<script setup>
    import { ref, onMounted } from 'vue';
    import { usePostStore } from '../stores/post';
    
    const postStore = usePostStore()

    onMounted( async () => {
        await postStore.getAllPost();
    } );
</script>

<template>
    <div class="w-full bg-gray-200">
        <div class="mt-4 px-2 py-2 bg-yellow-200 ">
            <h1 class="text-center">Halaman Post Index</h1>
        </div>
        <div class="w-full px-4 py-4">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
               <div
                 class="w-full px-2 py-2 bg-yellow-400 mb-2"
                 v-if="postStore.posts.length == 0"
               >
                    <span class="font-extrabold text-white">Data Post belum ada..</span>
                </div>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                No
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Kategori
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Judul
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Keterangan
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Created at
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in postStore.posts" :key="item.id"
                          class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                        >
                            <td class="px-6 py-4">
                                {{ index + 1}}
                            </td>
                            <td class="px-6 py-4">
                                {{ item.category }}
                            </td>
                            <td class="px-6 py-4">
                                {{ item.title }}
                            </td>
                            <td class="px-6 py-4">
                               {{ item.description }}
                            </td>
                            <td>
                                {{ item.created_at }}
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>