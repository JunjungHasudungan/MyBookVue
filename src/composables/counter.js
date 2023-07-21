import { reactive, readonly } from "vue";

// create some object for reactive
const state = reactive({
    baseNumber: 0,
    colorCode: 'green',
});

// create some objects getters
const getters = {
    counterSquared() {
        return state.baseNumber * state.baseNumber
    }
}

// create object methods 
const methods = {

    increaseButton() {
        state.baseNumber++
    },
    decreaseButton() {
        state.baseNumber--
    },
    setColourCode(val) {
        state.colorCode = val
    }
}


export default {
    state: readonly(state),
    methods,
    getters,
}