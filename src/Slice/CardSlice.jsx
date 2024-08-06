import { createSlice } from "@reduxjs/toolkit";
import { totalProducts, counterProducts } from '../helper/helper';

const initialState = {
    selectedItems: [],
    counter: 0,
    total: 0,
    checkOut: false
}
const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        ADD_TO_CARD(state, action) {
            if (!state.selectedItems.find(item => item.id == action.payload.id)) {
                state.selectedItems.push({...action.payload, quantity: 1 })
                state.total = totalProducts(state.selectedItems)
                state.counter = counterProducts(state.selectedItems)
            }


        },
        REMOVE_ITEM(state, action) {
            const newSelectedItems = state.selectedItems.filter(item => item.id != action.payload.id)
            state.selectedItems = newSelectedItems
            state.total = totalProducts(state.selectedItems)
            state.counter = counterProducts(state.selectedItems)
        },
        INCREASE(state, action) {
            const increaseIndex = state.selectedItems.findIndex(item => item.id == action.payload.id)
            state.selectedItems[increaseIndex].quantity++
                state.total = totalProducts(state.selectedItems)
            state.counter = counterProducts(state.selectedItems)
        },
        DECREASE(state, action) {
            const decreaseIndex = state.selectedItems.findIndex(item => item.id == action.payload.id)
            state.selectedItems[decreaseIndex].quantity--
                state.total = totalProducts(state.selectedItems)
            state.counter = counterProducts(state.selectedItems)

        },
        CHECKOUT(state) {
            state.selectedItems = []
            state.counter = 0
            state.total = 0
            state.checkOut = true
        }

    }

})
export const { ADD_TO_CARD, REMOVE_ITEM, INCREASE, DECREASE, CHECKOUT } = cardSlice.actions
export default cardSlice.reducer