import { ref } from "vue";
import { useRouter } from "vue-router";
// import '../axios'
import axios from "axios";


// create some function default 
export default function usePost() {
   
    const posts = ref([]) // variable for all posts
    const post = ref([]) // variable for item post
    const errors = ref({}) // variable object for collect all errors
    const route = useRouter();  //  variable for routing

    // axios.defaults.baseURL= "http://localhost:8000/api/" // catch data api using axios 

    // create some function to catch all data post
    const getPosts = async () => {
        let respornse = await axios.get('/posts'); // insert to some variable

        posts.value = respornse.data.data;  // insert to variable posts 
    }
 
    // call return to reuse to other place/components
    return {
        post,
        posts,
        errors,
        route,
        getPosts,
    }


}

// password