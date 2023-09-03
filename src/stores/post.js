import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import axios from "axios";

export const usePostStore = defineStore("post",  {
    // create state for declaration properthies
    state: () => ({
        dataPost: [], // for catch all data posts from axios
        // dataUser: null,
        postErrors: [], // for cathc all data errors from axios
        post: [],
        category: '',
        title: '',
        description: '',
    }),

    getters: {
        // user: ( state ) => state.dataUser,
        posts: ( state ) => state.dataPost,
        errors: ( state ) => state.postErrors,
        post: ( state ) => state.post,
    },

    actions: {
        // create some function for get cookies
        // async getToken() {
        //     await axios.get('/sanctum/csrf-cookie')
        // },

        // crate some function for get data user
        // async getUser() {
        //     await this.getToken();

        //     const apiUser = await axios.get('api/user');
        //     this.dataUser = apiUser.data;
        // },

        // create some function for get all posts
        async getAllPost() {

            this.postErrors = [] // call postsErrors for collect errors

            // await this.getToken(); // call getToken again for get Cookies

            const apiPosts = await axios.get('api/posts'); // get all data posts from api using axios

           this.dataPost =  apiPosts.data.data; // insert apiPost to dataPost var global
        },

        async addPost( data ) {
            const router = useRouter();

            this.postErrors = [];  // for collect errors posts

            try{
                await axios.post('/api/posts', {
                    description: data.description,
                    title: data.title,
                    category: data.category,
                });

                this.router.push({name: 'PostIndex'}); // passing route to postIndex

            }catch( error ) {
               if ( error.response.status === 422 ) {
                    this.postErrors = error.response.data.errors
               }
            }
        },
    }
});