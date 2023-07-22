import { defineStore } from "pinia";

export const useCounterStore = defineStore({
    id:'counter',
    // state
    state: () => ({
        baseNumber: 0,  // declaration properthies name
        name: 'Hasudungan',
        colour: 'yellow',
    }),
    // getters
    getters: {
        oddOrEven: (state) => {
            if (state.baseNumber % 2 === 0 ) return 'even'
            return 'odd'
        }, 
        counterSquared: (state) => {
            return state.baseNumber * state.baseNumber
        }

    },
    // actions
    actions: {
        increaseButton() {
            this.baseNumber++
        },
        decreaseButton() {
            this.baseNumber--
        },
    },
});