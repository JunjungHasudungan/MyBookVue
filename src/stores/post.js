import { defineStore } from "pinia";
import { useRouter } from "vue-router";
import axios from "axios";

export const usePostStore = defineStore("post",  {
    // create state for declaration properthies
    state: () => ({
        dataPost: [], // for catch all data posts from axios
        postErrors: [], // for cathc all data errors from axios
        singlePost: [],
        category: '',
        title: '',
        description: '',
    }),

    getters: {
        posts: ( state ) => state.dataPost,
        errors: ( state ) => state.postErrors,
        post: ( state ) => state.singlePost,
    },

    actions: {
        // create some function for get all posts
        async getAllPost() {

            this.postErrors = [] // call postsErrors for collect errors

            // await this.getToken(); // call getToken again for get Cookies

            const apiPosts = await axios.get('api/posts'); // get all data posts from api using axios

           this.dataPost =  apiPosts.data.data; // insert apiPost to dataPost var global
        },
        async getSinglePost( id ) {
            try {
                const response = await axios.get('/api/posts/' + id);

                this.singlePost = response.data.data;
            }catch( error ) {
                if(error.response === 422 ) {
                    console.log('data tidak ada..');
                }
            }
        },
        async getPost( id ) {
            try {
                const response = await axios.get('/api/posts/' + id)

                this.post = response.data.data;
            } catch( error ) {
                if( error.response === 422 ) {
                    console.log("ada yang error..");
                }
            }
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