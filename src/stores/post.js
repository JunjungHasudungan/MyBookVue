import { defineStore } from "pinia";

export const usePostStore = defineStore({
    id: "post",
    // create state for declaration properthies
    state: () => ({
        title: '',
        description: ''  
    }),

    getters: {

    },

    actions: {

    }
});