import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../config/api";
const initialState = {
    products: [],
    isLoading: false,
    error: ""
}
export const fetchPosts = createAsyncThunk("products/fetchProducts", async() => {
    try {
        const res = await api.get('/products')
        return res.data

    } catch (error) {
        return error.message

    }
})
const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers(builder) {
        builder.addCase(fetchPosts.pending, (state) => {
                state.isLoading = true
            }),
            builder.addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false
                state.products = action.payload
            }),
            builder.addCase(fetchPosts.rejected, (state, action) => {
                state.error = action.error.message
            })
    }

})
export default productsSlice.reducer