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

        async getUser() {

            // use getToken
            await this.getToken();             

            // get Data user from api user using axios
            const data = await axios.get('/api/user');
            this.authUser = data.data;
        },

        async handleLogin(data) {

             // use getToken
            await this.getToken();            

            await axios.post('/login', {
                email: data.email,
                password: data.password,
            });
    
            this.router.push('/');
        },

        async handleRegister(data) {

            await this.getToken();

            await axios.post('/register', {
                name: data.name,
                email: data.email,
                password: data.password, 
                password_confirmation: data.password_confirmation,
            });

            this.router.push('/');
        },

        async handleLogout(){
            await axios.post('/logout');
            this.authUser = null;
        }
    }
});