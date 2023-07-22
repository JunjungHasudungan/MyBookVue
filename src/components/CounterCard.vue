<script setup>
    import { inject, computed } from "vue";
    import CounterUsingPinia from './CounterUsingPinia.vue'
    import counter from "../composables/counter";

        const dataCounter = inject('counter') // create object form inject 

        const colorCode = computed({
            get() {
                return dataCounter.state.colorCode
            }, 
            set(val) {
                dataCounter.methods.setColourCode(val)
            }
        });


    // const dataCounter = reactive({
    //     baseNumber: 0,
    // })

    // const increaseButton = () => {
    //     dataCounter = dataCounter.baseNumber++
    // }

    // const decreaseButton = () => {
    //     dataCounter = dataCounter.baseNumber--
    // }
</script>

<template>
    <div class="w-full mt-1 border-4 border-gray-900 rounded-lg">
        <div class="justify-items-center">
            <div class="mx-auto">
                <p class="w-full text-xl px-1 py-1 text-center font-bold text-blue-600">Counter using composition API</p>
            </div>
             <h1 :style="{ color: dataCounter.state.colorCode }"
                class="text-center font-extrabold text-xl">{{dataCounter.state.baseNumber }}</h1>
             <div class="text-center mt-1">
                {{ dataCounter.state.baseNumber }}
                <sup>2</sup> = {{ dataCounter.getters.counterSquared() }}
             </div>
        </div>
        <div class="flex mt-1 place-content-center  gap-4 space-x-4 w-full">
            <button @click="dataCounter.methods.decreaseButton()"
                class="bg-blue-600 px-4 py-4 rounded-lg font-bold text-center hover:bg-blue-400"> 
                - 
            </button>

            <button @click="dataCounter.methods.increaseButton()"
                class="bg-blue-600 px-4 py-4 rounded-lg font-bold text-center hover:bg-blue-400">
                 + 
            </button>
            
        </div>
        <div class="w-full mt-1">
            <p class="text-xl font-bold text-indigo-900 text-center"> {{ dataCounter.getters.counterEvenOrOdd() }}</p>
        </div>

        <div class="place-content-center flex mt-2 w-full mb-2">
           <input
              class="w-80 text-xl px-2 py-2 border-2 border-indigo-600 rounded-lg"
              v-model="colorCode"
              placeholder="Plesse Enter color code.."
              type="text"
            >
        </div>
    </div>
    <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700">
    <CounterUsingPinia />
</template>