<script setup>
    import { ref } from "vue";
    import { useAuthStore } from "../stores/auth";

    const authStore = useAuthStore();

    const form = ref({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    })
</script>

<template>
    <div class="border-lg border-gray-900 mt-2 p-2 px-8 py-2"> 
        <div class="px-4 py-4 justify-center items-center  bg-gray-200  rounded-lg border border-gray-500 p-2 ">
            <div class="w-full sm:max-w-md mt-auto px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                <div id="title" class="w-full px-py mb-2 px-2 py-2 justify-items-center">
                    <h1 class="w-full font-bold text-white item-center text-center">Form Register</h1>
                </div>
                <form   @submit.prevent="authStore.handleRegister(form)"
                        class="justify-center sm:justify-center items-center">
                    <div class="mb-6">
                        <input
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          id="text"
                          placeholder="Name.."
                          type="text"
                          v-model="form.name"
                        >
                       <div
                          class="flex"
                          v-if="authStore.errors.name"
                        >
                            <span class="text-red-400 text-xs m-1 p-1"> {{ authStore.errors.name[0] }}  </span>
                        </div>
                    </div> 

                    <div class="mb-6">
                        <input
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          id="email"
                          placeholder="Email.."
                          type="email"
                          v-model="form.email"
                        >
                        <div
                          class="flex"
                          v-if="authStore.errors.email"
                        >
                            <span class="text-red-400 text-xs m-1 p-1">{{ authStore.errors.email[0] }}</span>
                        </div>
                    </div> 

                    <div class="mb-6">
                       <input
                         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                         id="password"
                         placeholder="Password"
                         type="password"
                         v-model="form.password"
                       >
                       <div
                         class="flex"
                         v-if="authStore.errors.password"
                       >
                            <span class="text-red-400 text-xs m-1 p-1"> {{ authStore.errors.password[0] }}</span>
                       </div>
                    </div> 
                    <div class="mb-4">
                        <input
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          id="confirm_password"
                          placeholder="Password Confirmation"
                          type="password"
                          v-model="form.password_confirmation"
                        >
                        <div
                          class="flex"
                          v-if="authStore.errors.password"
                        >
                            <span class="text-red-400 font-xs m-1 p-1">  {{ authStore.errors.password[0] }} </span>
                        </div>
                    </div> 
                    <div class="flex-auto justify-self-end space-x-2"> 
                      <button type="submit" 
                              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Submit
                      </button>
                      <router-link :to="{ name: 'Login' }">
                        <span class="m-2 p-2 px-2 py-2 text-xs flex-auto text-bold text-gray-400 hover:text-gray-200"> you already have account?</span>
                      </router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>