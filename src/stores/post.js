import { defineStore } from "pinia";
import axios from "axios";

export const usePostStore = defineStore("post", {
    // create state for declaration properthies
    state: () => ({
        dataPost: [], // for catch all data posts from axios
        postErrors: [], // for cathc all data errors from axios
        category: '',
        title: '',
        description: '',
    }),

    getters: {

    },

    actions: {
        // create some function for get cookies
        async getToken() {
            await axios.get('/sanctum/csrf-cookie')
        },

        // create some function for get all posts
        async getAllPost() {

            this.postErrors = [] // call postsErrors for collect errors

            await this.getToken(); // call getToken again for get Cookies
            try{

                const apiPosts = await axios.get('api/posts');

                this.dataPost = apiPosts.data

            }catch( error ) {
                if( error.this.dataPost.data === 422 ) {
                    console.log('data tidak ada..')
                }
            }
        },

        async addPost( data ) {

            this.postErrors = [];  // for collect errors posts

            try{
                // try to post data to axios
                await axios.post('/api/posts', {
                    description: data.description,
                    title: data.title,
                    category: data.category,

                });


                this.router.push('/');
            }catch( error ) {
               console.log(error)
            }
        }
    }
});