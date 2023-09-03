import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

// create export function
export default function useBook(){
    // create object ref for var book
    const book = ref([]);
    const books = ref([]);
    const errors = ref({});


    const getBook = async ( id )=> {
        try{
            const apiResponse = await axios.get('/api/posts/' + id);

            book.value = apiResponse.data.data;
        }catch(error){

            if(error.response === 422) {
                errors.value = response.data.errors;
                console.log('data tidak ada');
            }
        }
    }

    return {
        getBook,
        book,
    }
}