import { defineStore } from 'pinia';
import axios from 'axios';

// create object useAuth form auth
export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null  // create some object
    }),
    getters: { 
        user: (state) => state.authUser 
    },
    actions: {
        // create some function for getToken
        async getToken () {
            await axios.get('/sanctum/csrf-cookie');
        },

        // create some function for get data user from api
        async getUser() {
            // use getToken
            this.getToken();
            
            const data = await axios.get('/api/user');
            this.authUser = data.data;
        }
    }
});