<script setup>
    import axios from 'axios';
    import { onMounted, ref } from 'vue';
    import useBook from "../composables/book";
    import { usePostStore } from "../stores/post";
    import BaseInput from '../components/BaseInput.vue';

    const props = defineProps({
        id: {
            type: String,
            required: true,
        }
    });

    const singlePost = usePostStore();
    const post = ref({});
    const errors = ref({});

    // const cate
    const dataPost = ref({
        category: "",
        title: "",
        description: ""
    });

    // cara #1
    // const getPost = async ()=> {
    //     try{
    //         const response = await axios.get(`/api/posts/${props.id}`)

    //         post.value = response.data.data;

    //     }catch( error ) {
    //         if(error.response && error.response.status === 422) {
    //             console.log(error);
    //         }
    //     }
    // }

    // onMounted( getPost );

    // #2
    onMounted( async ()=> {
            await singlePost.getSinglePost( props.id ); 
    });

    // ##
    // onMounted( async ()=> {
    //     try{
    //         const response = await axios.get(`/api/posts/${props.id}`);
    
    //         post.value = response.data.data;

    //     }catch( error ) {
    //         if( error.response && error.response.status === 422 ) {
    //             console.log( error );
    //         }
    //     }
    // } )

    
</script>

<template>
    <div class="flex flex-col border-lg border-gray-900 mt-2 p-2 px-8 py-2"> 
        <div class=" flex space-x-2 border-b border-yellow-900 sm:justify-center items-center px-4 py-4  bg-gray-400  rounded-lg border border-gray-500 p-2 ">
            <div class="w-full mt-auto px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                <div id="title" class="w-full p-8 px-py mb-2 px-2 py-2 justify-items-center">
                    <h1 class="w-full font-bold text-white item-center text-center">Form an event Edit </h1>
                </div>
               
               <form  @submit.prevent="singlePost.addPost(formPost)" class="justify-center sm:justify-center space-y-2">
                        <label for="category" class="text-xs font-bold text-blue-200" > Select a category</label>
                       <select
                         class="w-full px-2 py-2 rounded-lg border-2 border-slate-600"
                         id=""
                         v-model="singlePost.category"
                         name="category"
                       >
                        <option
                          v-for="item in singlePost.category"
                          :key="item"
                          :selected="item == category"
                          :value="item"
                          class="rounded-lg"
                        >
                            {{ item }}
                        </option>
                       </select>
                       <!-- display error category -->
                       <div class="flex" v-if="singlePost.errors.category">
                        <span class="text-red-400 text-xs m-1 p-1"> {{ singlePost.errors.category[0] }} </span>
                       </div>
                       <BaseInput 
                       v-model="singlePost.title"
                       label="Judul"
                       type="text"
                       />
                       <!-- <input type="text" v-model="formPost.user_id"> -->
                       <!-- display error title -->
                      <div
                         class="flex"
                         v-if="singlePost.errors.title"
                       >
                       <span class="text-red-400 text-xs m-1 p-1">
                            {{ singlePost.errors.title[0] }}
                       </span>

                       </div>
                       <BaseInput 
                       v-model="singlePost.description"
                       label="Deskripsi"
                       type="text"
                       />

                       <!-- display error description -->
                       <div
                         class="flex"
                         v-if="singlePost.errors.description"
                       >
                        <span class="text-red-400 text-xs" > {{ singlePost.errors.description[0] }} </span>
                       </div>

                      <div class="flex-auto justify-self-end space-x-6 w-full">
                          <button type="submit" 
                                  class="text-white  justify-items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                  Submit
                          </button>
                      </div>
                </form>
            </div>

        </div>
    </div>
</template>