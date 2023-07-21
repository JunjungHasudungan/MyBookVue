<script setup>
    import { inject, computed } from "vue";

    // create object form inject 
        const dataCounter = inject('counter')

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
    <div class="w-full mt-2 border-4 border-gray-900 rounded-lg">
        <div class="justify-items-center">
             <h1 :style="{ color: dataCounter.state.colorCode }"
                class="text-center font-extrabold text-xl">{{ dataCounter.state.baseNumber }}</h1>
             <div class="text-center mt-2">
                {{ dataCounter.state.baseNumber }}
                <sup>2</sup> = {{ dataCounter.getters.counterSquared() }}
             </div>
        </div>
        <div class="flex mt-2 justify-center gap-4 space-x-4 w-full">
            <button @click="dataCounter.methods.decreaseButton()"
                class="bg-yellow-400 px-4 py-4 rounded-lg font-bold text-center hover:bg-yellow-200"> 
                - 
            </button>

            <button @click="dataCounter.methods.increaseButton()"
                class="bg-yellow-400 px-4 py-4 rounded-lg font-bold text-center hover:bg-yellow-200">
                 + 
            </button>
        </div>
        <div class="place-content-center flex mt-4 w-full mb-2">
           <input
              class="w-80 text-xl px-2 py-2 border-2 border-indigo-600 rounded-lg"
              v-model="colorCode"
              placeholder="Plesse Enter color code.."
              type="text"
            >
        </div>
    </div>
</template>