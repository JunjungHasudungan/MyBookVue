<script setup>
    import { useCounterStore } from '../stores/counter';

    const countStore = useCounterStore()// create some object from var useCounterStore
    
</script>

<template>
        <div class="w-full mt-1 border-4 border-gray-900 rounded-lg">
        <div class="justify-items-center">
            <div class="mx-auto">
                <p class="w-full text-xl text-yellow-600 text-center px-1 py-1 font-bold">Counter using pinia</p>
            </div>
             <h1 :style="{ color: countStore.colour }"
                class="text-center font-extrabold text-xl">{{ countStore.baseNumber }}</h1>
             <div class="text-center mt-1">
               {{ countStore.baseNumber }}
                <sup>2</sup> = {{ countStore.counterSquared }}
             </div>
        </div>
        <div class="flex mt-1 place-content-center  gap-4 space-x-4 w-full">
            <button @click="countStore.decreaseButton"
                class="bg-yellow-400 px-4 py-4 rounded-lg font-bold text-center hover:bg-yellow-200"> 
                - 
            </button>

            <button @click="countStore.increaseButton"
                class="bg-yellow-400 px-4 py-4 rounded-lg font-bold text-center hover:bg-yellow-200">
                 + 
            </button>
            
        </div>
        <div class="w-full mt-1">
            <p class="text-xl font-bold text-indigo-900 text-center"> {{ countStore.oddOrEven }}</p>
        </div>

        <div class="place-content-center flex mt-2 w-full mb-2">
           <input v-model="countStore.colour"
              class="w-80 text-xl px-2 py-2 border-2 border-indigo-600 rounded-lg"
              placeholder="Plesse Enter color code.."
              type="text"
            >
        </div>
    </div>
</template>