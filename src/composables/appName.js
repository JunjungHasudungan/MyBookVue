import { ref } from "vue";

export default function useAppName(){
    const app_name = import.meta
   
    
    return {
        app_name
    }
}
