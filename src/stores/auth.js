import { defineStore } from 'pinia';
import axios from 'axios';

// create object useAuth form auth
export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,  // create some object
        authErrors: [] // create authErrors for replace all errors here
    }),
    getters: { 
        user: ( state ) => state.authUser,
        errors: ( state ) => state.authErrors,
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

            this.authErrors = []; // assign all errors to here

            await this.getToken(); // use getToken         

            try {
                await axios.post('/login', {
                    email: data.email,
                    password: data.password,
                });
        
                this.router.push('/');
            } catch(error) {
                if(error.response.status === 422) {
                    this.authErrors =error.response.data.errors
                }
            }
        },

        async handleRegister(data) {
            this.authErrors = [];  // asign errors to here
            await this.getToken();

            try {
                await axios.post('/register', {
                    name: data.name,
                    email: data.email,
                    password: data.password, 
                    password_confirmation: data.password_confirmation,
                });
    
                this.router.push('/');
            } catch (error) {
                if ( error.response.status === 422 ) {
                    this.authErrors = error.response.data.errors
                }
            }
        },

        async handleLogout(){
            await axios.post('/logout');
            this.authUser = null;
        }
    }
});