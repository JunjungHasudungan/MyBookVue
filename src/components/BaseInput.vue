<template>
    <label for="title" class="font-bold text-xs text-blue-200"> {{ label }} </label>
       <input
         class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
         id="title"
         v-bind="$attrs"
         :placeholder="label"
         :value="modelValue"
         @input="$emit('update:modelValue', $event.target.value)"
         type="title"
       >
</template>

<script setup>

const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    modelValue: {
        type:[String, Number],
        default: ''
    },
    type: String
})

    // export default {
    //     props: {
    //         label: {
    //             type: String,
    //             default: ''
    //         },
    //         modelValue: {
    //             type: [String, Number], 
    //             default: ''
    //         }
    //     }
    // }

</script>