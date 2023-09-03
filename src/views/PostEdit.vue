<script setup>
    import axios from 'axios';
    import { onMounted, ref } from 'vue';
    import useBook from "../composables/book";
    // import { usepost } from "../stores/post";
    import BaseInput from '../components/BaseInput.vue';

    const props = defineProps({
        id: {
            type: String,
            required: true,
        }
    });

    // const post = usepost();
    const post = ref({});
    const errors = ref({});

    // const cate
    const dataPost = ref({
        category: "",
        title: "",
        description: ""
    });

    // we can getPost with first way
    // indirect way to consuming data api
    const getPost = async ()=> {
        try{
            const response = await axios.get(`/api/posts/${props.id}`)

            post.value = response.data.data;

        }catch( error ) {
            if(error.response && error.response.status === 422) {
                console.log(error);
            }
        }
    }

    onMounted( getPost );

    // secomd way
    // direct way to consuming data from api
    // onMounted( async ()=> {
    //     try{
    //         const response = await axios.get(`/api/posts/${props.id}`);
    
    //         post.value = response.data.data;

    //     }catch( error ) {
    //         if( error.response && error.response.status === 422 ) {
    //             console.log( error );
    //         }
    //     }
    // } )

    
</script>

<template>
    <div>
        <ul>
            <li>{{ post }}</li>
        </ul>
    </div>
</template>