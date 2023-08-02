
<script setup>

    import { reactive, ref } from 'vue';
    import BaseInput from '../components/BaseInput.vue';
    import EventDisplay from './EventDislpay.vue';
    import { usePostStore } from '../stores/post';

    const dataCategories = ref([
        'nature',
        'food',
        'education'
    ])

    const formPost = reactive({
        description: '',
        title: '',
        category: '',
    });

    const postStore  = usePostStore()   // create object from usePostStore


</script>

<template>
    <div class="w-full">
        <div class="w-full px-2 py-2">
            <h1 class="text-center font-bold text-gray-600">Simple form page</h1>
        </div>

    </div>

    <div class="flex flex-col border-lg border-gray-900 mt-2 p-2 px-8 py-2"> 
        <div class=" flex space-x-2 border-b border-yellow-900 sm:justify-center items-center px-4 py-4  bg-gray-400  rounded-lg border border-gray-500 p-2 ">
            <div class="w-full mt-auto px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                <div id="title" class="w-full p-8 px-py mb-2 px-2 py-2 justify-items-center">
                    <h1 class="w-full font-bold text-white item-center text-center">Form an event</h1>
                </div>
               
               <form  @submit.prevent="postStore.addPost(formPost)" class="justify-center sm:justify-center space-y-2">
                        <label for="category" class="text-xs font-bold text-blue-200" > Select a category</label>
                       <select
                         class="w-full px-2 py-2 rounded-lg border-2 border-slate-600"
                         id=""
                         v-model="formPost.category"
                         name="category"
                       >
                        <option
                          v-for="item in dataCategories"
                          :key="item"
                          :selected="item == category"
                          :value="item"
                          class="rounded-lg"
                        >
                            {{ item }}
                        </option>
                       </select>

                       <BaseInput 
                       v-model="formPost.title"
                       label="Judul"
                       type="text"
                       />

                       <BaseInput 
                       v-model="formPost.description"
                       label="Deskripsi"
                       type="text"
                       />
                       <!-- <input type="text" v-model="postStore.title">
                       <input type="text" v-model="postStore.description"> -->

                      <div class="flex-auto justify-self-end space-x-6 w-full">
                          <button type="submit" 
                                  class="text-white  justify-items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                  Submit
                          </button>
                      </div>
                </form>
            </div>

            <!-- <EventDisplay /> -->


        </div>
    </div>
</template>
