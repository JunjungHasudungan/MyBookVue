<script setup>
import { useAuthStore } from '../stores/auth';
import { onMounted, ref } from 'vue';

const email = ref("");
const authStore = useAuthStore();

</script>

<template>
  <div class="border-lg border-gray-900 mt-2 p-2 px-8 py-2"> 
        <div class="px-4 py-4 justify-center items-center  bg-gray-400  rounded-lg border border-gray-500 p-2 ">
            <div class="w-full sm:max-w-md mt-auto px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                <div id="title" class="w-full p-8 px-py mb-2 px-2 py-2 justify-items-center">
                    <h1 class="w-full font-bold text-white item-center text-center">Form Forgot Password</h1>
                </div>
               <form @submit.prevent="authStore.handleForgotPassword(email)" class="justify-center sm:justify-center items-center">
                    <div class="mb-6">
                       <input
                         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         id="email"
                         placeholder="Email"
                         type="email"
                         v-model="email"
                       >
                       <div
                         class="flex"
                       >
                            <!-- <span class="text-red-400 text-xs m-1 p-1"> {{ authStore.errors.email[0] }} </span> -->
                       </div>
                    </div> 
                      <div class="flex-auto justify-self-end w-full">
                          <button type="submit" 
                                  class="text-white  justify-items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                  Submit
                          </button>
                            <router-link to="/register"> 
                            <span class="m-2 px-2 py-2 text-xs flex-auto text-bold text-gray-400 hover:text-gray-200">
                               You to sign-in? Klik to Sign-in
                               </span>
                            </router-link>
                            
                      </div>
                </form>
            </div>
        </div>
    </div>
</template>

